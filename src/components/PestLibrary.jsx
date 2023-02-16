import React, { useState, useEffect, useRef } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

import "./sass/style.scss";
import "./sass/mobile.scss";

function PestLibrary() {
  const [data, setData] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    fetch("https://macaury.github.io/GoodPoison/public/pest_library.json")
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
          <div className="carousel " ref={carousel}>
            {data.map((item) => {
              const { id, name, order, image } = item;

              return (
                <Col className="cardpest" key={id}>
                  <Card>
                    <Card.Img className="image" src={image} alt={name} />
                  </Card>
                  <div className="info text-center">
                    <h5>{name}</h5>
                    <span>{order}</span>
                  </div>
                </Col>
              );
            })}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default PestLibrary;
