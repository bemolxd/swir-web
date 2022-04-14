import { Checkbox, CheckboxGroup, Text, VStack } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useQueryParams } from "components/QueryParamsV2";

interface IProps {
  filterName: string;
  title: string;
  options: string[];
  messages: any;
}

export const CheckboxFilterGroup = ({
  filterName,
  title,
  options,
  messages,
}: IProps) => {
  const { toggle, has } = useQueryParams();
  const { formatMessage } = useIntl();

  return (
    <VStack spacing={1} align="flex-start">
      <Text>{title}</Text>
      <CheckboxGroup>
        {options.map((option) => {
          return (
            <Checkbox
              key={option}
              isChecked={has(filterName, option)}
              onChange={() => toggle(filterName, option)}
            >
              {formatMessage(messages[option])}
            </Checkbox>
          );
        })}
      </CheckboxGroup>
    </VStack>
  );
};
