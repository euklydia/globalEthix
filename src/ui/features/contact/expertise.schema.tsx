import * as Yup from "yup";

// Regex Patterns
const phoneRegex = /^\+?[0-9]{8,15}$/; // Allows international numbers with + and a minimum of 8 digits
const nameRegex = /^[a-zA-ZÀ-ÿ\-'\s]+$/; // Supports names with accents, hyphens, and apostrophes
const addressRegex = /^[a-zA-Z0-9À-ÿ,\.\-'\s]+$/; // Alphanumeric with accents, punctuation, and spaces
const countryRegex = /^[a-zA-ZÀ-ÿ\s]+$/; // Country names with accents and spaces
const expertiseRegex = /^.{20,}$/; // Minimum 20 characters for expertise descriptions

export const expertiseFormValidationSchema = Yup.object({
    lastName: Yup.string()
        .matches(nameRegex, "Nom invalide, utilisez uniquement des lettres")
        .required("Nom est obligatoire"),
    firstName: Yup.string()
        .matches(nameRegex, "Prénom invalide, utilisez uniquement des lettres")
        .required("Prénom est obligatoire"),
    email: Yup.string()
        .email("Adresse e-mail invalide")
        .required("Adresse e-mail est obligatoire"),
    phone: Yup.string()
        .matches(phoneRegex, "Numéro de téléphone invalide, utilisez un format international")
        .required("Numéro de téléphone est obligatoire"),
    address: Yup.string()
        .matches(addressRegex, "Adresse invalide, utilisez uniquement des lettres et des chiffres")
        .required("Adresse est obligatoire"),
    country: Yup.string()
        .matches(countryRegex, "Nom de pays invalide")
        .required("Pays est obligatoire"),
    expertise: Yup.string()
        .matches(expertiseRegex, "La description de votre expertise doit contenir au moins 20 caractères")
        .required("Description de votre expertise est obligatoire"),
    professionalExperience: Yup.string()
        .min(20, "L'expérience professionnelle doit contenir au moins 20 caractères")
        .required("Expérience professionnelle pertinente est obligatoire"),
    interestDomains: Yup.string()
        .min(20, "Les secteurs ou domaines d'intérêt doivent contenir au moins 20 caractères")
        .required("Secteurs ou domaines d'intérêt spécifiques sont obligatoires"),
    franchiseMotivation: Yup.string()
        .min(20, "La motivation doit contenir au moins 20 caractères")
        .required("Pourquoi souhaitez-vous devenir franchisé est obligatoire"),
    contribution: Yup.string()
        .min(20, "Votre réponse doit contenir au moins 20 caractères")
        .required("Comment pensez-vous contribuer est obligatoire"),
    longTermObjectives: Yup.string()
        .min(20, "Les objectifs professionnels doivent contenir au moins 20 caractères")
        .required("Vos objectifs professionnels à long terme sont obligatoires"),
    developmentLocation: Yup.string()
        .min(10, "Le lieu de développement doit contenir au moins 10 caractères")
        .required("Lieu de développement est obligatoire"),
    availability: Yup.string()
        .min(10, "La disponibilité doit contenir au moins 10 caractères")
        .required("Disponibilité est obligatoire"),
    additionalInfo: Yup.string()
        .max(500, "Les informations supplémentaires ne doivent pas dépasser 500 caractères"),
    acceptTerms: Yup.bool().oneOf([true], "Vous devez accepter les termes"),
});
