import React from "react";
import ContactMe from "../components/contact/contact-me";
import PageBanner from "../components/shared/pages-banner";
import { ScrollToTop } from "../utils/back-top";
import useDocumentTitle from "../utils/useDocumentTitle";

function Contact() {
  const title = "Contact";
  useDocumentTitle(title);
  return (
    <>
      <PageBanner title={"Contact"} />
      <ContactMe />
      <ScrollToTop />
    </>
  );
}

export default Contact;
