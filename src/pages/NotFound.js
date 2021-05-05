import React from "react";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>404</h2>
        <h3 style={styles.subTitle}>Oops! This is awkward.</h3>
        <p style={styles.subTitle}>
          {" "}
          You're looking for something that doesn't actually exist..
        </p>
        <Link to="/">
          <button className="page-btn page-button">
            Try going to homepage
          </button>
        </Link>
      </div>
    </>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: colors.white,
    height: "80vh",
  },
  title: {
    fontSize: "80px",
  },
  subTitle: {
    fontSize: "20px",
  },
};

export default NotFound;
