import { Center, Divider, Spinner, VStack } from "@chakra-ui/react";
import { defineMessages, useIntl } from "react-intl";

import { RadioFilterGroup } from "components/Filters";
import { withSuspense } from "components/RemoteData";

import { useAdminsQuery } from "modules/users/infrastructure";

export const TechFilter = withSuspense(
  () => {
    const admins = useAdminsQuery();
    const { formatMessage } = useIntl();

    let formattedMessages: any = {};
    const options = admins?.collection.map((admin) => admin.userId);
    admins?.collection.forEach(
      (admin) =>
        (formattedMessages[admin.userId] = {
          id: "adminId",
          defaultMessage: `${admin.firstName} ${admin.lastName}`,
        })
    );
    const messages = defineMessages(formattedMessages);

    return (
      <VStack align="flex-start" w="100%" mb={2}>
        <RadioFilterGroup
          filterName="techId"
          title={formatMessage({
            id: "AdminOrdersFilters.Tech.title",
            defaultMessage: "Przypisane do:",
          })}
          options={options!}
          messages={messages}
        />
        <Divider />
      </VStack>
    );
  },
  {
    fallback: (
      <Center w="100%">
        <Spinner />
      </Center>
    ),
  }
);
