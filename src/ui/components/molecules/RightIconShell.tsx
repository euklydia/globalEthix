import { PropsWithChildren } from "react";
import { Component, PropsWithIcon } from "../../../common";
import { Icon } from "../atoms";

type RightIconShellProps = PropsWithIcon &
  PropsWithChildren & {
    iconClassName?: string;
  };

/**
 * RightIconShell is a component that wraps children with an icon on the right side.
 * It's not part of the Glow - Design System
 * @param Icon - Icon to be displayed on the right side of the children
 * @param children - Children to be wrapped
 * @param iconClassName - Additional styles for the icon
 *
 *
 */

export const RightIconShell: Component<RightIconShellProps> = ({
  icon,
  children,
  iconClassName,
}) => {
  return (
    <span
      className={"flex flex-row items-center justify-between w-full gap-0.5"}
    >
      <span className={"flex flex-row items-center h-full gap-0.5"}>
        {children}
      </span>
      <Icon name={icon} className={iconClassName} />
    </span>
  );
};
