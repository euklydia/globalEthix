import { useState } from "react";
import { useFormik } from "formik";
import { expertiseFormValidationSchema } from "./expertise.schema";
import "./expertise-form.style.css";
import { TextBody, TextCaption, Title } from "../../components";

export const Contact = () => {
  const [notification, setNotification] = useState<string | null>(null);
  const formik = useFormik({
    initialValues: {
      lastName: "",
      firstName: "",
      email: "",
      phone: "",
      address: "",
      country: "",
      expertise: "",
      professionalExperience: "",
      interestDomains: "",
      franchiseMotivation: "",
      contribution: "",
      longTermObjectives: "",
      developmentLocation: "",
      availability: "",
      additionalInfo: "",
      acceptTerms: false,
    },
    validationSchema: expertiseFormValidationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      setNotification("Formulaire soumis avec succès !");
      resetForm();

      // Automatically hide notification after 3 seconds
      setTimeout(() => {
        setNotification(null);
      }, 3000);
    },
  });

  return (
    <>
      <div className="relative flex justify-center items-center">
        <img
          src={`/images/07.jpg`}
          alt="Example Image"
          style={{ width: "100%", height: "50vh" }}
          width={1}
          height={1}
          className="relative"
        />
        <Title
          text="Contactez-nous"
          className="absolute"
          fontFamily={"arial"}
          fontSize="title1"
          // color={"primary-inverse"}
        />
      </div>
      <div className="expertise-form rounded-0.5 px-1 py-2 desktopS:px-2 desktopS:py-4 flex flex-col gap-0.5 tablet:gap-1">
        {notification && (
          <div className="notification">
            <p>{notification}</p>
          </div>
        )}
        <Title text={"Où vous conduira votre expertise avec GlobalEthix ?"} />
        <TextBody
          text={`GlobalEthix est constitué d’un réseau de bureaux établis dans un pays ou
        une région d’un pays. Chaque bureau est une entreprise indépendante.
        Elle offre, sur son territoire, les services de GlobalEthix, en tout ou
        en partie, en respect des standards établis et du Code d’éthique de
        l’organisation, et se soumet au processus d’audit qualité établi par
        GEI. Chaque bureau paie une redevance servant à soutenir le réseau
        international.`}
        />

        <TextBody
          text={`Chaque bureau désigne un associé pour le représenter au sein du comité
        directeur de Global Ethix International. Il réunit l’expertise locale et
        établit une stratégie de développement des affaires. Par son adhésion au
        réseau, le bureau peut participer à des offres de service
        internationales ou dans des marchés étrangers ainsi qu’avec d’autres
        bureaux. Les experts-conseil des bureaux peuvent participer au pool
        d’experts internationaux proposés à l’échelle globale.`}
        />

        <TextBody
          text={`Une participation à ce grand mouvement vous intéresse ? Faites-nous
        connaître vos ambitions en remplissant le formulaire ci-joint.`}
        />

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-0.5 desktopS:gap-1"
        >
          {/* Existing Personal Information Section */}
          <Title text={"Informations personnelles"} fontSize="title4" />
          <div className="form-row">
            <div className="form-group">
              <label className="label" htmlFor="lastName">
                Nom *
              </label>
              <input
                id="lastName"
                type="text"
                {...formik.getFieldProps("lastName")}
                className={
                  formik.touched.lastName && formik.errors.lastName
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.lastName && formik.errors.lastName && (
                <TextCaption text={formik.errors.lastName} color={"error"} />
              )}
            </div>
            <div className="form-group">
              <label className="label" htmlFor="firstName">
                Prénom *
              </label>
              <input
                id="firstName"
                type="text"
                {...formik.getFieldProps("firstName")}
                className={
                  formik.touched.firstName && formik.errors.firstName
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.firstName && formik.errors.firstName && (
                <TextCaption text={formik.errors.firstName} color={"error"} />
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="label" htmlFor="email">
                Adresse e-mail *
              </label>
              <input
                id="email"
                type="email"
                {...formik.getFieldProps("email")}
                className={
                  formik.touched.email && formik.errors.email
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.email && formik.errors.email && (
                <TextCaption text={formik.errors.email} color={"error"} />
              )}
            </div>
            <div className="form-group">
              <label className="label" htmlFor="phone">
                Numéro de téléphone *
              </label>
              <input
                id="phone"
                type="text"
                {...formik.getFieldProps("phone")}
                className={
                  formik.touched.phone && formik.errors.phone
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.phone && formik.errors.phone && (
                <TextCaption text={formik.errors.phone} color={"error"} />
              )}
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="label" htmlFor="address">
                Adresse *
              </label>
              <input
                id="address"
                type="text"
                {...formik.getFieldProps("address")}
                className={
                  formik.touched.address && formik.errors.address
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.address && formik.errors.address && (
                <TextCaption text={formik.errors.address} color={"error"} />
              )}
            </div>
            <div className="form-group">
              <label className="label" htmlFor="country">
                Pays *
              </label>
              <select
                id="country"
                {...formik.getFieldProps("country")}
                className={
                  formik.touched.country && formik.errors.country
                    ? "input-error"
                    : ""
                }
              >
                <option value="">Pays</option>
                <option value="France">France</option>
                <option value="Tunisie">Tunisie</option>
                <option value="Belgique">Belgique</option>
              </select>
              {formik.touched.country && formik.errors.country && (
                <TextCaption text={formik.errors.country} color={"error"} />
              )}
            </div>
          </div>
          {/* Expertise Section */}
          <Title text={"Informations sur l'expertise"} fontSize="title4" />
          <div className="form-group">
            <label className="label" htmlFor="expertise">
              Description de votre expertise ou de votre entreprise *
            </label>
            <textarea
              id="expertise"
              {...formik.getFieldProps("expertise")}
              className={
                formik.touched.expertise && formik.errors.expertise
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.expertise && formik.errors.expertise && (
              <TextCaption text={formik.errors.expertise} color={"error"} />
            )}
          </div>
          <div className="form-row">
            <div className="form-group">
              <label className="label" htmlFor="professionalExperience">
                Expérience professionnelle pertinente *
              </label>
              <textarea
                id="professionalExperience"
                {...formik.getFieldProps("professionalExperience")}
                className={
                  formik.touched.professionalExperience &&
                  formik.errors.professionalExperience
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.professionalExperience &&
                formik.errors.professionalExperience && (
                  <TextCaption
                    text={formik.errors.professionalExperience}
                    color={"error"}
                  />
                )}
            </div>
            <div className="form-group">
              <label className="label" htmlFor="interestDomains">
                Secteurs ou domaines d'intérêt spécifiques *
              </label>
              <textarea
                id="interestDomains"
                {...formik.getFieldProps("interestDomains")}
                className={
                  formik.touched.interestDomains &&
                  formik.errors.interestDomains
                    ? "input-error"
                    : ""
                }
              />
              {formik.touched.interestDomains &&
                formik.errors.interestDomains && (
                  <TextCaption
                    text={formik.errors.interestDomains}
                    color={"error"}
                  />
                )}
            </div>
          </div>
          {/* Motivation Section */}
          <Title text={"Motivation"} fontSize="title4" />
          <div className="form-group">
            <label className="label" htmlFor="franchiseMotivation">
              Pourquoi souhaitez-vous devenir franchisé GlobalEthix ? *
            </label>
            <textarea
              id="franchiseMotivation"
              {...formik.getFieldProps("franchiseMotivation")}
              className={
                formik.touched.franchiseMotivation &&
                formik.errors.franchiseMotivation
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.franchiseMotivation &&
              formik.errors.franchiseMotivation && (
                <TextCaption
                  text={formik.errors.franchiseMotivation}
                  color={"error"}
                />
              )}
          </div>
          <div className="form-group">
            <label className="label" htmlFor="contribution">
              Comment pensez-vous que votre expertise peut contribuer à notre
              réseau de franchises ? *
            </label>
            <textarea
              id="contribution"
              {...formik.getFieldProps("contribution")}
              className={
                formik.touched.contribution && formik.errors.contribution
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.contribution && formik.errors.contribution && (
              <TextCaption text={formik.errors.contribution} color={"error"} />
            )}
          </div>
          <div className="form-group">
            <label className="label" htmlFor="longTermObjectives">
              Quels sont vos objectifs professionnels à long terme dans le cadre
              de cette franchise ? *
            </label>
            <textarea
              id="longTermObjectives"
              {...formik.getFieldProps("longTermObjectives")}
              className={
                formik.touched.longTermObjectives &&
                formik.errors.longTermObjectives
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.longTermObjectives &&
              formik.errors.longTermObjectives && (
                <TextCaption
                  text={formik.errors.longTermObjectives}
                  color={"error"}
                />
              )}
          </div>

          <Title text={"Disponibilité"} fontSize="title4" />
          <div className="form-group">
            <label className="label" htmlFor="developmentLocation">
              Où envisagez-vous de développer votre franchise GlobalEthix
              (pays/ville) ? *
            </label>
            <textarea
              id="developmentLocation"
              {...formik.getFieldProps("developmentLocation")}
              className={
                formik.touched.developmentLocation &&
                formik.errors.developmentLocation
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.developmentLocation &&
              formik.errors.developmentLocation && (
                <TextCaption
                  text={formik.errors.developmentLocation}
                  color={"error"}
                />
              )}
          </div>
          <div className="form-group">
            <label className="label" htmlFor="availability">
              Quand seriez-vous disponible pour discuter davantage de votre
              candidature ? *
            </label>
            <textarea
              id="availability"
              {...formik.getFieldProps("availability")}
              className={
                formik.touched.availability && formik.errors.availability
                  ? "input-error"
                  : ""
              }
            />
            {formik.touched.availability && formik.errors.availability && (
              <TextCaption text={formik.errors.availability} color={"error"} />
            )}
          </div>
          <Title text={"Informations supplémentaires"} fontSize="title4" />
          <div className="form-group">
            <label className="label" htmlFor="additionalInfo">
              Informations supplémentaires
            </label>
            <textarea
              id="additionalInfo"
              {...formik.getFieldProps("additionalInfo")}
            />
          </div>
          <div className="form-group expertise-checkbox">
            <label className="label">
              <input type="checkbox" {...formik.getFieldProps("acceptTerms")} />
              J'accepte les{" "}
              <a href="#" target="_blank" rel="noopener noreferrer">
                Termes
              </a>
            </label>
            {formik.touched.acceptTerms && formik.errors.acceptTerms && (
              <TextCaption
                text={formik.errors.acceptTerms}
                color={"error"}
                className="flex justify-center"
              />
            )}
          </div>

          <div className="gap-0.25 flex justify-center w-half m-auto items-center duration-slow1 outline text-text-primary-inverse px-1.5 py-1 font-arial rounded-0.5 whitespace-nowrap flex-nowrap fill-text-primary-inverse bg-surface-brand hover:bg-surface-brand-hover active:bg-surface-brand-pressed outline-surface-brand hover:outline-surface-brand-hover active:outline-surface-brand-pressed outline-bold">
            <button
              className="submit-expertise text-body font-bold w-full"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Soumettre
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
