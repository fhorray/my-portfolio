import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Certificates from "../components/Certificates/Certificates";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Certificates />
      <Footer />
    </>
  );
};

export default Home;
