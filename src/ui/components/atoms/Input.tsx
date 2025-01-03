import React from "react";
import clsx from "clsx";
import { Component, PropsWithClassName } from "../../../common";

type GlowInputProps = React.ComponentPropsWithRef<"input"> & PropsWithClassName;

export const Input: Component<GlowInputProps> = ({ className, ...props }) => {
  return (
    <input className={clsx("text-body font-brand", className)} {...props} />
  );
};
