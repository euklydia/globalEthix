"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

import { DataContent, frContent, enContent } from "../../data";

interface DataContextType {
  locale: string;
  changeLanguage: (newLocale: string) => void;
  content: DataContent;
}

const LanguageContext = createContext<DataContextType | undefined>(undefined);

interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider = ({ children }: DataProviderProps) => {
  const [locale, setLocale] = useState<string>("fr");
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    const storedLocale = localStorage.getItem("locale");

    if (storedLocale) {
      setLocale(storedLocale);
    }
  }, []);

  const changeLanguage = (newLocale: string) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  const getContent = () => {
    return locale === "fr" ? frContent : enContent;
  };

  const content = getContent();

  if (!isClient) {
    return null;
  }

  return (
    <LanguageContext.Provider value={{ locale, changeLanguage, content }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): DataContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a DataProvider");
  }
  return context;
};
