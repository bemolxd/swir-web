import { VStack } from "@chakra-ui/react";

import { withSuspense } from "components/RemoteData";

import { useItemDetailsQuery } from "modules/items/infrastructure";
import {
  AddItemSection,
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
    <VStack align="flex-start" w="100%" h="100%">
      <DetailsHeader itemName={itemDetails?.name!} itemId={itemId} />
      <BasicInfoSection details={itemDetails!} />
      <DescriptionSection description={itemDetails?.description!} />
      <ParametersSection parameters={itemDetails?.parameters!} />
      <AvailabilitySection itemId={itemId} />
      <AddItemSection itemId={itemId} />
    </VStack>
  );
});
