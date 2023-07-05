import React from "react";

// ICONS
import HTMLIcon from "../../assets/images/icons/html5-i.svg";
import CSS3Icon from "../../assets/images/icons/css3-i.svg";
import JsIcon from "../../assets/images/icons/js-i.svg";
import WordpressIcon from "../../assets/images/icons/worpdress-i.svg";
import FigmaIcon from "../../assets/images/icons/figma-i.svg";
import XDIcon from "../../assets/images/icons/xd-i.svg";
import PhotoshopIcon from "../../assets/images/icons/photoshop-i.svg";
import IllustratorIcon from "../../assets/images/icons/photoshop-i.svg";
import ArrowDown from "../../assets/images/icons/arrow-down-i.svg";

// PROJECTS IMAGES
import Project1 from "../../assets/images/projects/psicorafa-project.png";

const Projects = () => {
  return (
    <section id="projects" className="s-projects">
      <div className="container">
        <span className="detail dt-projects">Projetos</span>

        <div className="projects">
          <h2>
            <span>const</span> meusProjetos = <span>{"{"}</span>
          </h2>

          <div className="items-container">
            {/* Project 1 */}
            <div className="item">
              <div className="image">
                <img src={Project1} alt="Psico Rafa" />
              </div>

              <div className="overlay-content">
                <h3>Psicóloga Rafaela Barreto</h3>
                <ul>
                  <li>
                    <img src={HTMLIcon} alt="HTML5 Icon" />
                  </li>
                  <li>
                    <img src={CSS3Icon} alt="CSS3 Icon" />
                  </li>
                  <li>
                    <img src={JsIcon} alt="JavaScript Icon" />
                  </li>
                  <li>
                    <img src={FigmaIcon} alt="Figma Icon" />
                  </li>
                  <li>
                    <img src={PhotoshopIcon} alt="Photoshop Icon" />
                  </li>
                </ul>

                <a
                  className="see-project-btn"
                  target="_blank"
                  href="https://psicorafa.vercel.app/"
                >
                  Ver projeto
                </a>
              </div>
            </div>
          </div>

          <h2>
            <span>{"};"}</span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Projects;
