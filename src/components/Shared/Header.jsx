import React from "react";
import logo from "../../assets/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import moment from "moment";

import { FaUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <Container className="text-center mt-4 mb-4">
      <img src={logo} alt="" />
      <p className="mt-2">
        <small className="text-secondary">
          Journalism Without Fear or Favour
        </small>
      </p>
      <p className="fw-semibold">{moment().format("dddd, MMMM D YYYY")}</p>
      <div className="d-flex mt-4">
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar bg="dark" variant="dark" className="mt-2">
        <Container>
          <Nav className="mx-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/career">Career</Nav.Link>
          </Nav>
        </Container>
        <div className="d-flex justify-content-center align-items-center me-4">
          <FaUserCircle className="text-white me-4" />
          <Button variant="warning">Login</Button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
