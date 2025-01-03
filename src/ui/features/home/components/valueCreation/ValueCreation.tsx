import { TextBody, Title, PrimaryButton } from "../../../../components";

const valueCreationData = {
  title:
    "Pour créer de la valeur pour votre organisation Et répondre aux exigences réglementaires et morales issues de la société",
  description:
    "Dans un contexte de crise climatique, d'inégalités sociales grandissantes et de demandes accrues en matière de transparence, l’ESG et la RSE deviennent des priorités stratégiques. Avec des directives comme la CSRD et la CSDDD en Europe ou la loi sapin 2 en France, des normes structurantes comme la ESG1000, l’ISO 37000 sur la gouvernance et l’ISO 37001 pour la prévention de la corruption, les entreprises font face à de plus grandes exigences. Le non-respect de ces règles peut entraîner des pertes de réputation, une baisse de la compétitivité et même des sanctions financières. À l’inverse, une approche proactive de ces enjeux renforce l’image de marque et attire les investisseurs et des collaborateurs responsables.",
  subtitle: "",
  img: "https://via.placeholder.com/524",
};

export const ValueCreation = () => {
  return (
    <section className="flex flex-col desktopS:flex-row gap-1 desktopS:gap-2 justify-center items-center max-w-[1200px] m-auto px-1 desktopS:px-2 pb-2 desktopS:pb-4">
      <div className="flex flex-1 flex-col gap-0.5">
        <Title
          text={valueCreationData.title}
          fontSize={"title3"}
          TagName="h3"
          className="flex"
        />
        <TextBody
          text={valueCreationData.description}
          className="text-justify "
        />
        <div className="flex">
          <PrimaryButton link={"#"} />
        </div>
      </div>
      <div className="w-full flex-1 flex max-w-[652px] m-auto desktopS:w-[424px]  order-[-1] desktopS:order-1">
        <img
          src={"https://via.placeholder.com/524"}
          alt="Placeholder"
          className="w-full h-full object-cover aspect-1/1"
        />
      </div>
    </section>
  );
};
