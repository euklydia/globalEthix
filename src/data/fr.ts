import { footer } from "./footer";
import { navLinks } from "./header";
import { HomeData } from "./home";
import { supportedLangue } from "./langueSwitcher";

export const frContent = {
  navLinks: {
    ...navLinks
  },
  supportedLangue:{...supportedLangue},
  home: {
    ...HomeData
  },
  about: {
    title: "À propos de nous",
    description: "Nous sommes une entreprise axée sur l'innovation.",
  },
  footer: {
   ...footer
  },
};
