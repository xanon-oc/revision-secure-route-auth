import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../Shared/QZone";
import bg from "../../assets/bg.png";
const RightNav = () => {
  return (
    <div>
      <h4 className="mt-4">Login With</h4>
      <Button className="mb-2 loginA" variant="outline-primary">
        <FaGoogle /> Login With Google
      </Button>
      <Button variant="outline-secondary loginA">
        <FaGithub /> Login With GitHub
      </Button>

      <div>
        <h4 className="mt-4">Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter /> Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone />
      <div>
        <img className="bgCover" src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
