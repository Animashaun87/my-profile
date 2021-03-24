import React, { useState, useEffect } from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import "../../utils/styles/pages.css";
import galleries from "../../utils/data";
import Loader from "../../utils/loader";

function Portfolio() {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchGalleries() {
      try {
        const response = galleries;
        setPortfolios(response);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        return null;
      }
    }
    fetchGalleries();
  }, []);

  return (
    <>
      <Layout style={{ backgroundColor: colors.lightYellow }}>
        <div>
          <Row
            style={{ marginTop: "65px" }}
            type="flex"
            justify="center"
            className="portfolio"
          >
            <Col>
              <h2 style={styles.text}>My Portfolios</h2>
            </Col>
          </Row>

          <Row type="flex" justify="space-around">
            {loading ? (
              <Loader />
            ) : (
              portfolios.map((gallery) => (
                <Col
                  lg={10}
                  md={10}
                  sm={10}
                  key={gallery.id}
                  style={{ marginBottom: "20px" }}
                >
                  <div className="view grow overlay">
                    <img
                      src={gallery.image}
                      alt="portfolio"
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
          </Row>
        </div>
      </Layout>
    </>
  );
}

const styles = {
  text: {
    color: colors.lightBrown,
    fontSize: "80px",
    fontFamily: "sans-serif",
    fontWeight: 400,
  },
};

export default Portfolio;
