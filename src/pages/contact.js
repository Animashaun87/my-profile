import React, { useEffect } from "react";
import ContactMe from "../components/contact/contact-me";
import PageBanner from "../components/pages-banner";
import { ScrollToTop } from "../utils/back-top";

function Contact() {
  useEffect(() => {
    document.title = "Contact";
  });
  return (
    <>
      <PageBanner title={"Contact"} />
      <ContactMe />
      <ScrollToTop />
    </>
  );
}

export default Contact;
