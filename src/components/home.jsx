import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function home() {
  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="box_home">
              <h1>Introducing the Best Pest Control Agency in New York</h1>
              <span>Get a personalized quote today.</span>
              <Button>Get a quote</Button>
            </div>
          </Col>
          <Col>
            <img
              src="https://raw.githubusercontent.com/macaury/GoodPoison/538d29719403095bc91ebd08283a7bce2c4eaf7e/src/assets/home/home.svg"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default home;
