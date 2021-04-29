import React from "react";
import colors from "../../utils/colors";
import "../../utils/styles/pages.css";
import {
  GithubOutlined,
  LinkedinFilled,
  MailOutlined,
} from "@ant-design/icons";

function ContactMe() {
  return (
    <>
      <div className="contact">
        <h2 style={styles.contactMe}>Contact Me</h2>
        <h3>Have a project you'll like me to work on?</h3>
      </div>

      <div className="info">
        <div style={styles.card}>
          <h4>
            <a
              href="https://linkedin.com/in/qudus-animashaun-3561b120b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled
                style={{ paddingRight: "5px", fontSize: "28px" }}
              />
            </a>
          </h4>
          <p style={{ fontWeight: "bold" }}>linkedin</p>
        </div>

        <div style={styles.card}>
          <h4>
            <MailOutlined style={{ paddingRight: "5px", fontSize: "28px" }} />
          </h4>
          <span>
            <a
              href="mailto:animashaunbidemi07@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: colors.black }}
            >
              animashaunbidemi07@gmail.com
            </a>
          </span>
        </div>

        <div style={styles.card}>
          <h4>
            <a
              href="https://github.com/animashaun87"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined
                style={{
                  paddingRight: "5px",
                  fontSize: "28px",
                  color: colors.black,
                }}
              />
            </a>
          </h4>
          <p style={{ fontWeight: "bold" }}>Github</p>
        </div>
      </div>
    </>
  );
}

const styles = {
  contactMe: {
    color: colors.lighterBrown,
    marginBottom: "0",
  },
  card: {
    backgroundColor: colors.white,
    height: "240px",
    border: "1px solid grey",
    boxShadow: "2px 2px 2px 2px rgba(208, 208, 208, 0.3)",
    borderRadius: "5px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  phone: {
    fontFamily: "sans-serif",
    color: colors.lightBrown,
    fontSize: "30px",
    fontWeight: 400,
    lineHeight: 1.4,
    padding: "20px 40px",
  },
};
export default ContactMe;
