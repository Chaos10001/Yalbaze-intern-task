import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import NavBar from "../Navbar/NavBar";
import "./home.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { PersonCircle, Envelope, StarFill } from "react-bootstrap-icons";
import Page from "../Consult/Page";
import Fotter from "../Fotter/Fotter";

const Home = () => {
  return (
    <div className="Main">
      <NavBar />
      <Container className="Home-Container">
        <Row>
          <Col>
            <div>
              <span className="bubble-1"></span>
              <span className="bubble-2"></span>
              <span>
                <img className="bubble-3" src="./Ellipse 39.png" alt="" />
              </span>
              <span>
                <img className="star-1" src="./Star 2.png" alt="" />
              </span>
              <span>
                <img className="star-2" src="./Star 3.png" alt="" />
              </span>
              <span>
                <img className="star-3" src="./Star 4.png" alt="" />
              </span>
              <span>
                <img className="star-4" src="./Star 1.png" alt="" />
              </span>
              <span>
                <img className="star5" src="./Star 1.png" alt="" />
              </span>
              <span>
                <img className="zigzagImg" src="./Vector (1).png" alt="" />
              </span>
            </div>
            <h1 className="Main-heading">
              Turn your best customer into
              <span style={{ color: "#BA2AD1" }}> Loyal fans</span>
            </h1>
            <p className="lead Main-content">
              Loyalbaze, empowers businesses to offer digital, mobile-first
              loyalty programs to their customers. With our AI Powered platform,
              you can easily create and manage custom loyalty and rewards
              programs, track customer engagement, and gain valuable insights to
              improve your business. Sign up now to get early access.
            </p>
            <div>
              <InputGroup className="mb-1 main-form pt-4 ">
                <InputGroup.Text className="basic-addon1" id="basic-addon1">
                  <PersonCircle className="text-white " />
                </InputGroup.Text>
                <Form.Control
                  className="form-content text-white"
                  placeholder="Tell us your name"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <InputGroup className="mb-3 main-form pt-4">
                <InputGroup.Text className="basic-addon1" id="basic-addon1">
                  <Envelope className="text-white " />
                </InputGroup.Text>
                <Form.Control
                  className="form-content text-white"
                  placeholder="Enter your email address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
              <div className="text-center">
                <button className="input-button text-center">
                  Get early access
                </button>
              </div>
              <div className="d-flex align-items-center justify-content-center text-center mt-3">
                <span className="ball-1 ">G</span>
                <span className="ball-2">O</span>
                <span className="ball-1">U</span>
                <span className="ball-2">M</span>
                <span className="text-white ms-2"> +57 Joined</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div>
        <Page />
      </div>
      <div>
        <Fotter />
      </div>
    </div>
  );
};

export default Home;
