import { useRadioGroup, Radio, VStack, Text } from "@chakra-ui/react";
import { useIntl } from "react-intl";

import { useQueryParams } from "components/QueryParamsV2";

interface IProps {
  filterName: string;
  title: string;
  options: string[];
  messages: any;
}

export const RadioFilterGroup = ({
  filterName,
  title,
  options,
  messages,
}: IProps) => {
  const { change, has, remove, get } = useQueryParams();
  const { formatMessage } = useIntl();

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: filterName,
    defaultValue: "all",
    onChange: (val) =>
      val === "all" ? remove(filterName) : change(filterName, val),
  });

  const groupProps = getRootProps();
  const defaultRadioProps = getRadioProps({ value: "all" });

  return (
    <VStack spacing={2} align="flex-start">
      <Text>{title}</Text>
      <VStack justify="flex-start" align="flex-start" {...groupProps}>
        <Radio {...defaultRadioProps} checked={!get(filterName)}>
          {formatMessage({ id: "defaultOption", defaultMessage: "Brak" })}
        </Radio>
        {options.map((option) => {
          const props = getRadioProps({ value: option });

          return (
            <Radio key={option} {...props} checked={has(filterName, option)}>
              {formatMessage(messages[option])}
            </Radio>
          );
        })}
      </VStack>
    </VStack>
  );
};
