import React, { useState, useRef, useEffect } from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Card from "react-bootstrap/Card";

import "./OurTeam.scss";

function OurTeam() {
  const [data, setData] = useState([]);
  const carousel = useRef();

  useEffect(() => {
    fetch("http://localhost:5173/public/OurTeam.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <>
      <Container id="OurTeam">
        <Row>
          <div className="ourteam_txt">
            <h3>Our Services</h3>
            <h1>What our team do for you ...</h1>
          </div>
        </Row>
        <Row>
          <div className="services" ref={carousel}>
            {data.map((item) => {
              const { id, title, image } = item;

              return (
                <Col  className="service_card" key={id}>
                  <Card.Img className="image" src={image} alt={title} />
                  <div className="info">
                    <h3>{title}</h3>
                    <span>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Pellentesque morbi donec lacus ut amet, scelerisque
                      ornare.
                      <br />
                    </span>
                    <a className="learn_more" href="#">
                      Learn More
                      <img
                        src="https://raw.githubusercontent.com/macaury/GoodPoison/2b2b81e7ced4f473fe150c4c92f7ccb80cad8390/src/assets/weedControl/linkSet.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </Col>
              );
            })}
          </div>
        </Row>

        <Row>
          <div className="FindUs">
            <Col>
              <h2>Find Your Local Branch</h2>
              <span>
                Our experts in your local pests because they live and work where
                you do.
                <br />
              </span>
              <span className="call">
                Call 1111-222-3333 or search based on your ZIP code. <br />
              </span>
              <input type="number" placeholder=" Enter your zip code "></input>
            </Col>
            <Col className="box_svg">
              <img
                src="https://raw.githubusercontent.com/macaury/GoodPoison/01bfebe319495d2a9046ca2650c991a42fd41b0a/src/assets/FindUs/findUs.svg"
                alt=""
              />
            </Col>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default OurTeam;
