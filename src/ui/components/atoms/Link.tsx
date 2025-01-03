import { PropsWithChildren, useEffect, useState } from "react";
import { Link as LinkDirection } from "react-router-dom";
import clsx from "clsx";
import {
  Component,
  PropsWithClassName,
  PropsWithAriaLabel,
  PropsWithStyle,
  PropsWithId,
  PropsWithDataLayer,
  PropsWithHref,
} from "../../../common";

export type LinkProps = PropsWithStyle &
  PropsWithAriaLabel &
  PropsWithId &
  PropsWithChildren &
  PropsWithClassName &
  PropsWithHref &
  PropsWithDataLayer;

/**
 * A component that renders an anchor or span if the link is obfuscated.
 * @param style - Additional styles for the anchor or span.
 * @param ariaLabel - The aria-label for the anchor or span.
 * @param children - The content to render.
 * @param className - Additional classes to apply.
 * @param href - The href for the anchor.
 * @param id - The id for the anchor or span.
 * @param isObfuscated - Whether the link should be obfuscated.
 * @param dataLayerId - The data-layer-id for the anchor.
 * @param dataLayerSubId - The data-layer-sub-id for the anchor.
 * @param dataLayerLabel - The data-layer-label for the anchor.
 */
export const Link: Component<LinkProps> = ({
  style,
  ariaLabel,
  children,
  className,
  href,
  id,
  isObfuscated,
  dataLayerId,
  dataLayerSubId,
  dataLayerLabel,
  disabled,
}) => {
  const [obfuscatedHref, setObfuscatedHref] = useState<string>();
  useEffect(() => {
    if (isObfuscated) {
      setObfuscatedHref(window.btoa(encodeURIComponent(href)));
    }
  }, [href, isObfuscated]);

  return isObfuscated ? (
    <span
      role={"link"}
      data-obfuscated-href={obfuscatedHref}
      className={clsx(
        disabled ? "pointer-events-none cursor-default" : "cursor-pointer",
        className
      )}
      style={style}
      aria-label={ariaLabel}
      data-layer-id={dataLayerId}
      data-layer-sub-id={dataLayerSubId}
      data-layer-label={dataLayerLabel}
    >
      {children}
    </span>
  ) : (
    <LinkDirection
      className={clsx(
        disabled && "pointer-events-none cursor-default",
        className
      )}
      to={href}
      aria-label={ariaLabel}
      id={id}
      style={style}
      data-layer-id={dataLayerId}
      data-layer-sub-id={dataLayerSubId}
      data-layer-label={dataLayerLabel}
    >
      {children}
    </LinkDirection>
  );
};
