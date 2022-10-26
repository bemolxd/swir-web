import { useIntl } from "react-intl";
import { Tag } from "@chakra-ui/react";

import { withSuspense } from "components/RemoteData";
import { useCheckMobile } from "components/Layout";

import { useItemAvailabilityQuery } from "modules/items/infrastructure";

import { AvailabilityTagSuspense } from "./AvailabilityTagSuspense";
import { availabilityMessages } from "./messages";

interface IProps {
  itemId: string;
  isDetailsPage?: boolean;
}

export const AvailabilityTag = withSuspense(
  ({ itemId, isDetailsPage = false }: IProps) => {
    const availability = useItemAvailabilityQuery(itemId);
    const { formatMessage } = useIntl();
    const isMobile = useCheckMobile();

    const tagMessage =
      availability && availability.isNowAvailable
        ? formatMessage(availabilityMessages.available)
        : formatMessage(availabilityMessages.unavailable);

    const tagColorScheme =
      availability && availability.isNowAvailable ? "teal" : "red";

    const handleClick = () => {
      const element = document.getElementById("availability");
      element?.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "center" : "start",
      });
    };

    return (
      <Tag
        size="md"
        colorScheme={tagColorScheme}
        _hover={isDetailsPage ? { cursor: "pointer" } : undefined}
        onClick={isDetailsPage ? handleClick : undefined}
      >
        {tagMessage}
      </Tag>
    );
  },
  { fallback: <AvailabilityTagSuspense /> }
);
