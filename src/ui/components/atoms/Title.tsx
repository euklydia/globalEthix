import { Component, PropsWithClassName } from "../../../common";
import { cva, VariantProps } from "class-variance-authority";
import colors from "./ColorProps";
import { Typography } from "./Typography";
import { TextProps } from "./TypographyProps";

export const titleStyle = cva("", {
  variants: {
    color: colors,
    fontFamily: {
      arial: "font-arial",
      brand: "font-brand",
    },
  },
  defaultVariants: {
    color: "primary",
    fontFamily: "brand",
  },
});

type fontSizeType = "title1" | "title2" | "title3" | "title4" | "title5";
type TitleProps = PropsWithClassName &
  VariantProps<typeof titleStyle> &
  TextProps & {
    TagName?: keyof HTMLElementTagNameMap;
    fontSize?: fontSizeType;
  };

export const Title: Component<TitleProps> = ({
  TagName = "p",
  fontSize = "title1",
  color = "primary",
  fontFamily = "brand",
  ...props
}) => {
  return (
    <Typography
      TagName={TagName}
      fontSize={fontSize}
      fontWeight={"bold"}
      textDecoration={"none"}
      color={color}
      fontFamily={fontFamily}
      {...props}
    />
  );
};
