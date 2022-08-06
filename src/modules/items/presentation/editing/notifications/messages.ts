import { defineMessages } from "react-intl";

export const editItemMessages = defineMessages({
  title: { id: "editItemMessages.title", defaultMessage: "Edytuj przedmiot" },
  success: {
    id: "editItemMessages.success",
    defaultMessage: "Pomyślnie edytowano przedmiot",
  },
  error: {
    id: "editItemMessages.error",
    defaultMessage: "Wystąpił błąd podczas edytowania przedmiotu",
  },
});

export const createItemMessages = defineMessages({
  title: { id: "createItemMessages.title", defaultMessage: "Dodaj przedmiot" },
  success: {
    id: "createItemMessages.success",
    defaultMessage: "Pomyślnie dodano przedmiot",
  },
  error: {
    id: "createItemMessages.error",
    defaultMessage: "Wystąpił błąd podczas dodawania przedmiotu",
  },
  missingData: {
    id: "createItemMessages.missingData",
    defaultMessage: "Wysyłanie przerwane! Uzupełnij brakujące dane",
  },
});

export const deleteItemMessages = defineMessages({
  title: { id: "deleteItemMessages.title", defaultMessage: "Usuń przedmiot" },
  success: {
    id: "deleteItemMessages.success",
    defaultMessage: "Pomyślnie usunięto przedmiot z bazy",
  },
  error: {
    id: "deleteItemMessages.error",
    defaultMessage: "Wystąpił błąd podczas usuwania przedmiotu z bazy",
  },
});
