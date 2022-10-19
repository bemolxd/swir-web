import { Editor, Element as SlateElement, Transforms, Node } from "slate";
import { HistoryEditor } from "slate-history";
import { ReactEditor } from "slate-react";

export type EditorProps = Editor | ReactEditor | HistoryEditor;

export const LIST_TYPES = ["numbered-list", "bulleted-list"];

export const DEFAULT_VALUES: Node[] = [
  {
    type: "paragraph",
    children: [{ text: "" }],
  },
];

export const HOTKEYS: { [hotkey: string]: string } = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code",
};

export const isBlockActive = (editor: EditorProps, format: string) => {
  const nodeGen = Editor.nodes(editor, {
    match: (n) =>
      !Editor.isEditor(n) && SlateElement.isElement(n) && n.type === format,
  });

  let node = nodeGen.next();
  while (!node.done) {
    return true;
  }
  return false;
};

export const isMarkActive = (editor: EditorProps, format: string) => {
  const marks = Editor.marks(editor);
  return marks ? marks[format] === true : false;
};

export const toggleBlock = (editor: EditorProps, format: string) => {
  const isActive = isBlockActive(editor, format);
  const isList = LIST_TYPES.includes(format);

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      LIST_TYPES.includes(
        (!Editor.isEditor(n) && SlateElement.isElement(n) && n.type) as string
      ),
    split: true,
  });

  const newProperties: Partial<SlateElement> = {
    type: isActive ? "paragraph" : isList ? "list-item" : format,
  };

  Transforms.setNodes(editor, newProperties);

  if (!isActive && isList) {
    const block = { type: format, children: [] };
    Transforms.wrapNodes(editor, block);
  }
};

export const toggleMark = (editor: EditorProps, format: string) => {
  const isActive = isMarkActive(editor, format);
  if (isActive) {
    Editor.removeMark(editor, format);
    return;
  }

  Editor.addMark(editor, format, true);
};
