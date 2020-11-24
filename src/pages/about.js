import React, { useEffect } from "react";
import PageBanner from "../components/pages-banner";
import AboutMe from "../components/about/about-me";
import Skills from "../components/about/skills";
import Quote from "../components/about/quote";
import { ScrollToTop } from "../utils/back-top";

function About() {
  useEffect(() => {
    document.title = "About";
  });

  const info =
    "Hi, I'm Abidemi Animashaun. I'm a fullstack web developer proficients in HTML, CSS, JavaScript, Reactjs, php, Laravel, and Nodejs. Adept at code writing, performing testing protocols and learning new technologies. Love to work with a team where my work makes a difference.";
  return (
    <>
      <PageBanner title={"About"} />
      <AboutMe about={info} />
      <Skills />
      <Quote />
      <ScrollToTop />
    </>
  );
}

export default About;
