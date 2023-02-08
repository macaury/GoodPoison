import React from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

function navbar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
            <h1>Pest clean</h1>
          </Navbar.Brand>

          <Nav>
            <Nav.Link> Home</Nav.Link>
            <Nav.Link> Pest Control</Nav.Link>
            <Nav.Link> Prevent and Protect</Nav.Link>
            <Nav.Link> Expert Training</Nav.Link>
          </Nav>
          <Nav>
            <Button>Contact Us</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default navbar;
