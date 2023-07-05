import React from "react";

// IMAGES
import Logo from "../../assets/images/fsantos-logo.svg";
import DownloadIcon from "../../assets/images/download-i.svg";
import Language from "../../assets/images/globe-i.svg";
import Mode from "../../assets/images/sun-i.svg";
import MenuMobile from "../../assets/images/menu-mobile.svg";

// LANGUAGE
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  return (
    <header>
      <div className="container">
        <a href="https://fsantos.vercel.app/">
          <img id="logo" src={Logo} />
        </a>

        <nav>
          <ul>
            <li>
              <a href="#about">{t("Sobre")}</a>
            </li>
            <li>
              <a href="#projects">{t("Projetos")}</a>
            </li>
            <li>
              <a href="#certificates">{t("Certificados")}</a>
            </li>
            <li>
              <a href="#experience">{t("Experiência")}</a>
            </li>
          </ul>
          <div className="header-btns">
            <button className="cv-download" type="button">
              <a
                href={
                  "../../public/archives/(PT-BR) Francyelton Santos Nobre - CV.pdf"
                }
                download="Francy CV"
              >
                {t("Baixar CV")}
              </a>
              <img src={DownloadIcon} alt="Download Icon" />
            </button>

            <button id="language-btn">
              <img src={Language} alt="language" />
            </button>
            <button id="light-mode">
              <img id="img-mode" src={Mode} alt="Dark Button" />
            </button>

            <img
              src={MenuMobile}
              alt="Menu Mobile Icon"
              className="menu-mobile"
            />
          </div>
        </nav>

        {/* LANGUAGE DROPDOWN */}
        {/* <div className="lang-dropdown">
          <div className="languages">
            <button className="active-lang" type="button">
              Portugês (Brazil)
            </button>
            <button type="button" disabled>
              English
            </button>
          </div>
        </div> */}
      </div>
    </header>
  );
};

export default Header;
