import { ContextType } from "types";

export const useGetActiveTab = (path: string, ctx: ContextType) => {
  if (ctx === ContextType.USER) {
    if (path.includes("sprzet")) {
      return 0;
    }

    if (path.includes("zgloszenia")) {
      return 1;
    }

    if (path.includes("archiwum")) {
      return 2;
    }
  }

  if (ctx === ContextType.GLOBAL) {
    if (path.includes("sprzet")) {
      return 0;
    }

    if (path.includes("zgloszenia")) {
      return 1;
    }

    if (path.includes("archiwum")) {
      return 2;
    }

    if (path.includes("uzytkownicy")) {
      return 3;
    }
  }

  return -1;
};
