import React from "react";
import PropTypes from "prop-types";
import { Layout } from "antd";
import colors from "../utils/colors";
import ChangeText from "./animationText";

function PageBanner({ title }) {
  return (
    <>
      <Layout>
        <div style={styles.contactDiv} className="page-banner">
          <h2 style={styles.contactH2} className="hide-text">
            {title}
          </h2>
          <h3 style={styles.ChangeText} className="hide-text-big-screen ">
            <ChangeText />
          </h3>
        </div>
      </Layout>
    </>
  );
}

PageBanner.propTypes = {
  title: PropTypes.string,
};

const styles = {
  contactDiv: {
    backgroundColor: colors.lightYellow,
    height: "200px",
    paddingTop: "50px",
  },
  contactH2: {
    color: colors.lightBrown,
    fontSize: "30px",
    fontWeight: "400px",
    paddingLeft: "18px",
  },
  ChangeText: {
    color: colors.lightBrown,
    fontSize: "30px",
    paddingLeft: "18px",
  },
};

export default PageBanner;
