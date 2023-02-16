import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

import "./sass/style.scss";
import "./sass/mobile.scss";

function weedcontrol() {
  return (
    <>
      <Container id="weedControl">
        <Row>
          <Col xl="7" className="control_txt">
            <h2>Over a century of experience solving pest problems.</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque morbi donec lacus ut amet, scelerisque ornare. In
              nisl sapien amet, eget semper in. Tempus porta justo vulputate
              sagittis vulputate accumsan vitae, neque, ornare.
              <br />
            </span>
            <Button className="btn_main"> Learn More</Button>
          </Col>
          <Col xl="5" className="bug_icon">
            <img
              src="https://raw.githubusercontent.com/macaury/GoodPoison/5f9d33199b7ccaaf22ca36c2e750a4e241bbdbe2/src/assets/weedControl/bug_control_icon.svg"
              alt="pest "
            />
          </Col>
        </Row>
        <Col xl="12" className="control_icon">
          <img
            src="https://raw.githubusercontent.com/macaury/GoodPoison/5f9d33199b7ccaaf22ca36c2e750a4e241bbdbe2/src/assets/weedControl/Weed_control_2_.svg"
            alt="Weed Control"
          />
        </Col>
      </Container>
    </>
  );
}

export default weedcontrol;
