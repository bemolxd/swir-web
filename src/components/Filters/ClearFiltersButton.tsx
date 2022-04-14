import { useIntl } from "react-intl";
import { Button, ButtonProps } from "@chakra-ui/react";

import { useQueryParams } from "components/QueryParamsV2";

interface IProps extends ButtonProps {
  defaultParams?: any;
}

export const ClearFiltersButton = ({ defaultParams, ...props }: IProps) => {
  const { set } = useQueryParams();
  const { formatMessage } = useIntl();

  return (
    <Button
      {...props}
      onClick={() => set(defaultParams ?? { limit: 10, offset: 0 })}
    >
      {formatMessage({
        id: "Filters.clearFiltersButton",
        defaultMessage: "Wyczyść filtry",
      })}
    </Button>
  );
};
