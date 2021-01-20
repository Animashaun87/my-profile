import React from "react";
import colors from "../../utils/colors";
import "../../utils/styles/pages.css";

function ContactMe() {
  return (
    <>
      <div className="contact">
        <h1 style={{ color: colors.lighterBrown }}>Contact Me</h1>
        <h3>Have a project you'll like me to work on?</h3>
        {/* <h4>Send me a mail at animashaunbidemi07@gmail.com</h4> */}
      </div>
      <div className="info">
        <div>
          <h5>Phone</h5>
          <p>
            <i>08165519459</i>
          </p>
        </div>
        <div>
          <h5>Email</h5>
          <i>animashaunbidemi07@gmail.com</i>
        </div>
        <div>
          <h5>Address</h5>
          <p>
            <i>Hajj camp Gwagwalada Abuja</i>
          </p>
        </div>
      </div>
    </>
  );
}

const styles = {
  card: {
    backgroundColor: colors.white,
    height: "240px",
    margin: "0px 24px 32px 24px",
    transition: "0.4s",
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
