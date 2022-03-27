import { useState } from "react";
import { HStack, Input } from "@chakra-ui/react";
import { useIntl } from "react-intl";
import { MdSearch } from "react-icons/md";

import { IconButton } from "components/IconButton";

export const Searchbox = () => {
  const { formatMessage } = useIntl();
  const [query, setQuery] = useState<string>("");

  return (
    <HStack maxW="250px" w="100%" spacing={1}>
      <Input
        placeholder={formatMessage({
          id: "Items.filtering.searchboxPlaceholder",
          defaultMessage: "Szukaj",
        })}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <IconButton icon={<MdSearch />} variant="ghost" />
    </HStack>
  );
};
