import React from "react";

// ICONS
import HTMLIcon from "../../assets/images/icons/html5-i.svg";
import CSS3Icon from "../../assets/images/icons/css3-i.svg";
import SassIcon from "../../assets/images/icons/sass-i.svg";
import ReactIcon from "../../assets/images/icons/react-i.svg";
import JsIcon from "../../assets/images/icons/js-i.svg";
import WordpressIcon from "../../assets/images/icons/worpdress-i.svg";
import FigmaIcon from "../../assets/images/icons/figma-i.svg";
import XDIcon from "../../assets/images/icons/xd-i.svg";
import PhotoshopIcon from "../../assets/images/icons/photoshop-i.svg";
import IllustratorIcon from "../../assets/images/icons/illustrator-i.svg";

const Skills = () => {
  return (
    <section id="skills" className="s-skills">
      <div className="container">
        <h2>Tecnologias</h2>
        <ul>
          <li>
            <img className="baladAnimation" src={ReactIcon} alt="React Icon" />
          </li>
          <li>
            <img className="baladAnimation" src={SassIcon} alt="Sass icon" />
          </li>
          <li>
            <img
              className="baladAnimation"
              src={JsIcon}
              alt="JavaScript icon"
            />
          </li>
          <li>
            <img
              className="baladAnimation"
              src={WordpressIcon}
              alt="Wordpress icon"
            />
          </li>
          <li>
            <img className="baladAnimation" src={FigmaIcon} alt="Figma icon" />
          </li>
          <li>
            <img
              className="baladAnimation"
              src={PhotoshopIcon}
              alt="Photoshop icon"
            />
          </li>
          <li>
            <img
              className="baladAnimation"
              src={IllustratorIcon}
              alt="Illustrator icon"
            />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
