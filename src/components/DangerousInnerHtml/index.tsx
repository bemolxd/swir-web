import { createElement } from "react";
// import sanitizeHtml, { AllowedAttribute } from "sanitize-html";

interface IProps {
  html: string;
  as?: "div" | "span";
}

export const DangerousInnerHtml = ({ html, as = "div" }: IProps) =>
  createElement(as, {
    dangerouslySetInnerHTML: {
      //   __html: sanitizeHtml(html, {
      //     allowedTags,
      //     allowedAttributes,
      //   }),
      __html: html,
    },
  });
