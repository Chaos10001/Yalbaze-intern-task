import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { HouseFill,Telephone } from "react-bootstrap-icons";
import './fotter.css'

const Fotter = () => {
  return (
    <footer className="p-5 m-auto">
      <hr className="text-white" />
      <Container>
        <Row className="d-flex align-items-center justify-content-center text-center">
          <Col className="m-auto d-flex main-1">
            <span>
              {" "}
              <HouseFill className="text-white" />{" "}
            </span>
            <h2>
              2nd Floor, The Garnet Building, KM14 Lekki Epe Expressway, Lagos,
              Nigeria.
            </h2>
          </Col>
          <Col className="main-2">
            <h2>Loyalbaze is almost here.</h2>
          </Col>
          <Col className="d-flex main-3">
            <span>
              <Telephone className="mb-3 text-white " />
            </span>
            <h2>+234 903 618 9485</h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Fotter;
