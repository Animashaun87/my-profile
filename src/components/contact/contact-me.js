import React from "react";
import { Row, Col, Layout, Carousel } from "antd";
import colors from "../../utils/colors";

const { Content } = Layout;
function ContactMe() {
  return (
    <>
      <Layout style={{ backgroundColor: colors.white, height: 500 }}>
        <Content>
          <Carousel autoplay effect="fade">
            <Row type="flex" justify="center" style={{ marginTop: "34px" }}>
              <Col>
                <h1
                  style={{
                    color: colors.lightBrown,
                    fontSize: "36px",
                    marginBottom: "0",
                  }}
                >
                  Contact Me
                </h1>
                <h2>Have a project you'll like me to work on?</h2>
              </Col>
              <Col>
                <h1>Send me a mail at animashaunbidemi07@gmail.com</h1>
              </Col>
            </Row>
          </Carousel>
          <Row type="flex" justify="center" align="middle">
            {/* <Col>
              <h2>Send me a mail at animashaunbidemi07@gmail.com</h2>
            </Col>
            <Col>
              <div>Contact Number</div>
            </Col>
            <Col>
              <div>Email Address</div>
            </Col>
            <Col>
              <div>Website</div>
            </Col>
            <Col>
              <div>Address</div>
            </Col> */}
          </Row>
        </Content>
      </Layout>
    </>
  );
}

export default ContactMe;
