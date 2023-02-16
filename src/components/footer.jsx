import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import "./sass/style.scss";
import "./sass/mobile.scss";

function footer() {
  return (
    <>
      <div id="footer">
        <Container className="py-5 ">
          <Row>
            <Col sm="12">
              <img
                className="logo_footer"
                src="https://raw.githubusercontent.com/macaury/GoodPoison/675cfffbb580af3eb6f9a2e43bef76f31eb76f1a/src/assets/navbar/logo.svg"
                alt="GoodPoison"
              />
            </Col>
            <Col >
              <h5>Quick Link</h5>
              <li>
                <a href="#"> Home</a>
              </li>
              <li>
                <a href="#">Pest Control</a>
              </li>
            </Col>
            <Col >
              <h5>Service</h5>
              <li>
                <a href="#">Expert Training</a>
              </li>
              <li>
                <a href="#">Prevent and Protect</a>
              </li>
            </Col>
            <Col >
              <h5>My Account</h5>
              <li>
                <a href="#">Pay Bill</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </Col>
            <Row>
              <span className="text-center copyright">
                &copy; Copyright {new Date().getFullYear()} GoodPoison | Powered
                by{" "}
                <a className="oak" href="https://macaury.github.io/Portifolio/">
                  {"{ Oak }"}
                </a>
              </span>
            </Row>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default footer;
