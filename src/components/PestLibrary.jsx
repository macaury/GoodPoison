import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


import "./PestLibrary.scss";

function PestLibrary() {
  return (
    <>
      <Container >
        <Row id="Pest_Library">
          <div className="text-center">
            <h3>PEST LIBRARY</h3>
            <Row>
              <h1>
                We believe pest control begins with a deep scientific
                understanding.
              </h1>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default PestLibrary;
