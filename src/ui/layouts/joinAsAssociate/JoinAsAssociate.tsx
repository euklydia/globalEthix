import { TextBodySmall, Title, PrimaryButton } from "../../components";

const description =
  "Chaque bureau-pays est une entreprise indépendante. Elle offre, sur son territoire, les services de GlobalEthix, en tout ou en partie, en respect des standards établis et du Code d’éthique de l’organisation. Le bureau-pays désigne un associé pour le représenter au sein du comité directeur de GEI. Les experts-conseil des bureaux-pays participent au pool d’experts internationaux proposés à l’échelle globale.";

export const JoinAsAssociate = () => {
  return (
    <section className="home bg-background-brand px-1 py-2 desktopS:px-3 desktopS:py-4 gap-1.25 desktopS:gap-1.5 flex flex-col desktopS:flex-row items-center">
      <div className="description flex flex-col desktopS:flex-row gap-1.5 desktopS:gap-3 max-w-[1200px] m-auto">
        <div className="flex-1 w-full desktopS:max-w-[40%] flex-col">
          <Title
            className="gradient-text"
            text={"Participez au mouvement !"}
            fontSize={"title1"}
            color={"primary-inverse-fixed"}
            TagName="h4"
          />
          <Title
            text={"Devenez associé"}
            fontSize={"title2"}
            color={"tertiary-inverse-fixed"}
          />
        </div>

        <div className="flex-1 w-full desktopS:max-w-[40%] gap-1.5 flex flex-col">
          <TextBodySmall
            text={description}
            color={"primary-inverse-fixed"}
            className="text-justify"
          />
          <div className="flex">
            <PrimaryButton link={"#"} />
          </div>
        </div>
      </div>
    </section>
  );
};
