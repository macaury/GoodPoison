import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";

function weedcontrol() {
  return (
    <>
      <Container id="weedControl">
        <Row>
          <Col className="control_txt">
            <h2>Over a century of experience solving pest problems.</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque morbi donec lacus ut amet, scelerisque ornare. In
              nisl sapien amet, eget semper in. Tempus porta justo vulputate
              sagittis vulputate accumsan vitae, neque, ornare.<br/>
            </span>
            <Button className="btn_main"> Learn More</Button>
          </Col>
          <Col className="bug_icon"></Col>
        </Row>
        <Col className="Control_icon"></Col>
      </Container>
    </>
  );
}

export default weedcontrol;
