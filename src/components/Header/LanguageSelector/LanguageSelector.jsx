import React from "react";
import { useTranslation } from "react-i18next";
import Language from "../../../assets/images/icons/globe-i.svg";

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const currentLanguage = i18n.language;

  const handleChangeLanguage = () => {
    const newLanguage = currentLanguage === "pt" ? "en" : "pt";
    i18n.changeLanguage(newLanguage);
  };

  return (
    <div className="language-selection" onClick={handleChangeLanguage}>
      <img src={Language} alt="Language Icon" />
      <span>{currentLanguage.toUpperCase()}</span>
    </div>
  );
};

export default LanguageSelector;
