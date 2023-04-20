import React from "react";

import logo from "../../assets/logo.png";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import moment from "moment";
import icon from "/account-icon.svg";

import { NavLink } from "react-router-dom";

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
      <div className="d-flex mt-4 bg-light p-3">
        <Button variant="danger">Latest</Button>
        <Marquee pauseOnHover speed={50}>
          Match Highlights: Germany vs Spain — as it happened ! Match
          Highlights: Germany vs Spain as...
        </Marquee>
      </div>
      <Navbar className="mt-2">
        <Container className="p-3">
          <Nav className="mx-auto">
            <NavLink
              to="/"
              style={{
                "text-decoration": "none",
                color: "white",
                "margin-right": "20px",
                color: "black",
              }}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <p> Home</p>
            </NavLink>
            <NavLink
              to="/about"
              style={{
                "text-decoration": "none",
                color: "white",
                "margin-right": "20px",
                color: "black",
              }}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <p> About</p>
            </NavLink>
            <NavLink
              to="/career"
              style={{
                "text-decoration": "none",
                color: "white",
                "margin-right": "20px",
                color: "black",
              }}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active" : ""
              }
            >
              <p>Career</p>
            </NavLink>
          </Nav>
        </Container>
        <div className="d-flex justify-content-center align-items-center me-4">
          <img
            src={icon}
            style={{ cursor: "pointer", width: "35px", "margin-right": "8px" }}
            alt=""
          />
          <Button variant="warning">Login</Button>
        </div>
      </Navbar>
    </Container>
  );
};

export default Header;
