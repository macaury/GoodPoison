import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";


import "./navbar.scss";

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

          <Nav >
            <Nav.Link className="home">
              {" "}
              <span>Home</span>{" "}
            </Nav.Link>
            <Nav.Link> Pest Control</Nav.Link>
            <Nav.Link> Prevent and Protect</Nav.Link>
            <Nav.Link> Expert Training</Nav.Link>
          </Nav>
          <Button className="btn_main">Contact Us</Button>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
