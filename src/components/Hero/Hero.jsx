import React from "react";

// IMAGES
import GithubIcon from "../../assets/images/icons/github-i.svg";
import LinkedinIcon from "../../assets/images/icons/linkedin-i.svg";
import InstagramIcon from "../../assets/images/icons/instagram-i.svg";
import BehanceIcon from "../../assets/images/icons/behance-i.svg";
import MyPicture from "../../assets/images/hero-img-2.png";
import { useTranslation } from "react-i18next";

const Hero = () => {
  // Translation
  const { t } = useTranslation();

  return (
    <section className="s-hero">
      <div className="container">
        <span className="detail dt1">{"<FRONT-END />"}</span>
        <span className="detail dt2">{"<HTML />"}</span>
        <span className="detail dt3">CSS {"{}...}"}</span>

        <div className="text">
          <h2>
            {t("Olá, eu sou")} <span>{"{"}</span>
          </h2>
          <h1>{t("Francy Santos")}</h1>
          <p>
            <strong>{t("UI Designer")}</strong> {t("e") + " "}
            <strong>{t("Desenvolvedor Front-End") + " "}</strong>
            {t("com habilidades em") + " "}
            <strong>{t("HTML")}</strong>, <strong>{t("CSS") + " "}</strong>{" "}
            {t("e") + " "}
            <strong>{t("JavaScript") + ", "}</strong>
            {t(
              "experiente em criar interfaces de usuário atraentes e funcionais."
            )}
          </p>

          {/* Social Medias */}
          <ul>
            <li>
              <a href="https://github.com/fhorray" target="_blank">
                <img src={GithubIcon} alt="Github Icon" />
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/francysantos/"
                target="_blank"
              >
                <img src={LinkedinIcon} alt="Linekdin Icon" />
              </a>
            </li>

            <li>
              <a href="https://www.instagram.com/fhorray/" target="_blank">
                <img src={InstagramIcon} alt="Instagram Icon" />
              </a>
            </li>

            <li>
              <a href="https://www.behance.net/fhorray" target="_blank">
                <img src={BehanceIcon} alt="Behance Icon" />
              </a>
            </li>
          </ul>

          <h2>
            <span>{"}"}</span>
            <span className="interm">|</span>
          </h2>
        </div>
        <img className="hero-img" src={MyPicture} alt="Francy Santos" />
      </div>
    </section>
  );
};

export default Hero;
