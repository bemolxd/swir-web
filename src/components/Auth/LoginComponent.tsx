export const LoginComponent = () => {
  const cuiLink = process.env.REACT_APP_API_URL + "auth/cui";

  window.location.replace(cuiLink);

  return <></>;
};
