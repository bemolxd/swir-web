export const useGetActiveTab = (path: string) => {
  if (path.includes("sprzet")) {
    return 0;
  }

  if (path.includes("zgloszenia")) {
    return 1;
  }

  if (path.includes("rezerwacje")) {
    return 2;
  }

  return -1;
};
