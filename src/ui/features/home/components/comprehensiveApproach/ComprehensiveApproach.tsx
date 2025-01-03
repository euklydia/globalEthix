import { TextBody, Title, PrimaryButton } from "../../../../components";

const comprehensiveApproachData = {
  title: "Une plateforme transversale Des services adaptés à vos besoins",
  subtitle: "Durabilité, éthique, gouvernance et communication",
  cta: {
    link: "#",
    label: "Explorez",
  },
  img: "/globalEthix/public/images/05.jpg",
  description:
    "Le recours à des ressources humaines, expérimentées et qualifiées, externalisées en Afrique du Nord, permet d’offrir ces prestations à haut niveau à un coût très compétitif. Notre partenariat stratégique avec Léger, leader nord-américain de la recherche marketing, nous donne les moyens de proposer des solutions innovantes en termes de pilotage de la gouvernance et de l’expérience client.",
};

export const ComprehensiveApproach = () => {
  return (
    <section className="flex flex-col flex-wrap desktopS:flex-row max-w-[1200px] m-auto gap-1 desktopS:gap-2 px-1 py-2 desktopS:px-2 desktopS:py-4 justify-center ">
      <div className="flex flex-col flex-1 gap-0.75">
        <div>
          <Title
            text={comprehensiveApproachData.title}
            fontSize={"title3"}
            TagName="h3"
            className="flex flex-1"
          />
          <Title
            text={comprehensiveApproachData.subtitle}
            fontSize={"title5"}
            TagName="h4"
            className="flex flex-1"
            color={"tertiary"}
          />
        </div>
        <TextBody
          className="text-justify "
          text={comprehensiveApproachData.description}
        />
        <div className="flex">
          <PrimaryButton link={"#"} />
        </div>
      </div>
      <div className="w-full max-w-[652px] m-auto desktopS:w-[524px]  order-[-1] desktopS:order-1">
        <img
          src={comprehensiveApproachData.img}
          alt="Placeholder"
          className="w-full h-full object-cover aspect-16/9"
        />
      </div>
    </section>
  );
};
