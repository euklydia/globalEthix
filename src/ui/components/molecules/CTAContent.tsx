import { Component, PropsWithCTAContent } from "../../../common";

type CTAContentProps = PropsWithCTAContent;

/**
 * Component that renders icon and/or text according to parameters
 * This component must always be used to render CTA content and nowhere else
 * @param props.labelElement - Component that will render the text
 * @param props.icon - Component that will render the icon
 */
export const CTAContent: Component<CTAContentProps> = (props) => {
  if ("labelElement" in props && "icon" in props) {
    return (
      <>
        {props.icon}
        {props.labelElement}
      </>
    );
  }
  if ("labelElement" in props) {
    return props.labelElement;
  }
  return props.icon;
};
