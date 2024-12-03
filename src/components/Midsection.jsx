import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Midsection.css";

const Midsection = () => {
  return (
    <Container fluid className="text-center p-xl-5 customContainer">
      {/* Title */}
      <Row>
        <Col className="mt-5 mb-5">
          <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>warum wir?</h2>
        </Col>
      </Row>

      {/* Features */}
      <Row className="p-5">
        <Col xs={12} sm={6} md={3} className="p-3 col-border">
          <h6>
            Professionelle
            <br />
            Reinigungskräfte
          </h6>
        </Col>
        <Col xs={12} sm={6} md={3} className="p-3 col-border">
          <h6>
            Umweltbewusste
            <br />
            Reinigung
          </h6>
        </Col>
        <Col xs={12} sm={6} md={3} className="p-3 col-border">
          <h6>
            Zufriedenheit
            <br />
            garantiert
          </h6>
        </Col>
        <Col xs={12} sm={6} md={3} className="p-3 col-border ">
          <h6>
            Abende &
            <br />
            Wochenenden
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Midsection;
