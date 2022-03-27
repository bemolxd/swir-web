import { VStack } from "@chakra-ui/react";

import { withSuspense } from "components/RemoteData";

import { useItemDetailsQuery } from "modules/items/infrastructure";
import {
  AvailabilitySection,
  BasicInfoSection,
  DescriptionSection,
  DetailsHeader,
  ParametersSection,
} from "modules/items/presentation";

interface IProps {
  itemId: string;
}

export const Content = withSuspense(({ itemId }: IProps) => {
  const itemDetails = useItemDetailsQuery(itemId);

  return (
    <VStack align="flex-start" w="100%">
      <DetailsHeader itemName={itemDetails?.name!} />
      <BasicInfoSection details={itemDetails!} />
      <DescriptionSection description={itemDetails?.description!} />
      <ParametersSection parameters={itemDetails?.parameters!} />
      <AvailabilitySection />
    </VStack>
  );
});
