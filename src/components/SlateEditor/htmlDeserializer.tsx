import { isEmpty } from "lodash";
import { jsx } from "slate-hyperscript";

export const deserialize = (element: HTMLElement) => {
  if (element.nodeType === 3) {
    if (element.textContent === "\n") return null;
    return jsx("text", {}, element.textContent);
  }
  if (element.nodeType !== 1) {
    return null;
  }
  var children: any = Array.from(element.childNodes)
    .map((node: any) => deserialize(node))
    .flat();

  if (children?.length === 0) {
    return element.textContent;
  }

  switch (element.nodeName) {
    case "BODY":
      return jsx("fragment", {}, children);
    case "P":
      return jsx("element", { type: "paragraph" }, children);
    case "OL":
      return jsx("element", { type: "numbered-list" }, children);
    case "UL":
      return jsx("element", { type: "bulleted-list" }, children);
    case "LI":
      return jsx("element", { type: "list-item" }, children);
    case "BR":
      return `</br>`;

    case "STRONG":
      return jsx("text", { bold: true }, children);
    case "EM":
      return jsx("text", { italic: true }, children);
    case "U":
      return jsx("text", { underline: true }, children);
    case "CODE":
      return jsx("text", { type: "code" }, children);

    default:
      return jsx("text", {}, element.textContent);
  }
};

export const deserializeHtml = (html: string): any => {
  if (!html || isEmpty(html)) return undefined;

  const element = new DOMParser().parseFromString(html, "text/html");
  return deserialize(element.body);
};
