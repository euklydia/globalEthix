import { Component } from "../../../common";
import { Typography } from "./Typography";
import { TypographyProps } from "./TypographyProps";

export const TextBody: Component<TypographyProps> = ({ ...props }) => {
  return <Typography fontSize={"body"} {...props} />;
};
