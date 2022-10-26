import { useColorModeValue, chakra } from "@chakra-ui/react";
import { RenderLeafProps } from "slate-react";

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const bgColor = useColorModeValue("gray.100", "gray.600");

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = (
      <chakra.code
        padding="3px"
        backgroundColor={bgColor}
        fontSize="90%"
        borderRadius="6px"
      >
        {children}
      </chakra.code>
    );
  }

  if (leaf.italic) {
    children = <em>{children}</em>;
  }

  if (leaf.underline) {
    children = <u>{children}</u>;
  }

  return <span {...attributes}>{children}</span>;
};
