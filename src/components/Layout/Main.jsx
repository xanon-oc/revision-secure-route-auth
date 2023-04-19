import React from "react";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";
import { Col, Container, Row } from "react-bootstrap";
import MainPOST from "../MainPOST";
import LeftNav from "../Shared/LeftNav";
import RightNav from "../Shared/RightNav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg={3}>{<LeftNav />}</Col>
          <Col lg={6}>
            <Outlet />
          </Col>
          <Col lg={3}>{<RightNav />}</Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Main;
