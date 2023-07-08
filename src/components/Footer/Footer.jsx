import React from "react";

// IMAGES
import GithubIcon from "../../assets/images/icons/github-i.svg";
import LinkedinIcon from "../../assets/images/icons/linkedin-i.svg";
import InstagramIcon from "../../assets/images/icons/instagram-i.svg";
import BehanceIcon from "../../assets/images/icons/behance-i.svg";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer>
      <div className="container">
        <h2>{t("Eai, vamos trabalhar juntos?")}</h2>
        <span className="city">{t("São Paulo, SP, Brasil")}</span>
        <a className="email" href="mailto:francy.horray@gmail.com">
          contato@fsantos.tech
        </a>
        <a
          className="phone"
          href="https://api.whatsapp.com/send?phone=5511989358196"
        >
          (+55) 11 98935-8196
        </a>

        <ul className="socials">
          <li>
            <a href="https://github.com/fhorray" target="_blank">
              <img src={GithubIcon} alt="Github Icon" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/francysantos/" target="_blank">
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

        <p className="copy">
          &copy; {t("2023 Todos os direitos reservados por")}
          {""}
          <a href="https://www.linkedin.com/in/francysantos/"> Francy Santos</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
