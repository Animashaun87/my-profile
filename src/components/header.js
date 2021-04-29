import React, { useState, useEffect } from "react";
import { Row, Col, Button } from "antd";
import {
  CloseSquareFilled,
  ContactsFilled,
  HomeFilled,
  MenuUnfoldOutlined,
  ProfileFilled,
  ProjectFilled,
} from "@ant-design/icons";
import colors from "../utils/colors";
import "../utils/styles/button.css";
import { Link } from "react-router-dom";
import "../utils/styles/pages.css";
import ScrollIndicator from "../utils/scroll-progess";
import PropTypes from "prop-types";
import ChangeText from "./animationText";

function Header({ menuOpen, toggleMenu, toggleLogo, path }) {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const scrollCheck = document.scrollingElement.scrollTop;
    setScrolled(scrollCheck > 170 ? true : false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div style={{ height: "82px" }}>
        <div className={`${scrolled ? "fixed-nav" : "main"}`}>
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
              <h2 className="logo" onClick={toggleLogo}>
                <Link to="/" style={styles.headerLogo}>
                  ABIDEMI
                </Link>
              </h2>
            </Col>
            <Col
              lg={13}
              className="hide-mobile hide-ipad"
              style={{ marginBottom: "22px" }}
            >
              <div style={{ display: "flex" }}>
                <div style={{ paddingRight: "50px" }}>
                  <Link
                    to="/"
                    className={`header ${path === "/" ? "active" : ""}`}
                  >
                    Home
                  </Link>
                </div>
                <div style={{ paddingRight: "50px" }}>
                  <Link
                    to="/about"
                    className={`header ${path === "/about" ? "active" : ""}`}
                  >
                    About
                  </Link>
                </div>
                <div style={{ paddingRight: "50px" }}>
                  <Link
                    to="/portfolio"
                    className={`header ${
                      path === "/portfolio" ? "active" : ""
                    }`}
                  >
                    portfolio
                  </Link>
                </div>
                <div>
                  <Link
                    to="/contact"
                    className={`header ${path === "/contact" ? "active" : ""}`}
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
              <h4 style={styles.typicalText} className="change-text">
                <ChangeText />
              </h4>
            </Col>

            <Col className="show-mobile right right-ipad right-mobile show-ipad smaller-phone">
              {!menuOpen ? (
                <Button
                  type="link"
                  onClick={toggleMenu}
                  style={{ marginTop: "-5px" }}
                >
                  <MenuUnfoldOutlined
                    style={{
                      color: colors.lightBrown,
                      fontSize: "32px",
                      fontWeight: 900,
                      transition: "all 5s ease-out",
                    }}
                  />
                </Button>
              ) : (
                <Button
                  type="link"
                  onClick={toggleMenu}
                  style={{ marginTop: "-5px" }}
                >
                  <CloseSquareFilled
                    style={{ color: colors.lightBrown, fontSize: "36px" }}
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
                backgroundColor: colors.lightBrown,
                position: "absolute",
                zIndex: 999,
                top: "84px",
                borderRadius: "0 0 25px 0",
                marginRight: "10%",
                transition: "all 0.4s ease-in",
              }}
            >
              <Link to="/">
                <div
                  style={styles.mobileMenu}
                  onClick={toggleMenu}
                  className="mobile-menu-dropdown-item"
                >
                  <HomeFilled style={{ paddingRight: "10px" }} />
                  <span>Home</span>
                </div>
              </Link>
              <Link to="/about">
                <div
                  style={styles.mobileMenu}
                  onClick={toggleMenu}
                  className="mobile-menu-dropdown-item"
                >
                  <ProfileFilled style={{ paddingRight: "10px" }} />
                  <span>About</span>
                </div>
              </Link>
              <Link to="/portfolio">
                <div
                  style={styles.mobileMenu}
                  onClick={toggleMenu}
                  className="mobile-menu-dropdown-item"
                >
                  <ProjectFilled style={{ paddingRight: "10px" }} />
                  <span>Portfolio</span>
                </div>
              </Link>
              <Link to="/contact">
                <div
                  style={styles.mobileMenu}
                  onClick={toggleMenu}
                  className="mobile-menu-dropdown-item"
                >
                  <ContactsFilled style={{ paddingRight: "10px" }} />
                  <span>Contact</span>
                </div>
              </Link>
            </div>
          )}
        </div>
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
    paddingLeft: "6px",
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
  active: {
    borderBottom: "1px solid #670000",
    padding: "2px 2px 10px 2px",
  },
  typicalText: {
    fontSize: "16px",
    fontWeight: "700",
    color: colors.lightBrown,
    textTransform: "uppercase",
  },
};

export default Header;
