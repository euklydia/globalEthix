"use client";

import clsx from "clsx";
import { Component, PropsWithClassName } from "../../../common";
import { useLanguage } from "../../../libs";
import { FooterLinkListItems } from "./components";
import { ReactComponent as LOGO } from "../../../assets/svg/whiteLogo.svg";

export const Footer: Component<PropsWithClassName> = ({ className }) => {
  const { content } = useLanguage();
  return (
    <footer
      className={clsx(
        "flex flex-col",
        "inset-x-0 bottom-0",
        "w-full relative",
        className
      )}
    >
      <div className={"bg-background-brand"}>
        <div
          className={clsx(
            "flex flex-col gap-1.5",
            "px-1 pb-1.5 desktopS:px-1.5 desktopS:pt-1.5",
            "bg-background-brand",
            "desktopS:mx-auto desktopS:w-maxWidth"
          )}
        >
          <ul
            className={
              "flex flex-col desktopS:flex-row desktopS:gap-1.5 pt-1.5 container"
            }
          >
            <LOGO width={"296px"} height={"100px"} />
            <FooterLinkListItems links={content.footer.links} />
          </ul>
        </div>
      </div>
    </footer>
  );
};
