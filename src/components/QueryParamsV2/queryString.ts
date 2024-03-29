import {
  parse as qsParse,
  stringify as qsStringify,
  ParseOptions,
  StringifyOptions,
} from "query-string";
import { memoize } from "lodash";

export type { ParseOptions };
export type { StringifyOptions };

type ParseFunction = <Params extends {}>(
  params: string,
  options?: ParseOptions
) => Params;

export const parse = memoize<ParseFunction>(
  (params: string, options?: ParseOptions) => {
    return qsParse(decodeURI(params), {
      arrayFormat: "separator",
      arrayFormatSeparator: ",",
      parseBooleans: true,
      parseNumbers: true,
      decode: true,
      ...options,
    }) as any;
  }
);

export const stringify =
  (pathname: string, options?: StringifyOptions) =>
  (params: object | undefined): string => {
    if (params === undefined || Object.keys(params).length === 0) {
      return pathname;
    }

    const search = qsStringify(params as any, {
      arrayFormat: "separator",
      arrayFormatSeparator: ",",
      skipNull: true,
      ...options,
    });

    return `${pathname}?${search}`;
  };
