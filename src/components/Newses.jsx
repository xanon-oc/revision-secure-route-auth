import React, { useEffect, useState } from "react";
import SinglePost from "./SinglePost";
import { Container } from "react-bootstrap";

const Newses = () => {
  const [newses, setNewses] = useState([]);
  console.log(newses);
  useEffect(() => {
    fetch("http://localhost:5600/news")
      .then((res) => res.json())
      .then((data) => setNewses(data))
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <Container>
      {newses.map((news) => (
        <SinglePost key={news._id} post={news} />
      ))}
    </Container>
  );
};

export default Newses;
