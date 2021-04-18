import React, { useEffect, useState } from "react";
import { Row, Col, Button } from "antd";
import colors from "../utils/colors";
import galleries from "../utils/data";
import Loader from "../utils/loader";
import { Link } from "@reach/router";
import "../utils/styles/pages.css";
import AOS from "aos";

const HomePortfolio = () => {
  const [showGalleries, setShowGalleries] = useState([]);
  const [loading, setLoading] = useState(false);

  const filteredGallery = () =>
    galleries.filter(({ showOnHome }) => showOnHome === true);

  useEffect(() => {
    setShowGalleries(filteredGallery);
    setLoading(false);
    AOS.init({ duration: 5000 });
  }, []);

  return (
    <>
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
              <div
                className="view grow overlay"
                data-aos="fade-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <img
                  src={gallery.image}
                  alt="Porfolio"
                  className="portfolio-img"
                  height="476"
                  style={{ width: "100%", objectFit: "cover" }}
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
      </Row>
      <Row
        type="flex"
        justify="center"
        style={{ marginBottom: "20px" }}
        className="row-button"
      >
        <Col>
          <Link to="/portfolio">
            <Button className="button">More Portfolios</Button>
          </Link>
        </Col>
      </Row>
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
