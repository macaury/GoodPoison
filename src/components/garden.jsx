import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


import "./garden.scss"


function Garden() {
  return (
    <>
      <Container id="garden">
        <Row>
          <Col className="garden_pest_svg">
            <img src="https://raw.githubusercontent.com/macaury/GoodPoison/c75ce186018a7430e49f637e592a3135eb0ad247/src/assets/garden/Garden_pests_2_.svg" alt="" />
          </Col>
          <Col className="garden_txt">
            <h3>RESULTS FOCUSED, CUSTOMER CENTERED</h3>
            <h2>We’ve been here from the beginning</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque morbi donec lacus ut amet, scelerisque ornare. In
              nisl sapien amet, eget semper in. Tempus porta consectetur massa
              porttitor dictum massa. Elementum nisi aliquam, sed id. Quis est
              justo vulputate sagittis vulputate accumsan vitae, neque, ornare.<br/>
            </span>
            <Button className="btn_main">Learn More</Button>
          
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Garden;
