import { IconButton } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useSlate } from "slate-react";

import {
  toggleMark,
  isBlockActive,
  isMarkActive,
  toggleBlock,
} from "./actions";

export interface EditorButtonProps {
  format: string;
  icon: ReactElement;
}

export const MarkButton = ({ format, icon }: EditorButtonProps) => {
  const editor = useSlate();

  return (
    <IconButton
      variant="outline"
      colorScheme="blue"
      isActive={isMarkActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleMark(editor, format);
      }}
      aria-label={format}
      icon={icon}
      borderWidth={0}
      fontSize="20px"
    />
  );
};

export const BlockButton = ({ format, icon }: EditorButtonProps) => {
  const editor = useSlate();

  return (
    <IconButton
      variant="outline"
      colorScheme="blue"
      isActive={isBlockActive(editor, format)}
      onMouseDown={(event) => {
        event.preventDefault();
        toggleBlock(editor, format);
      }}
      aria-label={format}
      icon={icon}
      borderWidth={0}
      fontSize="20px"
    />
  );
};
