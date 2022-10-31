import { Flex, Input } from "@chakra-ui/react";
import { useState } from "react";

import { useDebounce } from "utils";

interface IProps {
  onChange(page: number): void;
}

export const PaginationInput = ({ onChange }: IProps) => {
  const [page, setPage] = useState<number | undefined>();

  useDebounce(
    () => {
      if (page !== undefined) onChange(page);
    },
    300,
    [page]
  );

  return (
    <Flex w="46px" h="38px">
      <Input
        size="38px"
        borderRadius={8}
        textAlign="center"
        placeholder="..."
        fontWeight="500"
        onChange={(e) => {
          if (!e.target.value) {
            return setPage(1);
          }
          const newPage = Number(e.target.value);

          if (isNaN(newPage) || newPage < 1) {
            return;
          }
          setPage(newPage);
        }}
        type="number"
      />
    </Flex>
  );
};
