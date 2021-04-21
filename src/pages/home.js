import React from "react";
import Banner from "../components/banner";
import AboutMe from "../components/about/about-me";
import Experience from "../components/experience";
import Expertise from "../components/portfolios/expertise";
import HomePortfolio from "../components/selectPortfolio";
import "../utils/styles/pages.css";
import { ScrollToTop } from "../utils/back-top";
import useDocumentTitle from "../utils/useDocumentTitle";

function Home() {
  const title = "Home";
  useDocumentTitle(title);

  const info =
    "Hi! I'm Abidemi Animashaun. I'm a skilled web developer with more than 1-year building functional programs. Tools i used are: Javascript, Php, Reactjs, Nodejs, Laravel. Love to work with a team, learn and improve.";

  return (
    <>
      <Banner />
      <AboutMe about={info} />
      <Experience />
      <Expertise bgColor={"home-bg"} wrapper={"wrapper"} />
      <HomePortfolio />
      <ScrollToTop />
    </>
  );
}

export default Home;
