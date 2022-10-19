import { Heading, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { Item } from "modules/items/application";

import { BasicPropertyInfo } from "./BasicPropertyInfo";
import { itemCategoryMessages, itemTypeMessages } from "../../messages";
import { AvailabilityTag } from "../../itemAvailability";
import { BasicAvailabilityInfo } from "./BasicAvailabilityInfo";

interface IProps {
  details: Item;
}
export const BasicInfoContent = ({ details }: IProps) => {
  const { formatMessage } = useIntl();
  const { vendor, type, category, subcategory, quantity, itemId } = details;

  return (
    <VStack maxW="400px" w="100%" align="flex-start">
      <Heading size="md" fontWeight="400">
        {formatMessage({
          id: "ItemDetails.content.BasicInfoSection.header",
          defaultMessage: "Podstawowe informacje:",
        })}
      </Heading>
      <BasicPropertyInfo
        property={formatMessage({
          id: "ItemDetails.content.BasicInfoSection.vendor",
          defaultMessage: "producent",
        })}
        value={vendor}
      />
      <BasicPropertyInfo
        property={formatMessage({
          id: "ItemDetails.content.BasicInfoSection.type",
          defaultMessage: "rodzaj",
        })}
        value={formatMessage(itemTypeMessages[type])}
      />
      <BasicPropertyInfo
        property={formatMessage({
          id: "ItemDetails.content.BasicInfoSection.category",
          defaultMessage: "kategoria",
        })}
        value={formatMessage(itemCategoryMessages[category])}
      />
      {subcategory && (
        <BasicPropertyInfo
          property={formatMessage({
            id: "ItemDetails.content.BasicInfoSection.subcategory",
            defaultMessage: "podkategoria",
          })}
          value={subcategory}
        />
      )}
      <BasicPropertyInfo
        property={formatMessage({
          id: "ItemDetails.content.BasicInfoSection.departmentQuantity",
          defaultMessage: "na stanie katedry",
        })}
        value={quantity}
      />
      <BasicAvailabilityInfo itemId={itemId} />
      <AvailabilityTag itemId={itemId} isDetailsPage />
    </VStack>
  );
};
