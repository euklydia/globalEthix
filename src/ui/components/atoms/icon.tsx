import IconName from "../../../assets/svg";
import { Component } from "../../../common";

type IconProps = {
  name: keyof typeof IconName; // Restrict to keys in iconMap
  className?: string; // Optional class names for styling
  width?: number | string; // Optional width
  height?: number | string; // Optional height
};

export const Icon: Component<IconProps> = ({
  name,
  className,
  width = "24px",
  height = "24px",
}) => {
  const IconComponent = IconName[name];

  if (!IconComponent) {
    return <span className={className}>Icon not found</span>;
  }

  return <IconComponent className={className} style={{ width, height }} />;
};
