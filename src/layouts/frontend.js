import React, { useEffect, useState } from "react";
import { useLocation } from "@reach/router";
import Header from "../components/header";
import Footer from "../components/footer";

const Frontend = (props) => {
  const [path, setPath] = useState("/");
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const location = useLocation();
  useEffect(() => {
    setPath(location.pathname);
  }, [location]);

  return (
    <>
      <Header
        path={path}
        toggleMenu={toggleMenu}
        menuOpen={menuOpen}
        onClick={() => setMenuOpen(false)}
      />
      <div style={styles.inner} onClick={() => setMenuOpen(false)}>
        {props.children}
      </div>
      <div onClick={() => setMenuOpen(false)}>
        <Footer />
      </div>
    </>
  );
};

const styles = {
  inner: {
    maxWidth: "100%",
    margin: "0 auto",
  },
};

export default Frontend;
