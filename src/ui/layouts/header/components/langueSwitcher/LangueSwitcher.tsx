import { Clickable, TextCaption } from "../../../../components";
import { useLanguage } from "../../../../../libs";
import { Component } from "../../../../../common";

export type LangueSwitcherPros = {
  langues: {
    id: string;
    label: string;
  }[];
};

export const LangueSwitcher: Component<LangueSwitcherPros> = ({ langues }) => {
  const { changeLanguage } = useLanguage();

  const handleLanguageChange = (newLocale: string) => {
    changeLanguage(newLocale); // Call the changeLanguage function from context
  };
  return (
    <div className="flex gap-1">
      {langues.map((elem) => (
        <Clickable
          key={elem.id}
          onClick={() => handleLanguageChange(elem.id)}
          ariaLabel="hi"
          className="w-[32px] aspect-1/1 h-[32px] overflow-hidden rounded-0.25"
          content={{
            labelElement: (
              <TextCaption
                color={"tertiary"}
                text={elem.label}
                TagName="span"
                className="text-text-primary"
                fontWeight={"bold"}
              />
            ),
          }}
        />
      ))}
    </div>
  );
};
