import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../utils/colors";

function Experience() {
  return (
    <>
      <Layout style={styles.layout}>
        <div style={styles.container} className="container">
          <Row>
            <Col style={{ marginTop: "16px" }}>
              <h1 style={styles.title} className="exp-title">
                Experience
              </h1>
            </Col>
          </Row>

          <Row type="flex" style={{ flexDirection: "column" }} justify="center">
            <Col style={{ marginBottom: "16px" }}>
              <div style={styles.experience}>
                <h2 style={styles.text} className="title-exp-h2">
                  Full Stack Developer
                </h2>
                <span>
                  <a
                    href="https://brytahub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.subText2}
                    className="exp-link"
                  >
                    Brytahub, Abuja
                  </a>
                </span>
              </div>
              <div style={{ marginTop: "-18px" }}>
                <p style={styles.subText1} className="exp-text">
                  [REACTJS, NODEJS, LARAVEL]
                </p>
                <p style={styles.subText1} className="exp-date">
                  Nov 2020 - Till date
                </p>
              </div>
            </Col>

            <Col style={{ marginBottom: "16px" }}>
              <div style={styles.experience}>
                <h2 style={styles.text} className="title-exp-h2">
                  Instructor
                </h2>
                <span>
                  <a
                    href="https://brytahub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.subText2}
                    className="exp-link"
                  >
                    Brytahub, Abuja
                  </a>
                </span>
              </div>
              <div style={{ marginTop: "-18px" }}>
                <p style={styles.subText1} className="exp-text">
                  [REACTJS, LARAVEL]
                </p>
                <p style={styles.subText1} className="exp-date">
                  Feb 2020 - Oct 2020
                </p>
              </div>
            </Col>

            <Col style={{ marginBottom: "18px" }}>
              <div style={styles.experience}>
                <h2 style={styles.text} className="title-exp-h2">
                  Frontend Developer
                </h2>
                <span>
                  <a
                    href="https://cubiclab.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.subText2}
                    className="exp-link"
                  >
                    Cubiclab, Abuja
                  </a>
                </span>
              </div>
              <div style={{ marginTop: "-18px" }}>
                <p style={styles.subText1} className="exp-text">
                  [HTML, CSS, PHP, JQUERY]
                </p>
                <p style={styles.subText1} className="exp-date">
                  Nov 2019 - Feb 2020
                </p>
              </div>
            </Col>

            <Col style={{ marginBottom: "" }}>
              <div style={styles.experience}>
                <h2 style={styles.text} className="title-exp-h2">
                  Trainee
                </h2>
                <span>
                  <a
                    href="https://brytahub.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.subText2}
                    className="exp-link"
                  >
                    Brytahub, Abuja
                  </a>
                </span>
              </div>

              <div style={{ marginTop: "-18px" }}>
                <p style={styles.subText1} className="exp-text">
                  [HTML, CSS, PHP, LARAVEL]
                </p>
                <p style={styles.subText1} className="exp-date">
                  Nov 2018 - Oct 2019
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
}

const styles = {
  layout: {
    backgroundColor: colors.lightBrown,
    height: "auto",
  },
  container: {
    padding: "0px 45px 0px 45px",
  },
  title: {
    color: colors.white,
    fontSize: "80px",
    fontWeight: 400,
  },
  experience: {
    display: "flex",
    justifyContent: "space-between",
  },
  text: {
    color: colors.lightYellow,
    fontSize: 30,
    fontWeight: 300,
    fontFamily: "sans-serif",
  },
  subText1: {
    color: colors.white,
    fontSize: "16px",
    fontWeight: 500,
  },
  subText2: {
    color: colors.lightYellow,
    fontSize: "16px",
    fontWeight: 500,
    cursor: "pointer",
  },
};
export default Experience;
