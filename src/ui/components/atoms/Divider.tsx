import clsx from "clsx";
import { Component, PropsWithClassName } from "../../../common";

type DividerProps = PropsWithClassName & {
  vertical?: boolean;
};

export const Divider: Component<DividerProps> = ({
  className,
  vertical = false,
}) => {
  if (vertical) {
    return (
      <div
        className={clsx("h-screen w-divider bg-border-primary", className)}
      />
    );
  }

  return (
    <hr
      className={clsx(
        "w-full border-t border-t-medium border-t-border-primary bg-border-primary",
        className
      )}
    />
  );
};
