import { ReactNode } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { PropsWithClassName, PropsWithStyle } from "../../../common";
import colors from "./ColorProps";

/**
 * Represents the style configuration for the Typography component.
 */

export const typographyStyle = cva("tracking-wide break-words", {
  variants: {
    fontSize: {
      body: "text-body",
      bodySmall: "text-bodySmall",
      callout: "text-callout",
      caption: "text-caption",
      title1: "text-mobileTitle1 tablet:text-title1",
      title2: "text-mobileTitle2 tablet:text-title2",
      title3: "text-mobileTitle3 tablet:text-title3",
      title4: "text-mobileTitle4 tablet:text-title4",
      title5: "text-mobileTitle5 tablet:text-title5",
    },
    textDecoration: {
      none: "",
      underline: "underline",
      strike: "line-through",
    },
    fontWeight: {
      medium: "font-medium",
      bold: "font-bold",
    },
    fontFamily: {
      arial: "font-arial",
      brand: "font-brand",
    },
    color: colors,
  },
  defaultVariants: {
    fontSize: "body",
    textDecoration: "none",
    fontWeight: "medium",
    fontFamily: "brand",
  },
});

export type TextProps =
  | { text: string | ReactNode; innerHTML?: never }
  | { text?: never; innerHTML: ReactNode };

export type TypographyProps = PropsWithClassName &
  VariantProps<typeof typographyStyle> &
  PropsWithStyle &
  TextProps & {
    suppressHydrationWarning?: boolean;
    TagName?: keyof HTMLElementTagNameMap;
  };
