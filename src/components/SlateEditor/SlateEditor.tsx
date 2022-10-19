import { Box } from "@chakra-ui/react";
import isHotkey from "is-hotkey";
import {
  useMemo,
  useRef,
  useState,
  KeyboardEvent,
  useCallback,
  MouseEvent,
  CSSProperties,
  forwardRef,
} from "react";
import { createEditor, Editor, Node, Transforms } from "slate";
import { withHistory } from "slate-history";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";

import { HOTKEYS, toggleMark } from "./actions";
import { Element } from "./Element";
import { Leaf } from "./Leaf";
import { Toolbar } from "./Toolbar";

export interface SlateEditorProps {
  initialValue: Node[];
  onValueChange?(value: Node[]): void;
  onSlateBlur?(value: Node[]): void;
  placeholder?: string;
  minHeight?: CSSProperties["minHeight"];
  isInvalid?: boolean;
}

export const SlateEditor = forwardRef(
  (
    {
      initialValue,
      onValueChange = () => {},
      onSlateBlur = () => {},
      placeholder = "Placeholder",
      minHeight = "120px",
      isInvalid = false,
    }: SlateEditorProps,
    ref
  ) => {
    // const boxRef = useRef<HTMLDivElement>(null);
    const editor = useMemo(() => withHistory(withReact(createEditor())), []);

    const [, setFocused] = useState(false);
    const savedSelection = useRef(editor.selection);

    const renderElement = useCallback((props) => <Element {...props} />, []);
    const renderLeaf = useCallback((props) => <Leaf {...props} />, []);

    const [slateValue, setSlateValue] = useState<Node[]>(initialValue);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      for (const hotkey in HOTKEYS) {
        if (isHotkey(hotkey, event)) {
          event.preventDefault();
          var mark = HOTKEYS[hotkey];
          toggleMark(editor, mark);
        }
      }
    };

    const handleFocus = useCallback(() => {
      setFocused(true);
      if (!editor.selection && slateValue?.length) {
        Transforms.select(
          editor,
          savedSelection.current ?? Editor.end(editor, [])
        );
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor]);

    const handleBlur = useCallback(() => {
      setFocused(false);
      savedSelection.current = editor.selection;
      onSlateBlur(slateValue);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [editor]);

    const handleFocusEditor = useCallback(
      (e: MouseEvent) => {
        if (e.target === (ref as any).current) {
          ReactEditor.focus(editor);
          e.preventDefault();
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [editor]
    );

    const handleChange = (value: Node[]) => {
      setSlateValue(value);
      onValueChange(value);
    };

    return (
      <Box
        ref={ref as any}
        onMouseDown={handleFocusEditor}
        borderWidth={isInvalid ? "2px" : "1px"}
        width="100%"
        height="100%"
        borderRadius={6}
        borderColor={isInvalid ? "red.400" : undefined}
      >
        <Slate editor={editor} value={slateValue} onChange={handleChange}>
          <Toolbar />
          <Box p={2}>
            <Editable
              onFocus={handleFocus}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              style={{ minHeight, resize: "vertical", overflow: "auto" }}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              placeholder={placeholder}
            />
          </Box>
        </Slate>
      </Box>
    );
  }
);
