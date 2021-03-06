import React from "react";
import colors from "../../utils/colors";
import "../../utils/styles/pages.css";
import { GithubFilled, LinkedinFilled, MailFilled } from "@ant-design/icons";

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
              href="https://linkedin.com/in/abidemi-animashaun-3561b120b"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinFilled
                style={{ paddingRight: "5px", fontSize: "28px" }}
                title="Linkedin"
              />
            </a>
          </h4>
          <a
            href="https://linkedin.com/in/abidemi-animashaun-3561b120b"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ fontWeight: "bold", color: colors.black }}>linkedin</p>
          </a>
        </div>

        <div style={styles.card}>
          <h4>
            <a href="mailto:hello@abidemi.dev">
              <MailFilled
                style={{
                  paddingRight: "5px",
                  fontSize: "28px",
                  color: colors.black,
                }}
                title="Mail"
              />
            </a>
          </h4>
          <span>
            <a
              href="mailto:hello@abidemi.dev"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontWeight: "bold", color: colors.black }}
            >
              hello@abidemi.dev
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
              <GithubFilled
                style={{
                  paddingRight: "5px",
                  fontSize: "28px",
                  color: colors.black,
                }}
                title="Github"
              />
            </a>
          </h4>
          <a
            href="https://github.com/animashaun87"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p style={{ fontWeight: "bold", color: colors.black }}>Github</p>
          </a>
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
