import { isValidElement } from "react";
import clsx from "clsx";
import { Component } from "../../../common";
import { StringHelpers } from "../../../libs";
import { TypographyProps, typographyStyle } from "./TypographyProps";

/**
 * Represents a Typography component.
 *
 * @param className - The additional CSS class name for the component.
 * @param fontFamily - The font family variant for the component.
 * @param fontSize - The font size variant for the component.
 * @param fontWeight - The font weight variant for the component.
 * @param textDecoration - The text decoration variant for the component.
 * @param TagName - The HTML tag name to be used for the component.
 * @param color - The color variant for the component.
 * @param text - The text content of the component.
 * @param innerHTML - The HTML content of the component.
 * @param props - Additional props to be spread to the underlying HTML element.
 * @returns The rendered Typography component.
 */
export const Typography: Component<TypographyProps> = ({
  className,
  fontFamily,
  fontSize,
  fontWeight,
  textDecoration,
  TagName = "p",
  color = "primary",
  text,
  innerHTML,
  ...props
}) => {
  const classNames = clsx(
    typographyStyle({
      fontFamily,
      fontSize,
      textDecoration,
      fontWeight,
      className,
      color,
    })
  );

  if (typeof innerHTML !== "string" && isValidElement(innerHTML)) {
    const htmlString = innerHTML.props?.rawHtml?.content ?? innerHTML;

    if (typeof htmlString === "string") {
      return (
        <TagName
          className={classNames}
          dangerouslySetInnerHTML={{
            __html: StringHelpers.removeOuterHTMLTag(htmlString),
          }}
          {...props}
        />
      );
    }
  }
  return (
    <TagName className={classNames} {...props}>
      {text || innerHTML}
    </TagName>
  );
};
