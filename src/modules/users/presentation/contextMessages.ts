import { defineMessages } from "react-intl";
import { ContextType } from "types";

export const contextMessages = defineMessages({
  [ContextType.GLOBAL]: {
    id: "ContextType.GLOBAL",
    defaultMessage: "Administrator Globalny",
  },
  [ContextType.TECH]: {
    id: "ContextType.TECH",
    defaultMessage: "Administrator Techniczny",
  },
  [ContextType.USER]: {
    id: "ContextType.USER",
    defaultMessage: "Użytkownik",
  },
});
