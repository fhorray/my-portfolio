import React from "react";

// IMAGES
import Logo from "../../assets/images/fsantos-logo.svg";
import DownloadIcon from "../../assets/images/download-i.svg";
import Language from "../../assets/images/globe-i.svg";
import Mode from "../../assets/images/sun-i.svg";
import MenuMobile from "../../assets/images/menu-mobile.svg";

// ARCHIVES
import portuguesCV from "../../../public/archives/(PT-BR) Francyelton Santos Nobre - CV.pdf";

const Header = () => {
  return (
    <header>
      <div class="container">
        <a href="https://fsantos.vercel.app/">
          <img id="logo" src={Logo} />
        </a>

        <nav>
          <ul>
            <li>
              <a href="#about">Sobre</a>
            </li>
            <li>
              <a href="#projects">Projetos</a>
            </li>
            <li>
              <a href="#certificates">Certificados</a>
            </li>
            <li>
              <a href="#experience">Experiência</a>
            </li>
          </ul>
          <div class="header-btns">
            <button class="cv-download" type="button">
              <a href={portuguesCV} download="Francy CV">
                Baixar CV
              </a>
              <img src={DownloadIcon} alt="Download Icon" />
            </button>

            <button id="language-btn">
              <img src={Language} alt="language" />
            </button>
            <button id="light-mode">
              <img id="img-mode" src={Mode} alt="Dark Button" />
            </button>

            <img src={MenuMobile} alt="Menu Mobile Icon" class="menu-mobile" />
          </div>
        </nav>

        {/* LANGUAGE DROPDOWN */}
        {/* <div class="lang-dropdown">
          <div class="languages">
            <button class="active-lang" type="button">
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
