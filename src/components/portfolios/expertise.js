import React from "react";
import PropTypes from "prop-types";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import "../../utils/styles/pages.css";

function Expertise(props) {
  const { bgColor, portBg, wrapper } = props;
  return (
    <>
      <Layout className={`${bgColor} || ${portBg}`}>
        <Row
          type="flex"
          justify="center"
          style={{ margin: "78px 0px 45px 0px" }}
          className="expertise-title"
        >
          <Col>
            <h2 style={styles.expertise}>My Expertise</h2>
          </Col>
        </Row>
        <Row type="flex" justify="space-around" className="expertise-top">
          <Col md={8} sm={12} xs={24}>
            <div
              style={styles.expertiseCard}
              className={`expertise ${wrapper}`}
            >
              <h5 style={styles.header}>ReactJs</h5>
              <p style={styles.subHeader}>
                Reactjs developer with exemplary experience
              </p>
            </div>
          </Col>
          <Col md={8} sm={12} xs={24}>
            <div
              style={styles.expertiseCard}
              className={`expertise ${wrapper}`}
            >
              <h5 style={styles.header}>NodeJs</h5>
              <p style={styles.subHeader}>
                Nodejs developer with exemplary experience
              </p>
            </div>
          </Col>
          <Col md={8} sm={24} xs={24}>
            <div
              style={styles.expertiseCard}
              className={`expertise ${wrapper}`}
            >
              <h5 style={styles.header}>Laravel</h5>
              <p style={styles.subHeader}>
                Laravel developer with exemplary expereience
              </p>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}

Expertise.propTypes = {
  bgColor: PropTypes.string,
  portBg: PropTypes.string,
  wrapper: PropTypes.string,
};

const styles = {
  expertise: {
    display: "block",
    fontSize: "80px",
    fontWeight: 400,
    lineHeight: 1.4,
    color: colors.lightBrown,
  },
  expertiseCard: {
    backgroundColor: colors.white,
    height: "240px",
    margin: "0px 24px 32px 24px",
    transition: "0.4s",
  },
  header: {
    fontFamily: "sans-serif",
    color: colors.lightBrown,
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: 1.4,
    padding: "20px 40px",
  },
  subHeader: {
    fontSize: "18px",
    fontWeight: 400,
    padding: "0px 40px",
  },
};

export default Expertise;
