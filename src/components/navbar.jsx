import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function navbar() {
  return (
    <>
      <Navbar id="Navbar" bg="--secondary-color" expand="lg">
        <Container>
          <Navbar.Brand>
            <img className="logo" src="https://raw.githubusercontent.com/macaury/GoodPoison/5cb071ff8366f316d6fcb401592ce3fc78296dd6/src/assets/navbar/logo.svg" alt="GoodPoison" />
          </Navbar.Brand>

  
          <Nav>
            <Nav.Link className="home"> <span>Home</span> </Nav.Link>
            <Nav.Link> Pest Control</Nav.Link>
            <Nav.Link> Prevent and Protect</Nav.Link>
            <Nav.Link> Expert Training</Nav.Link>
          </Nav>
          <Nav>
            <Button className="contact" >Contact Us</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
