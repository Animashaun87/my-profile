import React from "react";
import colors from "../../utils/colors";
import "../../utils/styles/pages.css";
import { Icon } from "antd";

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
            <Icon
              type="phone"
              style={{ paddingRight: "5px", transform: "rotate(120deg)" }}
            />
            Phone Number
          </h4>
          <p style={{ fontWeight: "bold" }}>08165519459</p>
        </div>

        <div style={styles.card}>
          <h4>
            <Icon type="mail" style={{ paddingRight: "5px" }} />
            Email
          </h4>
          <span style={{ fontWeight: "bold" }}>
            animashaunbidemi07@gmail.com
          </span>
        </div>

        <div style={styles.card}>
          <h4>
            <Icon type="map" style={{ paddingRight: "5px" }} />
            Address
          </h4>
          <p style={{ fontWeight: "bold" }} className="contact-text">
            No 20, Passo road after Uniabuja Teaching Hospital, Gwagwalada,
            Abuja.
          </p>
        </div>
      </div>
    </>
  );
}

const styles = {
  contactMe: {
    color: colors.lighterBrown,
    marginBottom: "0px",
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
