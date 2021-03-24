import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import colors from "../utils/colors";
import galleries from "../utils/data";
import Loader from "../utils/loader";

const HomePortfolio = () => {
  const [showGalleries, setShowGalleries] = useState([]);
  const [loading, setLoading] = useState(false);

  const filteredGallery = () =>
    galleries.filter(({ showOnHome }) => showOnHome === true);

  useEffect(() => {
    setShowGalleries(filteredGallery);
    setLoading(false);
  }, []);

  return (
    <>
      <div>
        <Row
          style={{ marginTop: "65px" }}
          type="flex"
          justify="center"
          className="portfolio"
        >
          <Col>
            <h2 style={styles.text}>Selected Portfolio</h2>
          </Col>
        </Row>

        <Row type="flex" justify="space-around">
          {loading ? (
            <Loader />
          ) : (
            showGalleries.map((gallery) => (
              <Col
                lg={10}
                md={10}
                sm={10}
                style={{ marginBottom: "20px" }}
                key={gallery.id}
              >
                <div className="view grow overlay">
                  <img
                    src={gallery.image}
                    alt="Porfolio"
                    className="portfolio-img"
                    height="476"
                    style={{ width: "100%" }}
                  />
                  <div>
                    <a
                      href={gallery.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mask">{gallery.name}</span>
                    </a>
                  </div>
                </div>
              </Col>
            ))
          )}
          {/*           
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
          </Col> */}
        </Row>
      </div>
    </>
  );
};

const styles = {
  text: {
    color: colors.lightBrown,
    fontSize: "80px",
    fontFamily: "sans-serif",
    fontWeight: 400,
  },
};

export default HomePortfolio;
