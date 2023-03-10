import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./sass/style.scss";
import "./sass/mobile.scss";

function home() {
  return (
    <>
      <Container>
        <Row id="Home">
          <Col className="col_box">
            <div className="box_home">
              <h1>Introducing the Best Pest Control Agency in New York</h1>
              <span>
                Get a personalized quote today. <br/>
              </span>
              <Button className="btn_main">Get a quote</Button>
            </div>
          </Col>
          <Col className="svg_col">
            <img
              className="svg_home"
              src="https://raw.githubusercontent.com/macaury/GoodPoison/b621de64894ef2a6225033c1d4ef1532ebbe7d01/src/assets/home/home.svg"
              alt=""
            />
          </Col>
        </Row>
      </Container>

      <div className="line_home">
      <Container>

          <Row>
            <Col>
              <div className="rectangle_project">
                <img
                  src="https://raw.githubusercontent.com/macaury/GoodPoison/5c151faa34b8640be60efc45f40e1b517e930565/src/assets/home/project.svg"
                  alt="Project Done"
                />
                <h2>3000+</h2>
                <span>Project Done</span>
              </div>
              <div className="rectangle_client">
                <img
                  src="https://raw.githubusercontent.com/macaury/GoodPoison/5c151faa34b8640be60efc45f40e1b517e930565/src/assets/home/happy.svg"
                  alt="Happy Client"
                />
                <h2>120+</h2>
                <span>Happy Client</span>
              </div>
            </Col>
          </Row>
      </Container>
      </div>

    </>
  );
}

export default home;
