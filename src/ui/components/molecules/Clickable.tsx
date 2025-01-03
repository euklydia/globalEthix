"use client";
import clsx from "clsx";
import {
  Component,
  PropsWithAriaLabel,
  PropsWithClassName,
  PropsWithCTA,
  PropsWithId,
  PropsWithCTAContent,
  PropsWithSuppressHydrationWarning,
} from "../../../common";
import { CTA } from "./CTA";
import { CTAContent } from "./CTAContent";

type ClickableProps = PropsWithAriaLabel &
  PropsWithClassName &
  PropsWithId &
  PropsWithSuppressHydrationWarning &
  PropsWithCTA & {
    content: PropsWithCTAContent;
  };

/**
 * Clickable component used to make call-to-actions
 * Use this component when you need a CTA with an icon and/or text
 * @param ariaLabel - Aria label for the button or anchor
 * @param className - Additional styles
 * @param id - ID of the button or the anchor
 * @param suppressHydrationWarning - If true, suppress the hydration warning
 * @param content - Content of the clickable text (icon, label, ...)
 * @param props - Action to be performed when the text is clicked (href, onClick, ...)
 */
export const Clickable: Component<ClickableProps> = ({
  ariaLabel,
  className,
  id,
  suppressHydrationWarning = false,
  content,
  ...props
}) => {
  return (
    <CTA
      ariaLabel={ariaLabel}
      className={clsx("flex flex-row items-center", className)}
      id={id}
      suppressHydrationWarning={suppressHydrationWarning}
      {...props}
    >
      <CTAContent {...content} />
    </CTA>
  );
};
