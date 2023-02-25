import Container from "react-bootstrap/Container";
import { SuitHeartFill } from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const NavBar = () => {
  return (
    <Navbar expand="md">
      <Container>
        <Navbar.Brand href="#" className="fw-bolder pb-3">
          <h2 className="heading-text">
            I
            <span className="heading-heart">
              <SuitHeartFill />
            </span>
            yalbaze
          </h2>
        </Navbar.Brand>
        <Nav className="ms-auto">
          <span className="heading-container">
            <h3>Get Priority Access</h3>
          </span>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
