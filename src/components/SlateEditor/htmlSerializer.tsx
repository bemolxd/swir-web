import escapeHtml from "escape-html";
import { Node, Text } from "slate";

export const serialize = (node: Node) => {
  if (Text.isText(node)) {
    let string = escapeHtml(node.text);

    if (node.bold) {
      string = `<strong>${string}</strong>`;
    }

    if (node.code) {
      string = `<code>${string}</code>`;
    }

    if (node.italic) {
      string = `<em>${string}</em>`;
    }

    if (node.underline) {
      string = `<u>${string}</u>`;
    }

    return string;
  }

  const children: any = node.children.map((n: Node) => serialize(n)).join("");

  switch (node.type) {
    case "list-item":
      return `<li>${children}</li>`;
    case "numbered-list":
      return `<ol>${children}</ol>`;
    case "bulleted-list":
      return `<ul>${children}</ul>`;
    default:
      return `<p>${children}</p>`;
  }
};

export const serializeValue = (value: Node[]): string =>
  value.map((val) => serialize(val)).join("");
