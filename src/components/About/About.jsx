import React from "react";
import { useTranslation } from "react-i18next";

// IMAGES

const About = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="s-about">
      <div className="container">
        <div className="text">
          <h2>
            {t("sobre-mim")} <span>{"{"}</span>
          </h2>

          <p>
            {t("Eu me chamo")} <span>{t("Francyelton")}</span>{" "}
            <i>{t("(Francy rsrs)")}</i>,{" "}
            {t("um desenvolvedor web freelancer com experiência em")}{" "}
            <span>{t("UI Design")}</span> {t("e")}{" "}
            <span>{t("desenvolvimento Front-End")}</span>. <br />
            <br />
            {t(
              "Adoro criar interfaces responsivas e escrever códigos limpos e eficientes. Além disso, sou apaixonado por tecnologia, games e música."
            )}
            <br />
            <br />
            {t("Entre em contato comigo pelo")}{" "}
            <a href="https://www.linkedin.com/in/francysantos/"> LinkedIn</a>{" "}
            {t("ou por")}{" "}
            <a href="mailto:francy.horray@gmail.com"> {t("e-mail")}</a>{" "}
            {t("para saber mais sobre meu trabalho.")}
          </p>

          <h2>
            <span>{"}"}</span>
          </h2>
        </div>
        <span className="detail dt-sobre">{t("Sobre")}</span>
      </div>
    </section>
  );
};

export default About;
