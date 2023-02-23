import React, { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { VscChromeClose } from "react-icons/vsc";
import { VscMenu } from "react-icons/vsc";

import "./sass/style.scss";
import "./sass/mobile.scss";

function New() {
  const [isMobile, setMobile] = useState(false);

  return (
    <>
      <Navbar id="Navbar" sticky="top" bg="--secondary-color" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              className="logo"
              src="https://raw.githubusercontent.com/macaury/GoodPoison/675cfffbb580af3eb6f9a2e43bef76f31eb76f1a/src/assets/navbar/logo.svg"
              alt="GoodPoison"
            />
          </Navbar.Brand>
          <Nav className={isMobile ? "mobile_menu" : "web_menu "}>
            <Nav.Link to="#Home">Home</Nav.Link>
            <Nav.Link to="#Pest_control"> Pest Control</Nav.Link>
            <Nav.Link to="OurTeam"> Prevent and Protect</Nav.Link>
            <Nav.Link> Expert Training</Nav.Link>
          </Nav>
          <div className="menu_clas">
            <Button className="btn_main">Contact Us</Button>
            <Button className="menu" onClick={() => setMobile(!isMobile)}>
              {isMobile ? <VscChromeClose /> : <VscMenu />}
            </Button>
          </div>
        </Container>
      </Navbar>
      /** HOME */
      <Container>
        <Row id="Home">
          <Col className="col_box">
            <div className="box_home">
              <h1>Introducing the Best Pest Control Agency in New York</h1>
              <span>
                Get a personalized quote today. <br />
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

export default New;
