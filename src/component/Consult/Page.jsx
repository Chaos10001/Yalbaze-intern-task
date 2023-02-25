import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./page.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Page = () => {
  return (
    <div className="Main-Page">
      <div>
        <span>
          <img className="bubble-4" src="./Ellipse 39 (1).png" alt="" />
        </span>
        <span>
          <img className="star-4" src="./Star 1.png" alt="" />
        </span>
        <span>
          <img className="star-5" src="./Star 1.png" alt="" />
        </span>
        <span>
          <img className="star-6" src="./Star 1.png" alt="" />
        </span>
        <span className="d-none d-md-flex">
          <img className="stroke-1" src="./Vector 263.png" alt="" />
          <img className="stroke-2" src="./Vector 264.png" alt="" />
          <img className="stroke-3" src="./Vector 265.png" alt="" />
          <img className="stroke-4" src="./Vector 266.png" alt="" />
        </span>
        <span className="strokepng">
          <img className="stroke-5" src="./Vector 263.png" alt="" />
          <img className="stroke-6" src="./Vector 264.png" alt="" />
          <img className="stroke-7" src="./Vector 265.png" alt="" />
          <img className="stroke-8" src="./Vector 266.png" alt="" />
        </span>
      </div>
      <Container>
        <Row className="justify-content-center align-items-center d-flex">
          <Col>
            <h4 className="Page-text">Priority Access</h4>
            <img src="./Line 6.png" className="linePng" alt="" />
            <p className="Page-content">
              Get ready to revolutionize the way you interact with your
              customers and drive sales with Loyalbaze. Skip the waitlist and
              get exclusive priority access to LoyalBaze. Limited slots
              available. Please tell us a bit about your business and needs and
              of our consultants will be in touch Immediately!
            </p>
          </Col>
          <Col>
            <div className="form-content1">
              <h1>Book a Consultation with us</h1>

              <div className="text-center justify-content-center align-items-center">
                <Form.Control
                  className="w-75 form-content2 text-white"
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
                <Form.Control
                  className="w-75 form-content2 text-white"
                  placeholder="Enter your work email"
                  type="email"
                  required
                />
                <Form.Control
                  className="w-75 form-content2 text-white"
                  placeholder="Mobile number"
                  type="number"
                  required
                />
                <Form.Control
                  className="w-75 form-content2 text-white"
                  placeholder="Company Name"
                  type="text"
                  required
                />
                <select className="w-75 form-content2">
                  <option>Select Country</option>
                  <option>Nigeria</option>
                  <option>Chad</option>
                  <option>Ghana</option>
                  <option>South Africa</option>
                  <option>Egypt</option>
                  <option>Malaysia</option>
                  <option>Niger</option>
                  <option>Kenya</option>
                </select>
                <textarea
                  placeholder="Drop a message..."
                  className="form-content2"></textarea>
                <button>Send Request</button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
