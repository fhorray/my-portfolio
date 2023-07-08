import React from "react";

// CERTIFICATES
import Origamid from "../../assets/images/certificates/origamid-logo.svg";
import Ebac from "../../assets/images/certificates/ebac-logo.svg";
import Udemy from "../../assets/images/certificates/udemy-logo.svg";
import { useTranslation } from "react-i18next";

const Certificates = () => {
  const { t } = useTranslation();
  return (
    <section id="certificates" className="s-certificates">
      <div className="container">
        <span className="detail dt-certificates">{t("Certificados")}</span>

        <div className="schools">
          <h2>
            <span>const</span>
            {t("meusCertificados")} = <span>[</span>
          </h2>

          <ul>
            <li>
              <button className="origamid">
                <img src={Origamid} alt="Origamid Logo" />
              </button>
            </li>
            <li>
              <button className="ebac">
                <img src={Ebac} alt="Ebac Logo" />
              </button>
            </li>
            <li>
              <button className="udemy">
                <img src={Udemy} alt="Udemy Logo" />
              </button>
            </li>
          </ul>

          <h2>
            <span>];</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
