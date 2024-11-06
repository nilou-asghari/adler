import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Midsection.css";
const Midsection = () => {
  return (
    <Container fluid className="text-center customContainer">
      <Row>
        <Col className="mt-5 mb-5 ">
          <h2 style={{ fontSize: "3rem", fontWeight: "bold" }}>warum wir?</h2>
        </Col>
      </Row>
      <Row className="m-5">
        <Col className="p-3 col-border">
          <h6 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            Professionelle
            <br />
            Reinigungskräfte
          </h6>
        </Col>
        <Col className="p-3 col-border">
          <h6>
            Umweltbewusste
            <br />
            Reinigung
          </h6>
        </Col>
        <Col className=" p-3 col-border">
          <h6>
            Zufriedenheit
            <br />
            garantiert
          </h6>
        </Col>
        <Col className="p-3">
          <h6>
            Abende &<br />
            Wochenenden
          </h6>
        </Col>
      </Row>
    </Container>
  );
};

export default Midsection;
