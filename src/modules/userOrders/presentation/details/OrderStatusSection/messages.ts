import { defineMessages } from "react-intl";

export const initMessages = defineMessages({
  completing: {
    id: "OrderStatus.initMessage.completing",
    defaultMessage: "Zgłoszenie w fazie kompletowania",
  },
  pending: {
    id: "OrderStatus.initMessage.pending",
    defaultMessage: "Zgłoszenie oczekuje na obsługę",
  },
  awarded: {
    id: "OrderStatus.initMessage.awarded",
    defaultMessage: "Zgłoszenie oczekuje na opinię Katedry",
  },
  published: {
    id: "OrderStatus.initMessage.published",
    defaultMessage: "Zgłoszenie nieaktywne",
  },
  finished: {
    id: "OrderStatus.initMessage.finished",
    defaultMessage: "Zgłoszenie oczekuje na podsumowanie",
  },
});

export const activeMessages = defineMessages({
  completing: {
    id: "OrderStatus.activeMessage.completing",
    defaultMessage: "Zgłoszenie w fazie kompletowania",
  },
  pending: {
    id: "OrderStatus.activeMessage.pending",
    defaultMessage: "Zgłoszenie oczekuje na obsługę",
  },
  awarded: {
    id: "OrderStatus.activeMessage.awarded",
    defaultMessage: "Zgłoszenie otrzymało opinię Katedry",
  },
  published: {
    id: "OrderStatus.activeMessage.published",
    defaultMessage: "Zgłoszenie aktywne",
  },
  finished: {
    id: "OrderStatus.activeMessage.finished",
    defaultMessage: "Zgłoszenie oczekuje na podsumowanie",
  },
});

export const doneMessages = defineMessages({
  completing: {
    id: "OrderStatus.doneMessage.completing",
    defaultMessage: "Zgłoszenie zostało skompletowane",
  },
  pending: {
    id: "OrderStatus.doneMessage.pending",
    defaultMessage: "Zgłoszenie zostało obsłużone",
  },
  awarded: {
    id: "OrderStatus.doneMessage.awarded",
    defaultMessage: "Zgłoszenie otrzymało opinię Katedry",
  },
  published: {
    id: "OrderStatus.doneMessage.published",
    defaultMessage: "Zgłoszenie nieaktywne",
  },
  finished: {
    id: "OrderStatus.doneMessage.finished",
    defaultMessage: "Zgłoszenie podsumowane i rozliczone",
  },
});
