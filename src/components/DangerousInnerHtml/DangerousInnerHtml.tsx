import { createElement } from "react";
import sanitizeHtml from "sanitize-html";

interface IProps {
  html: string;
  as?: "div" | "span";
}

export const DangerousInnerHtml = ({ html, as = "div" }: IProps) =>
  createElement(as, {
    dangerouslySetInnerHTML: {
      __html: sanitizeHtml(html, {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["code"]),
      }),
    },
  });
