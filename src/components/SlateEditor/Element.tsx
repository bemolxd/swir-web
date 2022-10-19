import { ListItem, OrderedList, UnorderedList } from "@chakra-ui/react";
import { RenderElementProps } from "slate-react";

export const Element = ({
  attributes,
  children,
  element,
}: RenderElementProps) => {
  switch (element.type) {
    case "list-item":
      return <ListItem {...attributes}>{children}</ListItem>;
    case "numbered-list":
      return <OrderedList {...attributes}>{children}</OrderedList>;
    case "bulleted-list":
      return <UnorderedList {...attributes}>{children}</UnorderedList>;
    default:
      return <p {...attributes}>{children}</p>;
  }
};
