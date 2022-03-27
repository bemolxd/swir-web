import { Heading, HStack, Image, VStack, Divider } from "@chakra-ui/react";

import { Item } from "modules/items/application";
import { useIntl } from "react-intl";

import { BasicPropertyInfo } from "./BasicPropertyInfo";

interface IProps {
  details: Item;
}

export const BasicInfoSection = ({ details }: IProps) => {
  const { formatMessage } = useIntl();
  const { vendor, type, category, subcategory, quantity, imageUrl } = details;

  return (
    <>
      <HStack align="flex-start" justify="space-between" w="100%">
        <Image src={imageUrl} w="400px" borderRadius={8} my={1} />
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
            value={type}
          />
          <BasicPropertyInfo
            property={formatMessage({
              id: "ItemDetails.content.BasicInfoSection.category",
              defaultMessage: "kategoria",
            })}
            value={category}
          />
          <BasicPropertyInfo
            property={formatMessage({
              id: "ItemDetails.content.BasicInfoSection.subcategory",
              defaultMessage: "podkategoria",
            })}
            value={subcategory ?? "---"}
          />
          <BasicPropertyInfo
            property={formatMessage({
              id: "ItemDetails.content.BasicInfoSection.quantity",
              defaultMessage: "ilość",
            })}
            value={quantity}
          />
        </VStack>
      </HStack>
      <Divider />
    </>
  );
};
