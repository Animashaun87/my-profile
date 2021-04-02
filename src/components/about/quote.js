import React from "react";
import { Carousel, Layout } from "antd";
import colors from "../../utils/colors";

const Quote = () => {
  return (
    <Layout style={styles.container}>
      <div style={{ padding: 30 }}>
        {" "}
        <Carousel autoplay effect="fade" dots={false}>
          <div>
            <h3 style={styles.quoteName}>Steve Job</h3>
            <div style={styles.text} className="quote-text">
              Everyone should know how to program a computer, because it teaches
              you how to think.
            </div>
          </div>
          <div>
            <h3 style={styles.quoteName}>Brytahub</h3>
            <div style={styles.text} className="quote-text">
              Your future is created by what you do today, not tomorrow
            </div>
          </div>
          <div style={styles.quoteName}>
            <h3 style={styles.quoteName}>Ani Bid</h3>
            <div style={styles.text} className="quote-text">
              Every successful story has a painful beginning
            </div>
          </div>
        </Carousel>
      </div>
    </Layout>
  );
};

const styles = {
  container: {
    backgroundColor: colors.white,
  },
  text: {
    fontSize: "18px",
    fontStyle: "oblique",
    fontWeight: "500",
    color: colors.lighterBrown,
    display: "flex",
    justifyContent: "center",
  },
  quoteName: {
    display: "flex",
    justifyContent: "center",
    color: colors.lighterBrown,
    fontSize: "24px",
    fontWeight: "bold",
  },
};

export default Quote;
