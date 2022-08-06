import { defineMessages } from "react-intl";

export const logout = () => {
  const cuiLink = process.env.REACT_APP_API_URL + "auth/logout";

  window.location.replace(cuiLink);
};

export const logoutMessages = defineMessages({
  logout: {
    id: "Auth.logoutIconBtn",
    defaultMessage: "Wyloguj",
  },
});
