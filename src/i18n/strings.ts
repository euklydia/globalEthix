import { fr } from "./fr";

export const defaultLanguage = 'fr';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const i18n: Record<string, any>={
  fr
}

export const strings = i18n[defaultLanguage];