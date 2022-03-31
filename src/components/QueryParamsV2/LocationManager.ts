import {
  parse,
  ParseOptions,
  stringify,
  StringifyOptions,
} from "./queryString";
import * as utils from "./utils";
import { SimpleType, Value } from "./utils";

export type Location<State = any> = {
  pathname: string;
  search: string;
  state: State;
  hash: string;
  key?: string;
};

export type LocationManagerOptions = {
  parseOptions?: ParseOptions;
  stringifyOptions?: StringifyOptions;
};

type AddFunction = (key: string, value: SimpleType) => string;
type RemoveFunction = (key: string, value?: SimpleType) => string;
type ParamsFunction = (key: string, value: SimpleType) => string;
type SetFunction<Params> = (params?: Params) => string;
type PickFunction = (keys: string | string[]) => string;
type WithoutFunction = (keys: string | string[]) => string;
type ChangeFunction = (key: string, value: Value) => string;
type GetFunction = (key: string, defaultValue?: any) => any;
type HasFunction = (key: string, value?: SimpleType) => boolean;

export type LocationManager = ReturnType<typeof LocationManager>;

export const LocationManager = <Params extends object>(
  location: Location,
  options?: LocationManagerOptions
) => {
  const { pathname, search } = location;
  const params = parse<Params>(search, options?.parseOptions);
  const stringifyParams = stringify(pathname, options?.stringifyOptions);
  const url = stringifyParams(params);

  const add: AddFunction = (key, value) =>
    stringifyParams(utils.add(key, value)(params));

  const remove: RemoveFunction = (key, value) =>
    stringifyParams(utils.remove(key, value)(params));

  const toggle: ParamsFunction = (key, value) =>
    stringifyParams(utils.toggle(key, value)(params));

  const extend: SetFunction<Params> = (newParams) =>
    stringifyParams({ ...params, ...newParams });

  const set: SetFunction<Params> = (params) => stringifyParams(params);

  const pick: PickFunction = (keys) =>
    stringifyParams(utils.pick(keys)(params));

  const without: WithoutFunction = (keys) =>
    stringifyParams(utils.without(keys)(params));

  const change: ChangeFunction = (key, value) =>
    extend({ ...params, [key]: value });

  const get: GetFunction = utils.get(params);

  const has: HasFunction = utils.has(params);

  const buildUrl = (host?: string, options?: StringifyOptions) => {
    if (host === undefined) return url;

    const parsedHost =
      host.charAt(host.length - 1) === "/"
        ? `${host.substring(0, host.length - 1)}`
        : host;

    const parsedSearch = stringify("", {
      arrayFormatSeparator: ",",
      ...options,
    });

    return `${parsedHost}${parsedSearch}`;
  };

  return {
    params,
    url,
    add,
    change,
    remove,
    toggle,
    set,
    pick,
    without,
    has,
    get,
    buildUrl,
    extend,
  };
};
