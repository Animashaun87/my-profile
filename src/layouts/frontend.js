import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import Header from "../components/header";
import Footer from "../components/footer";

const Frontend = (props) => {
  const [path, setPath] = useState("/");

  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <>
      <Header path={path} />
      {props.children}
      <Footer />
    </>
  );
};

export default Frontend;
