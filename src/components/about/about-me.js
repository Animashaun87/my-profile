import React, { useEffect } from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import Bidemi from "../../utils/images/Bidemi.jpg";
import "../../utils/styles/pages.css";
import AOS from "aos";

function AboutMe({ about }) {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  return (
    <>
      <Layout className="about-area" style={{ padding: "10px 0 0 0" }}>
        <Row
          className="about-top"
          data-aos="fade-up"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1500"
        >
          <Col lg={12} sm={24} xs={24}>
            <div style={{ padding: "50px 0px 0px 20px" }}>
              <h2 style={styles.about} className="about-title">
                About
              </h2>
              <p className="about-text about-paragraph">{about}</p>
            </div>
          </Col>
          <Col lg={12} sm={24} xs={24}>
            <img
              src={Bidemi}
              alt="Bidemi"
              style={styles.img}
              height="600"
              className="about-img"
            />
          </Col>
        </Row>
      </Layout>
    </>
  );
}

const styles = {
  about: {
    fontSize: 80,
    color: colors.lightBrown,
    textTransform: "capitalize",
    fontWeight: 400,
    marginBottom: "22px",
  },
  aboutText: {
    fontSize: "16px",
    fontWeight: 300,
    paddingRight: "50px",
    marginBottom: "35px",
    fontFamily: "sans-serif",
  },
  title: {
    fontSize: 15,
    color: colors.darker,
  },
  img: {
    width: "100%",
    paddingRight: "25px",
    objectFit: "contain",
  },
};
export default AboutMe;
