import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import Gallery1 from "../../utils/images/gallery1.png";
import Gallery2 from "../../utils/images/gallery2.png";
import Gallery3 from "../../utils/images/gallery3.png";
import Gallery4 from "../../utils/images/gallery4.png";
import "../../utils/styles/pages.css";
import PropTypes from "prop-types";

function Portfolio(props) {
  return (
    <>
      <Layout style={{ backgroundColor: colors.lightYellow }}>
        <div style={{ marginBottom: "55px" }}>
          <Row
            style={{ marginTop: "65px" }}
            type="flex"
            justify="center"
            className="portfolio"
          >
            <Col>
              <h2 style={styles.text}>{props.title}</h2>
            </Col>
          </Row>

          <Row type="flex" justify="space-around">
            <Col lg={10} md={10} sm={10}>
              <div className="view grow overlay">
                <img
                  src={Gallery1}
                  alt="Porfolio"
                  className="portfolio-img"
                  height="476"
                  style={{ width: "100%" }}
                />
                <div>
                  <a
                    href="#"
                    rel="noopener no-referrer"
                    // target="_blank"
                    className="mask"
                  >
                    mask
                  </a>
                </div>
              </div>
            </Col>
            <Col lg={10} md={10} sm={10}>
              <div className="view grow overlay">
                <img
                  src={Gallery2}
                  alt="Porfolio"
                  className="portfolio-img"
                  height="476"
                  style={{ width: "100%" }}
                />
                <div className="mask">mask</div>
              </div>
            </Col>
            <Col
              lg={10}
              md={10}
              sm={10}
              style={{ marginTop: "20px" }}
              className="portfolio-top"
            >
              <div className="view grow overlay">
                <img
                  src={Gallery3}
                  alt="Portfolio"
                  className="portfolio-img"
                  height="476"
                  style={{ width: "100%" }}
                />
                <div className="mask">mask</div>
              </div>
            </Col>
            <Col
              lg={10}
              md={10}
              sm={10}
              style={{ marginTop: "20px" }}
              className="portfolio-top "
            >
              <div className="view grow overlay">
                <img
                  src={Gallery4}
                  alt="Portfolio"
                  className="portfolio-img"
                  height="476"
                  style={{ width: "100%" }}
                />
                <div className="mask">mask</div>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </>
  );
}

Portfolio.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = {
  text: {
    color: colors.lightBrown,
    fontSize: "80px",
    fontFamily: "sans-serif",
    fontWeight: 400,
  },
};

export default Portfolio;
