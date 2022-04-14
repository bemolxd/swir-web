export const logout = () => {
  const cuiLink = process.env.REACT_APP_API_URL + "auth/logout";

  window.location.replace(cuiLink);
};
