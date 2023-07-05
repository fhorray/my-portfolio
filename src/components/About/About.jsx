import React from "react";

// IMAGES

const About = () => {
  return (
    <section id="about" className="s-about">
      <div className="container">
        <div className="text">
          <h2>
            sobre-mim <span>{"{"}</span>
          </h2>

          <p>
            Eu me chamo <span>Francyelton</span> <i>(Francy rsrs)</i>, um
            desenvolvedor web freelancer com experiência em{" "}
            <span>UI Design</span> e <span>desenvolvimento Front-End</span>.{" "}
            <br />
            <br />
            Adoro criar interfaces responsivas e escrever códigos limpos e
            eficientes. Além disso, sou apaixonado por tecnologia, games e
            música.
            <br />
            <br />
            Entre em contato comigo pelo{" "}
            <a href="https://www.linkedin.com/in/francysantos/"> LinkedIn</a> ou
            por <a href="mailto:francy.horray@gmail.com">e-mail</a> para saber
            mais sobre meu trabalho.
          </p>

          <h2>
            <span>{"}"}</span>
          </h2>
        </div>
        <span className="detail dt-sobre">Sobre</span>
      </div>
    </section>
  );
};

export default About;
