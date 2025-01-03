import { TextBody, Title, PrimaryButton } from "../../../../components";

const DEFAULT_TEXT =
  "Un accompagnement intégral ou des services à la carte, du diagnostic à l’implantation des stratégies, incluant formation, audit, conseil, communication, branding, relations publiques et gouvernementales, destiné à, améliorer et valoriser la gouvernance responsable des organisations.";
const TITLE = "Quatre pôles de services";

export const ComprehensiveService = () => {
  return (
    <section className="flex flex-col desktopS:flex-row gap-1.5 px-1 desktopS:px-2 pb-2 desktopS:pb-4 items-center justify-center min-h-[450px] max-w-[1200px] m-auto">
      <div className="flex flex-col gap-1">
        <img
          src={"./images/06.jpg"}
          alt="Placeholder"
          className="w-full h-full object-cover aspect-1"
        />
      </div>
      <div className="dynamic-text gap-0.5 flex flex-col flex-1">
        <Title text={TITLE} TagName={"h3"} fontSize="title2" />
        <TextBody text={DEFAULT_TEXT} className="text-justify" />
        <div className="flex">
          <PrimaryButton link={"#"} />
        </div>
      </div>
    </section>
  );
};
