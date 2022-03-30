import { Button, ButtonGroup, HStack } from "@chakra-ui/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

import { Meta } from "types";

import { IconButton } from "components/IconButton";

interface IProps {
  meta: Meta;
}

export const Pagination = ({ meta }: IProps) => {
  return (
    <HStack my={4} align="center" justify="flex-end" w="100%">
      <ButtonGroup>
        <IconButton icon={<MdArrowBack />} />
        <Button>1</Button>
        <IconButton icon={<MdArrowForward />} />
      </ButtonGroup>
    </HStack>
  );
};
