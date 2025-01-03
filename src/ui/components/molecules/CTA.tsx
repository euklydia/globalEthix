import { PropsWithChildren } from "react";
import {
  Component,
  PropsWithAriaLabel,
  PropsWithClassName,
  PropsWithCTA,
  PropsWithId,
  PropsWithSuppressHydrationWarning,
  isPropsWithFormSubmit,
  isPropsWithHref,
  PropsWithStyle,
} from "../../../common";
import { Link } from "../atoms";

type CTAProps = PropsWithAriaLabel &
  PropsWithClassName &
  PropsWithId &
  PropsWithStyle &
  PropsWithSuppressHydrationWarning &
  PropsWithCTA &
  PropsWithChildren;

/**
 * Generic flat CTA that will render a button or anchor depending on the props
 * @param ariaLabel - Aria label for the button or anchor
 * @param className - Additional styles for the button or anchor
 * @param id - ID of the button or the anchor
 * @param style - Additional styles for the button or anchor
 * @param suppressHydrationWarning - If true, suppress the hydration warning
 * @param children - Content of the button or anchor
 * @param props - Contains the following:
 * @param props.onMouseEnter - Function to be called when the mouse enters the button
 * @param props.onMouseLeave - Function to be called when the mouse leaves the button
 * @param props.onClick - Function to be called when the button is clicked
 * @param props.onKeyDown - Function to be called when a key is pressed
 * @param props.href - URL to navigate to when the anchor is clicked
 * @param props.isObfuscated - If true, the anchor will have an obscured URL
 */
export const CTA: Component<CTAProps> = ({
  ariaLabel,
  className,
  id,
  style,
  suppressHydrationWarning = false,
  children,
  ...props
}) => {
  if (isPropsWithHref(props)) {
    return (
      <Link
        id={id}
        className={className}
        ariaLabel={ariaLabel}
        style={style}
        href={props.href}
        isObfuscated={props.isObfuscated}
        disabled={props.disabled}
      >
        {children}
      </Link>
    );
  }

  if (isPropsWithFormSubmit(props)) {
    return (
      <button
        id={id}
        className={className}
        aria-label={ariaLabel}
        style={style}
        suppressHydrationWarning={suppressHydrationWarning}
        type={"submit"}
        form={props.formId}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      id={id}
      className={className}
      aria-label={ariaLabel}
      style={style}
      suppressHydrationWarning={suppressHydrationWarning}
      onClick={props.onClick}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onKeyDown={props.onKeyDown}
      type={"button"}
      disabled={props.disabled}
    >
      {children}
    </button>
  );
};
