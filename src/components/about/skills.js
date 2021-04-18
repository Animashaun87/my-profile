import React from "react";
import { Row, Col, Layout } from "antd";
import colors from "../../utils/colors";
import Laravel from "../../utils/images/laravel.jpg";
import ReactJs from "../../utils/images/react.png";
import Nodejs from "../../utils/images/nodejs.png";
import Php from "../../utils/images/php7.png";
import Css3 from "../../utils/images/css3-logo.png";
import Javascript from "../../utils/images/javascript.png";

function Skill() {
  return (
    <>
      <Layout style={styles.skillBg}>
        <Row type="flex" justify="center" style={{ margin: "18px 0 18px 0" }}>
          <Col>
            <div>
              <h1 style={styles.titleCol}>Skills</h1>
            </div>
          </Col>
        </Row>

        <div className="skill-container">
          <div className="image-background">
            <img
              src={Javascript}
              alt="Laravel"
              height="300"
              className="image-xs"
            />
          </div>
          <div className="image-background">
            <img
              src={ReactJs}
              alt="Laravel"
              height="300"
              className="image-xs"
            />
          </div>
          <div className="image-background">
            <img src={Nodejs} alt="Laravel" height="300" className="image-xs" />
          </div>

          <div className="image-background">
            <img
              src={Laravel}
              alt="Laravel"
              height="300"
              className="image-xs"
            />
          </div>
          <div className="image-background">
            <img src={Php} alt="Laravel" height="300" className="image-xs" />
          </div>
          <div className="image-background">
            <img src={Css3} alt="Laravel" height="300" className="image-xs" />
          </div>
        </div>
      </Layout>
    </>
  );
}

const styles = {
  skillBg: {
    backgroundColor: colors.lightYellow,
    height: "auto",
  },
  titleCol: {
    color: colors.lightBrown,
    fontSize: "40px",
    fontWeight: "500",
    marginBottom: "0px",
  },
};

export default Skill;
