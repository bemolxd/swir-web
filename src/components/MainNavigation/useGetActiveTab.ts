export const useGetActiveTab = (path: string) => {
  if (path.includes("sprzet")) {
    return 0;
  }

  if (path.includes("rezerwacje")) {
    return 1;
  }

  return -1;
};
