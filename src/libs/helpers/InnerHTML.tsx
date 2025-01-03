"use client";

import { useEffect, useState } from "react";
import { PropsWithClassName, Component } from "../../common";
import DOMPurify from "isomorphic-dompurify";
import { HTMLString } from "./HTMLString";

export type InnerHTMLProps = PropsWithClassName & {
  rawHtml: HTMLString;
};

export const InnerHTML: Component<InnerHTMLProps> = ({
  className,
  rawHtml,
}) => {
  const [content, setContent] = useState(rawHtml.content);

  useEffect(() => {
    setContent(rawHtml.content);
  }, [rawHtml.content]);

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
    />
  );
};
