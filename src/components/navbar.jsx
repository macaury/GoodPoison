import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

import { VscMenu } from "react-icons/vsc";

import "./sass/style.scss";
import "./sass/mobile.scss";

function navbar() {
  return (
    <>
      <Navbar id="Navbar" bg="--secondary-color" expand="lg">
        <Container>
          <Navbar.Brand>
            <img
              className="logo"
              src="https://raw.githubusercontent.com/macaury/GoodPoison/675cfffbb580af3eb6f9a2e43bef76f31eb76f1a/src/assets/navbar/logo.svg"
              alt="GoodPoison"
            />
          </Navbar.Brand>

          <Nav>
            <Nav.Link to="#Home">Home</Nav.Link>
            <Nav.Link to="#Pest_control"> Pest Control</Nav.Link>
            <Nav.Link to="OurTeam"> Prevent and Protect</Nav.Link>
            <Nav.Link > Expert Training</Nav.Link>
          </Nav>
          <div className="menu_clas">
            <Button className="btn_main">Contact Us</Button>
            <Button className=" menu">
              <VscMenu></VscMenu>
            </Button>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
