import { Component } from "../../../common";
import { Typography } from "./Typography";
import { TypographyProps } from "./TypographyProps";

export const TextBodySmall: Component<TypographyProps> = ({
  fontSize = "bodySmall",
  ...props
}) => {
  return <Typography fontSize={fontSize} {...props} />;
};
