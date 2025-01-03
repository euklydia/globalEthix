"use client";

import clsx from "clsx";
import { Clickable, Icon } from "..";
import { PropsWithAriaLabel, Component } from "../../../common";

type BurgerMenuButtonProps = PropsWithAriaLabel & {
  onOpenAsideNavbar: () => void;
};

export const BurgerMenuButton: Component<BurgerMenuButtonProps> = ({
  ariaLabel,
  onOpenAsideNavbar,
}) => {
  return (
    <Clickable
      className={clsx(
        "flex desktop:hidden",
        "justify-center items-center",
        "text-text-primary"
      )}
      ariaLabel={ariaLabel}
      onClick={onOpenAsideNavbar}
      content={{
        icon: <Icon name={"burgerButton"} width={"48px"} height={"48px"} />,
      }}
    />
  );
};
