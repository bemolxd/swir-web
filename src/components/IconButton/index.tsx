import {
  IconButton as ChakraIconButton,
  IconButtonProps,
  Tooltip,
} from "@chakra-ui/react";

interface IProps extends Omit<IconButtonProps, "aria-label"> {
  tooltip?: string;
}

export const IconButton = ({ tooltip, ...props }: IProps) => {
  if (!tooltip) {
    return <ChakraIconButton aria-label="icon-button" {...props} />;
  }

  return (
    <Tooltip label={tooltip}>
      <ChakraIconButton aria-label="icon-button" {...props} />
    </Tooltip>
  );
};
