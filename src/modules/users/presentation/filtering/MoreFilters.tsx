import { useIntl, defineMessages } from "react-intl";
import { VStack, Divider } from "@chakra-ui/react";
import { ContextType } from "types";

import { useQueryParams, filtersAreApplied } from "components/QueryParamsV2";
import {
  CheckboxFilterGroup,
  FiltersModal,
  MoreFiltersButton,
} from "components/Filters";

import { useUserFilterModalHandler } from "modules/users/application";

export const MoreFilters = () => {
  const [isOpen, onOpen, onClose] = useUserFilterModalHandler((handler) => [
    handler.isOpen,
    handler.onOpen,
    handler.onClose,
  ]);
  const { params } = useQueryParams();
  const { formatMessage } = useIntl();

  return (
    <>
      <MoreFiltersButton
        onClick={onOpen}
        areFiltersApplied={filtersAreApplied(params)}
        tooltip={formatMessage({
          id: "Users.filtersBtn",
          defaultMessage: "Filtry",
        })}
      />
      <FiltersModal
        isOpen={isOpen}
        onClose={onClose}
        header={formatMessage({
          id: "Users.filtersModal",
          defaultMessage: "Filtruj użytkowników",
        })}
      >
        <VStack align="flex-start" w="100%" mb={2}>
          <CheckboxFilterGroup
            filterName="contextType"
            title={formatMessage({
              id: "UsersFilters.title",
              defaultMessage: "Rola systemowa:",
            })}
            options={options}
            messages={messages}
          />
          <Divider />
        </VStack>
      </FiltersModal>
    </>
  );
};

const options = Object.values(ContextType);

const messages = defineMessages({
  [ContextType.USER]: {
    id: "UsersFilters.contextType.USER",
    defaultMessage: "Użytkownik",
  },
  [ContextType.TECH]: {
    id: "UsersFilters.contextType.TECH",
    defaultMessage: "Administrator Techniczny",
  },
  [ContextType.GLOBAL]: {
    id: "UsersFilters.contextType.GLOBAL",
    defaultMessage: "Administrator Globalny",
  },
});
