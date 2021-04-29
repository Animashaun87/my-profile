import React from "react";
import { Row, Col } from "antd";
import colors from "../utils/colors";
import {
  GithubFilled,
  LinkedinFilled,
  MediumSquareFilled,
} from "@ant-design/icons";

function Anchor() {
  return (
    <>
      <div>
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <div
              style={{ display: "flex", marginTop: 30, marginBottom: 30 }}
              className="footer-anchor"
            >
              <div style={styles.footerSocial}>
                <a
                  href="http://github.com/animashaun87"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubFilled
                    style={styles.footerSocialChild}
                    title="Github"
                  />
                </a>
              </div>
              <div style={styles.footerSocial}>
                <a
                  href="http://medium.com/@abidemi-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MediumSquareFilled
                    style={styles.footerSocialChild}
                    title="Medium"
                  />
                </a>
              </div>
              <div style={styles.footerSocial}>
                <a
                  href="https://linkedin.com/in/abidemi-animashaun-3561b120b"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedinFilled
                    style={styles.footerSocialChild}
                    title="Linkedin"
                  />
                </a>
              </div>
            </div>
          </Col>
          <Col>
            <div className="footer-copyright">
              <p style={styles.footerCopy}>
                Copyright &copy; Abidemi Animashaun {new Date().getFullYear()}
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

const styles = {
  footerSocial: {
    width: "50px",
    height: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "8px",
    background: colors.lighterBrown,
  },
  footerSocialChild: {
    color: colors.lightYellow,
    fontSize: "19px",
    textAlign: "center",
    lineHeight: "50px",
    // width: "50px",
    // height: "50px",
  },
  footerCopy: {
    color: colors.lightYellow,
    fontWeight: 500,
    fontSize: "16px",
    lineHeight: 2,
    marginBottom: 0,
  },
};

export default Anchor;
