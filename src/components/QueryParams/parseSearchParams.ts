export const parseSearchParams = (object: any) => {
  Object.keys(object).forEach((key) => {
    if (!isNaN(object[key])) object[key] = parseInt(object[key]);
  });

  return object;
};
