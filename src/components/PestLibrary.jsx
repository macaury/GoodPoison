import React, { useState, useEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./PestLibrary.scss";

function PestLibrary() {
  const [data, setData] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    fetch("https://macaury.github.io/Green-Panther/dist/shoes.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <>
      <Container>
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
          <div className="carousel  " ref={carousel}>
            {data.map((item) => {
              const { id, name, order, image } = item;

              return (
                <Card key={id}>
                  <Card.Img
                    className="image"
                    variant="top"
                    src={image}
                    alt={name}
                  />

                  <Card.Body className="justify-content-start">
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>{order}</Card.Text>
                  </Card.Body>
                </Card>
              );
            })}
            ;
          </div>
        </Row>
      </Container>
    </>
  );
}

export default PestLibrary;
