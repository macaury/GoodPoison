import React from "react";

import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function home() {
  return (
    <>
      <Container>
        <div className="box_home">
          <h1>Introducing the Best Pest Control Agency in New York</h1>
          <span>Get a personalized quote today.</span>
            <Button>Get a quote</Button>
        </div>
      </Container>
    </>
  );
}

export default home;
