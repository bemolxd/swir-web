import { useEffect, useState } from "react";
import {
  Input,
  InputGroup,
  InputProps,
  chakra,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { useIsFetching } from "react-query";
import { MdSearch } from "react-icons/md";

import { useFilterInput } from "./useFilterInput";

interface IProps extends InputProps {
  filterName: string;
  delay?: number;
}

export const SearchFilter = ({ filterName, delay, ...inputProps }: IProps) => {
  const { value, onChange } = useFilterInput(filterName, delay);
  const fetchNo = useIsFetching();
  const [showSpinner, setShowSpinner] = useState(false);
  const isFetching = !!fetchNo;

  useEffect(() => {
    setShowSpinner((val) => (val ? isFetching : false));
  }, [isFetching]);

  return (
    <chakra.div w="100%" maxW={inputProps.maxW}>
      <InputGroup w="100%">
        <Input
          {...inputProps}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setShowSpinner(true);
          }}
        />
        <InputRightElement pointerEvents="none">
          {showSpinner ? <Spinner size="sm" /> : <MdSearch />}
        </InputRightElement>
      </InputGroup>
    </chakra.div>
  );
};
