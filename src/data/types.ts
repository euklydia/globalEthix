import React from "react";
import { frContent } from "./fr";

export type navBarLink = {
  menus: {
      id: string;
      title: string;
      link: string;
    }[];
};

export type Accordion = {
  id: string;
  label: string;
  href: string;
};

export type socialMedia = {
  id: string;
  iconRaw: string;
  href: string;
};

export type legalLink = {
  id: string;
  label: {
    content: string;
  };
  href: string;
};

export type UIFooterLinkListItemsProps = {
  links: {
    id: string;
    title: string;
    links: Accordion[];
  }[];
};

export type DataContent = typeof frContent;
