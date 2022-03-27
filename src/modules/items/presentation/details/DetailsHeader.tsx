import { Heading, Divider } from "@chakra-ui/react";

interface IProps {
  itemName: string;
}

export const DetailsHeader = ({ itemName }: IProps) => {
  return (
    <>
      <Heading size="lg" fontWeight="600">
        {itemName}
      </Heading>
      <Divider />
    </>
  );
};
