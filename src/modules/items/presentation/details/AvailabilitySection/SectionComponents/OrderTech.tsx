import { Badge, Skeleton, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { withSuspense } from "components/RemoteData";

import { PersonInfoContainer } from "modules/userOrders/presentation";
import { useUserDetailsQuery } from "modules/users/infrastructure";

interface IProps {
  techId: string;
}

export const OrderTech = ({ techId }: IProps) => {
  const { formatMessage } = useIntl();

  return (
    <VStack w="100%" px={4} align="flex-start">
      <Badge>
        {formatMessage({
          id: "ItemAvailability.OrderTech.label",
          defaultMessage: "Opiekun zgłoszenia",
        })}
      </Badge>
      <Person techId={techId} />
    </VStack>
  );
};

const Person = withSuspense(
  ({ techId }: IProps) => {
    const tech = useUserDetailsQuery(techId);
    return (
      <PersonInfoContainer
        name={`${tech?.firstName} ${tech?.lastName}`}
        email={tech?.email!}
      />
    );
  },
  {
    fallback: <Skeleton height="24px" w="100%" />,
  }
);
