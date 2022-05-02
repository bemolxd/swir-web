import { defineMessages } from "react-intl";

import { OrderStatus } from "modules/userOrders/application";

export const messages = defineMessages({
  [OrderStatus.COMPLETING]: {
    id: "UserOrder.orderStatus.completing",
    defaultMessage: "Kompletowanie",
  },
  [OrderStatus.PENDING]: {
    id: "UserOrder.orderStatus.pending",
    defaultMessage: "Oczekuje na rozpatrzenie",
  },
  [OrderStatus.AWARDED]: {
    id: "UserOrder.orderStatus.awarded",
    defaultMessage: "Rozpatrzone",
  },
  [OrderStatus.PUBLISHED]: {
    id: "UserOrder.orderStatus.published",
    defaultMessage: "Aktywne",
  },
  [OrderStatus.FINISHED]: {
    id: "UserOrder.orderStatus.finished",
    defaultMessage: "Zakończone",
  },
});
