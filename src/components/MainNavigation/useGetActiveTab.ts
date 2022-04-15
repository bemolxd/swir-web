import { ContextType } from "types";

export const useGetActiveTab = (path: string, ctx: ContextType) => {
  if (ctx === ContextType.USER) {
    if (path.includes("sprzet")) {
      return 0;
    }

    if (path.includes("zgloszenia")) {
      return 1;
    }

    if (path.includes("rezerwacje")) {
      return 2;
    }
  }

  if (ctx === ContextType.GLOBAL) {
    if (path.includes("uzytkownicy")) {
      return 0;
    }
  }

  return -1;
};
