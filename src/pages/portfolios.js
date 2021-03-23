import React, { useEffect } from "react";
import PageBanner from "../components/pages-banner";
import Expertise from "../components/portfolios/expertise";
import Portfolio from "../components/portfolios/portfolio";
import "../utils/styles/pages.css";
import { ScrollToTop } from "../utils/back-top";

function Portfolios() {
  useEffect(() => {
    document.title = "Portfolio";
  });
  return (
    <>
      <PageBanner title={"My Portfolio"} />
      <Expertise portBg={"about-area"} wrapper={"wrapper"} />
      <Portfolio />
      <ScrollToTop />
    </>
  );
}

export default Portfolios;
