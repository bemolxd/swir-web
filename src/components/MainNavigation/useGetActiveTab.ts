export const useGetActiveTab = (path: string) => {
  if (path.includes("baza-sprzetu")) {
    return 0;
  }

  if (path.includes("rezerwacje")) {
    return 1;
  }
};
