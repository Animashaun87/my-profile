import React from "react";
import PageBanner from "../components/shared/pages-banner";
import Expertise from "../components/portfolios/expertise";
import Portfolio from "../components/portfolios/portfolio";
import "../utils/styles/pages.css";
import { ScrollToTop } from "../utils/back-top";
import useDocumentTitle from "../utils/useDocumentTitle";

function Portfolios() {
  const title = "Portfolio";
  useDocumentTitle(title);

  return (
    <>
      <PageBanner title={"My Portfolios"} />
      <Expertise portBg={"about-area"} wrapper={"wrapper"} />
      <Portfolio />
      <ScrollToTop />
    </>
  );
}

export default Portfolios;
