import { Component } from "../../../common";
import { Typography } from "./Typography";
import { TypographyProps } from "./TypographyProps";

export const TextCaption: Component<TypographyProps> = ({ ...props }) => {
  return <Typography fontSize={"caption"} {...props} />;
};
