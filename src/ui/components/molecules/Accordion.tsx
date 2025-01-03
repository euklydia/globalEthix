import React, { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import {
  Component,
  PropsWithAriaLabel,
  PropsWithClassName,
  PropsWithCTA,
  PropsWithStyle,
} from "../../../common";
import { FunctionHelpers } from "../../../libs";

export type Accordion = {
  id: string;
  label: string;
  labelColor?: string;
  href: string;
};

type AccordionProps = {
  title: string;
  href?: string;
  labelColor?: string;
  contents: Accordion[];
  isCollapsible: boolean;
  containerClassName?: string;
  titleClassName?: string;
  itemsContainerClassName?: string;
  itemContainerClassName?: string;
  TitleComponent: React.ComponentType<
    PropsWithStyle &
      PropsWithAriaLabel &
      PropsWithClassName &
      PropsWithCTA & {
        label: string;
        labelColor?: string;
        Icon?: React.ComponentType<{
          fill?: string;
        }>;
        showArrow?: boolean;
        isCollapsible?: boolean;
        isCollapsed?: boolean;
      }
  >;
  ItemComponent: React.ComponentType<Omit<Accordion, "id">>;
  isTitleBold: boolean;
  ContainerTagName?: keyof HTMLElementTagNameMap;
};

type AccordionTitleComponentProps = Omit<
  AccordionProps,
  | "contents"
  | "containerClassName"
  | "itemsContainerClassName"
  | "itemContainerClassName"
  | "ItemComponent"
  | "isTitleBold"
> & {
  toggleCollapse?: () => void;
  isCollapsed?: boolean;
};

/**
 * A component that renders a title for the accordion.
 * @param title - The title of the accordion.
 * @param href - The href of the title.
 * @param labelColor - The color of the title.
 * @param isCollapsible - A boolean that determines if the accordion is collapsible.
 * @param titleClassName - Additional className for the title.
 * @param TitleComponent - The component that renders the title.
 * @param toggleCollapse - A function that toggles the collapse of the accordion.
 * @param isCollapsed - A boolean that determines if the accordion is collapsed.
 * @param dataLayerId - The data layer id of the title component.
 * @param dataLayerSubId - The data layer sub-id of the title component.
 */
const AccordionTitleComponent: Component<AccordionTitleComponentProps> = ({
  title,
  href,
  labelColor,
  isCollapsible = false,
  titleClassName,
  TitleComponent,
  toggleCollapse,
  isCollapsed,
}) => {
  return (
    <TitleComponent
      label={title}
      labelColor={labelColor}
      href={href ?? ""}
      className={clsx("w-full", titleClassName)}
      onClick={toggleCollapse}
      showArrow={isCollapsible}
      isCollapsible={isCollapsible}
      isCollapsed={isCollapsed}
    />
  );
};

type AccordionContentListItemsProps = {
  contents: Accordion[];
  itemContainerClassName?: string;
  ItemComponent: React.ComponentType<Omit<Accordion, "id">>;
};

/**
 * A component that renders the content of the accordion.
 * @param contents - The contents of the accordion.
 * @param ItemComponent - The component that renders the content.
 * @param itemContainerClassName - Additional className for the content.
 */
const AccordionContentListItems: Component<AccordionContentListItemsProps> = ({
  contents,
  ItemComponent,
  itemContainerClassName,
}) => {
  return contents.map(({ id, label, labelColor, href }) => (
    <li
      className={clsx("flex flex-1", "list-none", itemContainerClassName)}
      key={id}
    >
      <ItemComponent label={label} href={href} labelColor={labelColor} />
    </li>
  ));
};

/**
 * A component that renders a collapsible accordion.
 * @param title - The title of the accordion.
 * @param href - The href of the title.
 * @param labelColor - The color of the title.
 * @param contents - The contents of the accordion.
 * @param isCollapsible - A boolean that determines if the accordion is collapsible.
 * @param containerClassName - Additional className for the accordion.
 * @param titleClassName - Additional className for the title.
 * @param itemsContainerClassName - Additional className for the content container.
 * @param itemContainerClassName - Additional className for the content.
 * @param TitleComponent - The component that renders the title.
 * @param ItemComponent - The component that renders the content.
 * @param ContainerTagName - The tag name of the container.
 */
const CollapsibleAccordion: Component<Omit<AccordionProps, "isTitleBold">> = ({
  title,
  href,
  labelColor,
  contents,
  isCollapsible = false,
  containerClassName,
  titleClassName,
  itemsContainerClassName,
  itemContainerClassName,
  TitleComponent,
  ItemComponent,
  ContainerTagName = "div",
}) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const contentRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      if (isCollapsible) {
        contentRef.current.style.maxHeight = FunctionHelpers.numberToPx(0);
      } else {
        contentRef.current.style.maxHeight = FunctionHelpers.numberToPx(
          contentRef.current.scrollHeight
        );
      }
    }
  }, [isCollapsible]);

  const toggleCollapse = () => {
    if (contentRef.current) {
      setIsCollapsed(!isCollapsed);
      if (contentRef.current.style.maxHeight !== "0px") {
        contentRef.current.style.maxHeight = FunctionHelpers.numberToPx(0);
      } else {
        contentRef.current.style.maxHeight = FunctionHelpers.numberToPx(
          contentRef.current.scrollHeight
        );
      }
    }
  };

  return (
    <ContainerTagName className={clsx("list-none", containerClassName)}>
      <AccordionTitleComponent
        title={title}
        labelColor={labelColor}
        href={href}
        TitleComponent={TitleComponent}
        titleClassName={titleClassName}
        toggleCollapse={toggleCollapse}
        isCollapsible={isCollapsible}
        isCollapsed={isCollapsed}
      />
      <ul
        ref={contentRef}
        className={clsx(
          "flex flex-col h-auto",
          isCollapsible &&
            "overflow-hidden transition-max-height duration-moderate1 ease-linear",
          itemsContainerClassName
        )}
      >
        <AccordionContentListItems
          contents={contents}
          ItemComponent={ItemComponent}
          itemContainerClassName={itemContainerClassName}
        />
      </ul>
    </ContainerTagName>
  );
};

/**
 * A component that renders an accordion.
 * @param title - The title of the accordion.
 * @param href - The href of the title.
 * @param labelColor - The color of the title.
 * @param contents - The contents of the accordion.
 * @param isCollapsible - A boolean that determines if the accordion is collapsible.
 * @param containerClassName - Additional className for the accordion.
 * @param titleClassName - Additional className for the title.
 * @param itemsContainerClassName - Additional className for the item's container.
 * @param itemContainerClassName - Additional className for the item container.
 * @param TitleComponent - The component that renders the title.
 * @param ItemComponent - The component that renders the content.
 * @param isTitleBold - A boolean that determines if the title is bold.
 * @param ContainerTagName - The tag name of the container.
 * @param dataLayerId - The data layer id of the title component.
 * @param dataLayerSubId - The data layer sub-id of the title component.
 */
export const Accordion: Component<AccordionProps> = ({
  title,
  href,
  labelColor,
  contents,
  isCollapsible = false,
  containerClassName,
  titleClassName,
  itemsContainerClassName,
  itemContainerClassName,
  TitleComponent,
  ItemComponent,
  isTitleBold,
  ContainerTagName = "div",
}) => {
  if (!isCollapsible) {
    return (
      <ContainerTagName className={clsx("list-none", containerClassName)}>
        <AccordionTitleComponent
          title={title}
          labelColor={labelColor}
          TitleComponent={TitleComponent}
          href={href}
          titleClassName={titleClassName}
          isCollapsible={false}
          isCollapsed={isTitleBold}
        />
        <ul className={clsx("flex flex-col h-auto", itemsContainerClassName)}>
          <AccordionContentListItems
            contents={contents}
            ItemComponent={ItemComponent}
            itemContainerClassName={itemContainerClassName}
          />
        </ul>
      </ContainerTagName>
    );
  }

  return (
    <CollapsibleAccordion
      title={title}
      href={href}
      labelColor={labelColor}
      contents={contents}
      isCollapsible={isCollapsible}
      containerClassName={containerClassName}
      titleClassName={titleClassName}
      itemsContainerClassName={itemsContainerClassName}
      itemContainerClassName={itemContainerClassName}
      TitleComponent={TitleComponent}
      ItemComponent={ItemComponent}
      ContainerTagName={ContainerTagName}
    />
  );
};
