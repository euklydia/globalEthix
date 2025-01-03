import clsx from "clsx";
import { VariantProps } from "class-variance-authority";
import {
  Component,
  PropsWithClassName,
  PropsWithCTA,
  PropsWithIcon,
} from "../../../../common";
import { buttonStyle } from "./buttonStyle";
import { Typography } from "../Typography";
import { Clickable } from "../../molecules";

type ButtonProps = PropsWithClassName &
  PropsWithCTA &
  VariantProps<typeof buttonStyle> &
  Partial<PropsWithIcon> & {
    label?: string;
    isSpinnerActive?: boolean;
    fontFamily?: string;
  };

/**
 * Button component
 * @param Icon - Icon to be displayed on the right side of the text
 * @param label - Label of the button
 * @param size - Size of the button
 * @param variant - Variant of the button
 * @param className - Additional styles
 * @param fontSize - Font size of the label. Can be 'body' or 'bodySmall'
 * @param props - Action to be performed when the button is clicked (href, onClick, ...)
 */
export const Button: Component<ButtonProps> = ({
  label,
  size = "large",
  variant = "primary",
  className,
  fontSize = "body",
  fontFamily = "brand",
  ...props
}) => {
  return (
    <Clickable
      className={clsx(buttonStyle({ size, variant }), className)}
      content={{
        labelElement: label && (
          <Typography
            fontSize={fontSize}
            text={label}
            fontWeight={"bold"}
            color={null}
            TagName={"span"}
            fontFamily={fontFamily}
          />
        ),
      }}
      {...props}
    />
  );
};
