import { flow } from "lodash";
import { buildUrl } from "utils";
import { LocationManager, LocationManagerOptions } from "./LocationManager";
import { SimpleType, Value } from "./utils";
import { useQueryParamsConsumer } from "./QueryParamsProvider";

type ParamsFunction = (key: string, value: SimpleType) => void;
type RemoveFunction = (key: string, value?: SimpleType) => void;
type PickFunction = (key: string | string[]) => void;
type SetFunction<Params> = (
  params?: Params,
  options?: { shouldReplace?: boolean }
) => void;
type ChangeFunction = (key: string, value: Value) => void;
type HasFunction = (key: string, value?: SimpleType) => boolean;
type WithoutFunction = (keys: string | string[]) => void;
type GetFunction = <Val = Value>(key: string, defaultValue?: Value) => Val;

type Option = string | number;
type RequiredOptions = {
  limit: Option;
  offset: Option;
};
type Options = RequiredOptions & { total: Option };
type BasicPages = {
  current: number;
  change(page: number, key?: string): void;
};
type Pages = BasicPages & { total: number };

export type QueryParams = ReturnType<typeof useQueryParams>;

export const useQueryParams = <Params extends object>(
  options?: LocationManagerOptions
) => {
  const { location, navigate } = useQueryParamsConsumer();

  const locationManager = LocationManager<Params>(location, options);

  const push =
    (shouldReplace = false) =>
    (newUrl: string): string => {
      if (newUrl === locationManager.url) return newUrl;

      if (shouldReplace) {
        navigate(newUrl, { replace: true });
        return newUrl;
      }

      navigate(newUrl);
      return newUrl;
    };

  const add: ParamsFunction = flow(locationManager.add, push());

  const change: ChangeFunction = flow(locationManager.change, push());

  const remove: RemoveFunction = flow(locationManager.remove, push());

  const toggle: ParamsFunction = flow(locationManager.toggle, push());

  const pick: PickFunction = flow(locationManager.pick, push());

  const set: SetFunction<Params> = flow(locationManager.set, push());

  const extend: SetFunction<Params> = flow(locationManager.extend, push());

  const has: HasFunction = flow(locationManager.has, push());

  function pages(options: Options): Pages;
  function pages(options: RequiredOptions): BasicPages;
  function pages({ limit, offset, total }: any): BasicPages | Pages {
    const limitNo = Number(limit);
    const offsetNo = Number(offset);
    const totalNo = Number(total);

    if ([limitNo, offsetNo].some((value) => isNaN(value))) {
      throw Error("Some value is not a number");
    }

    if (total === undefined) {
      return {
        current: Math.floor(offsetNo / limitNo) + 1,
        change(page: number, key = "offset"): void {
          change(key, String((page - 1) * limitNo));
        },
      };
    }

    if (isNaN(totalNo)) {
      throw Error("total is NaN");
    }

    return {
      current: Math.floor(offsetNo / limitNo) + 1,
      total: Math.ceil(totalNo / limitNo),
      change(page: number, key = "offset"): void {
        change(key, String((page - 1) * limitNo));
      },
    };
  }

  const resetPagination = (filter: string) => {
    const params: any = locationManager.params;

    if (params && params[filter]) {
      set({ ...params, limit: 10, offset: 0 });
      return;
    }

    set({ limit: 10, offset: 0 } as Params);
  };

  const correctedUrl = () => {
    if (!has("limit") || !has("offset")) {
      return buildUrl(locationManager.url, {
        limit: 10,
        offset: 0,
        ...locationManager.params,
      });
    }

    return locationManager.url;
  };

  return {
    add,
    change,
    remove,
    toggle,
    pick,
    set,
    params: locationManager.params,
    url: locationManager.url,
    has: locationManager.has as HasFunction,
    without: locationManager.without as WithoutFunction,
    get: locationManager.get as GetFunction,
    pages,
    resetPagination,
    buildUrl: locationManager.buildUrl,
    extend,
    correctedUrl,
  };
};
