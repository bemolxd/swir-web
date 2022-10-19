import { HStack } from "@chakra-ui/react";
import {
  MdFormatBold,
  MdFormatItalic,
  MdFormatUnderlined,
  MdCode,
  MdFormatListNumbered,
  MdFormatListBulleted,
} from "react-icons/md";

import { MarkButton, BlockButton } from "./Buttons";

export const Toolbar = () => {
  return (
    <HStack borderWidth="0 0 1px 0" padding={1} spacing={"5px"} wrap={"wrap"}>
      <MarkButton format="bold" icon={<MdFormatBold />} />
      <MarkButton format="italic" icon={<MdFormatItalic />} />
      <MarkButton format="underline" icon={<MdFormatUnderlined />} />
      <MarkButton format="code" icon={<MdCode />} />
      <BlockButton format="numbered-list" icon={<MdFormatListNumbered />} />
      <BlockButton format="bulleted-list" icon={<MdFormatListBulleted />} />
    </HStack>
  );
};
