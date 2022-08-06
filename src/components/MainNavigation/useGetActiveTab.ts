import { useGetContextType } from "components/Auth";

export const useGetActiveTab = (path: string) => {
  const { isUser, isGlobal, isTech } = useGetContextType();

  if (isUser) {
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

  if (isGlobal || isTech) {
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
