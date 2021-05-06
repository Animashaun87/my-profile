import React from "react";
import { Row, Col, Layout } from "antd";
import { Link } from "react-router-dom";
import colors from "../../utils/colors";
import "../../utils/styles/button.css";
import Anchor from "./anchor";

const { Footer } = Layout;
function ProfileFooter() {
  return (
    <div className="sm-footer">
      <Layout>
        <Footer style={styles.footerWrapper}>
          <Row style={{ marginTop: "20px" }}>
            <Col>
              <div>
                <h2 style={styles.wantsToKnow} className="footer-text">
                  Let's discuss for a project
                </h2>
              </div>
            </Col>
          </Row>
          <Row
            type="flex"
            justify="space-between"
            style={{ margin: "30px 0px" }}
            className="footer-btn"
          >
            <Col>
              <div>
                <Link to="/contact" className="btn white-button sm-left">
                  let's connect
                </Link>
              </div>
            </Col>
            <Col>
              <div className="footer-btn ">
                {/* <span className="btn white-button sm-left">download CV</span> */}
              </div>
            </Col>
          </Row>
          <Anchor />
        </Footer>
      </Layout>
    </div>
  );
}

const styles = {
  footerWrapper: {
    backgroundColor: colors.lightBrown,
    height: "auto",
  },
  wantsToKnow: {
    color: colors.white,
    fontSize: "60px",
    fontWeight: 400,
    lineHeight: 1.3,
    margin: "0px",
  },
};

export default ProfileFooter;
