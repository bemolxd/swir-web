import { useColorModeValue, chakra } from "@chakra-ui/react";
import { RenderLeafProps } from "slate-react";

export const Leaf = ({ attributes, children, leaf }: RenderLeafProps) => {
  const bgColor = useColorModeValue("gray.200", "gray.700");

  if (leaf.bold) {
    children = <strong>{children}</strong>;
  }

  if (leaf.code) {
    children = (
      <chakra.code
        padding="3px"
        backgroundColor={bgColor}
        fontSize="90%"
        borderRadius={4}
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
