import { Accordion, Divider, LinksAccordion } from "../../../../components";
import { Component } from "../../../../../common";
import { useTailwindBreakpoint } from "../../../../../hooks";

type FooterLinkListItemsProps = {
  links: {
    id: string;
    title: string;
    links: Accordion[];
  }[];
};

export const FooterLinkListItems: Component<FooterLinkListItemsProps> = ({
  links,
}) => {
  const isDesktop = useTailwindBreakpoint("desktopS");

  return links.map(({ id, title, links }) => (
    <li key={id} className={"flex flex-col"}>
      <LinksAccordion
        title={title}
        contents={links}
        isCollapsible={!isDesktop}
      />
      {!isDesktop && <Divider />}
    </li>
  ));
};
