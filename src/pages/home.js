import React, { useEffect } from "react";
import Banner from "../components/banner";
import AboutMe from "../components/about/about-me";
import Experience from "../components/experience";
import Expertise from "../components/portfolios/expertise";
import Portfolio from "../components/portfolios/portfolio";
import "../utils/styles/pages.css";
import { ScrollToTop } from "../utils/back-top";

function Home() {
  useEffect(() => {
    document.title = "Home";
  });

  const info =
    "Hi, I'm Abidemi Animashaun. I'm a fullstack web developer proficients in HTML, CSS, JavaScript, Reactjs, php, Laravel, and Nodejs. Adept at code writing, performing testing protocols and learning new technologies. Love to work with a team where my work makes a difference.";

  return (
    <>
      <Banner />
      <AboutMe about={info} />
      <Experience />
      <Expertise bgColor={"home-bg"} />
      <Portfolio title={"Selected Porfolios"} />
      <ScrollToTop />
    </>
  );
}

export default Home;
