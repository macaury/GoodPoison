import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";


function Garden() {
  return (
    <>
      <Container>
        <Row>
          <Col className="garden_pest_svg">
            <img src="" alt="" />
          </Col>
          <Col className="garden_txt">
            <h5>RESULTS FOCUSED, CUSTOMER CENTERED</h5>
            <h1>We’ve been here from the beginning</h1>
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
