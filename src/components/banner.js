import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../utils/colors";
import "../utils/styles/button.css";

function Banner() {
  return (
    <>
      <Layout style={styles.container} className="min-height">
        <Row type="flex" justify="center">
          <Col xl={24} lg={20} md={20} sm={20}>
            <div style={{ textAlign: "right" }} className="top">
              <h1 style={styles.title}>Abidemi.</h1>
              <p style={styles.paragraph}>Software Engineer</p>
              <p style={styles.paragraph}>Fullstack Developer</p>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

const styles = {
  container: {
    backgroundColor: colors.lightYellow,
    minHeight: "500px",
  },
  title: {
    color: colors.lighterBrown,
    fontSize: "188px",
    fontFamily: "sans-serif",
    fontWeight: 300,
    textAlign: "center",
    marginBottom: 0,
    textTransform: "uppercase",
  },
  paragraph: {
    color: colors.lighterBrown,
    fontSize: "30px",
    fontFamily: "sans-serif",
    fontWeight: 300,
    marginBottom: 0,
    paddingRight: "23%",
  },
};

export default Banner;
