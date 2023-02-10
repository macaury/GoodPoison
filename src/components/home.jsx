import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function home() {
  return (
    <>
      <Container>
        <Row id="Home">
          <Col>
            <div className="box_home">
              <h1>Introducing the Best Pest Control Agency in New York</h1>
              <span>Get a personalized quote today. <br/> </span>
              <Button className="btn_main">Get a quote</Button>
            </div>
          </Col>
          <Col>
            <img
              className="svg_home"
              src="https://raw.githubusercontent.com/macaury/GoodPoison/b621de64894ef2a6225033c1d4ef1532ebbe7d01/src/assets/home/home.svg"
              alt=""
            />
          </Col>
          <div className="line_home">
            <Row>
              <Col xl="3">
                <div className="rectangle_project">
                  <h2>3000+</h2>
                  <span>Project Done </span>
                </div>
              </Col>
              <Col>
                <div className="rectangle_client">
                  <h2>120+</h2>
                  <span>Happy Client</span>
                </div>
              </Col>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default home;
