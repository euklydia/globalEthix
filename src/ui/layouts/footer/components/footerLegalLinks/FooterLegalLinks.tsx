import { useEffect, useRef } from "react";
import clsx from "clsx";
import styles from "./footerLegalLinks.module.css";
import { TextBodySmall, Clickable } from "../../../../components";
import { Component } from "../../../../../common";
import { HTMLString, InnerHTML } from "../../../../../libs";

type FooterLegalLinkProps = {
  label: HTMLString;
  href: string;
};

const FooterLegalLink: Component<FooterLegalLinkProps> = ({ label, href }) => {
  return (
    <Clickable
      className={clsx(
        "text-text-secondary-inverse-fixed",
        "pr-1",
        styles.footerLegalLink
      )}
      href={href}
      content={{
        labelElement: (
          <TextBodySmall
            className={"text-wrap hover:underline"}
            color={"secondary-inverse-fixed"}
            TagName={"span"}
            innerHTML={<InnerHTML rawHtml={label} />}
          />
        ),
      }}
    />
  );
};

export type FooterComplianceValue = Readonly<{
  id: string;
  label: HTMLString;
  href: string;
}>;

type FooterLegalLinksProps = {
  legalLinks: FooterComplianceValue[];
};

export const FooterLegalLinks: Component<FooterLegalLinksProps> = ({
  legalLinks,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      const elements = Array.from(container.children) as HTMLElement[];

      elements.forEach((element, index) => {
        /**
         * Check that elements are on the same line. If this is the case, do not add padding on the left.
         */
        if (index > 0 && element.offsetTop > elements[index - 1].offsetTop) {
          element.style.paddingLeft = "0px";
        }
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={
        "flex flex-row items-start flex-wrap gap-y-1 pb-1.5 desktop:pb-0"
      }
    >
      {legalLinks.map(({ id, label, href }) => (
        <FooterLegalLink label={label} href={href} key={id} />
      ))}
    </div>
  );
};
