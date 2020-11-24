import React, { useState, useEffect } from "react";
import { Row, Col, Icon, Button } from "antd";
import { ContactsOutlined, ProfileOutlined } from "@ant-design/icons";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import { Link } from "@reach/router";
import "../utils/styles/pages.css";
import ScrollIndicator from "../utils/scroll-progess";
import PropTypes from "prop-types";
import ChangeText from "./animationText";

function Header(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollCheck = document.scrollingElement.scrollTop;
    if (scrollCheck > 170) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={scrolled ? "navbar" : "nav"}>
        <ScrollIndicator />
        <Row
          type="flex"
          align="middle"
          style={{
            padding: "0px 45px 0px 45px",
            height: "100px",
            boxShadow: 20,
          }}
        >
          <Col lg={8} style={{ marginBottom: "15px" }}>
            <h2>
              <Link to="/" style={styles.headerLogo}>
                ABIDEMI
              </Link>
            </h2>
          </Col>
          <Col
            lg={13}
            className="hide-mobile hide-ipad"
            style={{ marginBottom: "16px" }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ paddingRight: "50px" }}>
                <Link
                  to="/"
                  className={`header ${props.path === "/" ? "active" : ""}`}
                >
                  Home
                </Link>
              </div>
              <div style={{ paddingRight: 50 }}>
                <Link
                  to="/about"
                  className={`header ${
                    props.path === "/about" ? "active" : ""
                  }`}
                >
                  About
                </Link>
              </div>
              <div style={{ paddingRight: 50 }}>
                <Link
                  to="/portfolio"
                  className={`header ${
                    props.path === "/portfolio" ? "active" : ""
                  }`}
                >
                  portfolio
                </Link>
              </div>
              <div>
                <Link
                  to="/contact"
                  className={`header ${
                    props.path === "/contact" ? "active" : ""
                  }`}
                >
                  Contact
                </Link>
              </div>
            </div>
          </Col>
          <Col
            lg={3}
            className="hide-mobile hide-ipad"
            style={{ marginBottom: "15px" }}
          >
            <h4 style={styles.typicalText}>
              <ChangeText />
            </h4>
          </Col>

          <Col className="show-mobile right right-ipad right-mobile show-ipad smaller-phone">
            {!menuOpen ? (
              <Button type="link" onClick={() => setMenuOpen(!menuOpen)}>
                <Icon
                  type="menu"
                  style={{
                    color: colors.lightBrown,
                    fontSize: "28px",
                    fontWeight: 900,
                    transition: "all 5s ease-out",
                  }}
                />
              </Button>
            ) : (
              <Button type="link" onClick={() => setMenuOpen(!menuOpen)}>
                <Icon
                  type="close"
                  style={{ color: colors.lightBrown, fontSize: "24px" }}
                />
              </Button>
            )}
          </Col>
        </Row>

        {menuOpen && (
          <div
            className="show-mobile show-ipad"
            style={{
              width: "90%",
              // height: "220px",
              backgroundColor: colors.lightBrown,
              position: "absolute",
              zIndex: 999,
              top: "84px",
              marginRight: "10%",
            }}
          >
            <Link to="/">
              <div style={styles.mobileMenu}>
                <Icon type="home" style={styles.mobileMenuIcon} />
                Home
              </div>
            </Link>
            <Link to="/about">
              <div style={styles.mobileMenu}>
                <ProfileOutlined style={{ paddingRight: "10px" }} />
                About
              </div>
            </Link>
            <Link to="/portfolio">
              <div style={styles.mobileMenu}>
                <Icon type="" />
                Portfolio
              </div>
            </Link>
            <Link to="/contact">
              <div style={styles.mobileMenu}>
                <ContactsOutlined style={{ paddingRight: "10px" }} />
                Contact
              </div>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
};

const styles = {
  header: {
    color: colors.white,
    fontSize: "22px",
    fontWeight: "200",
    fontFamily: "serif",
  },
  headerLogo: {
    color: colors.lightBrown,
    fontWeight: "700",
  },
  letsTalk: {
    backgroundColor: colors.lightBrown,
    width: "100%",
    height: "50px",
  },
  mobileMenu: {
    padding: "10px 0",
    fontSize: "18px",
    paddingLeft: "20px",
    color: colors.lightYellow,
  },
  mobileMenuIcon: {
    paddingRight: "12px",
  },
  active: {
    borderBottom: "1px solid #670000",
    padding: "2px 2px 10px 2px",
  },
  typicalText: {
    fontSize: 16,
    fontWeight: "700",
    color: colors.lightBrown,
    textTransform: "uppercase",
  },
};

export default Header;
