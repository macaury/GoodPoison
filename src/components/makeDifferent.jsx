import React from "react";

import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./makeDifferent.scss";

function makeDifferent() {
  return (
    <>
      <Container id="makeDifferent">
        <Row>
          <Col xl="7" className="different_txt">
            <h2>We’re not Happy, Until You’re Happy</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque morbi donec lacus ut amet, scelerisque ornare. In
              nisl sapien amet, eget semper in. Tempus porta justo vulputate
              sagittis vulputate accumsan vitae, neque, ornare. <br />
            </span>
            <a>
              
              Explore what makes Us different
              <img 
                src="https://raw.githubusercontent.com/macaury/GoodPoison/2b2b81e7ced4f473fe150c4c92f7ccb80cad8390/src/assets/weedControl/linkSet.svg"
                alt=""
              />
            </a>
          </Col>
          <Col xl="5" className="different_col">
            <Row>
              <Col>
                <h2>120+</h2>
                <span>Years in Business</span>
              </Col>
              <Col>
                <h2>400+</h2>
                <span>Locations Coverd</span>
              </Col>
            </Row>
            <Row>
              <Col>
                <h2>160+</h2>
                <span>Hours of Training</span>
              </Col>
              <Col>
                <h2>80+</h2>
                <span>Support Staff</span>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default makeDifferent;
