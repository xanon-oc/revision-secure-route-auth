import React from "react";
import { useState } from "react";
import { Card } from "react-bootstrap";
import { FaBookmark, FaShareAlt, FaStar, FaEye } from "react-icons/fa";
const SinglePost = (news) => {
  const [fold, setFold] = useState(true);
  return (
    <div className="mb-4">
      <Card className="w-100">
        <div
          className="d-flex container justify-content-center align-items-center "
          style={{ background: "#F3F3F3", padding: "2px" }}
        >
          <div className="d-flex align-items-center mt-3 p-2">
            <Card.Img
              className="me-2 "
              style={{ width: "8%", "border-radius": "100%" }}
              src={news.post.author.img}
            />
            <div>
              <Card.Text className="">
                <div>
                  {news.post.author.name == "system"
                    ? "anonymous"
                    : news.post.author.name ||
                      (news.post.author.name === ""
                        ? "anonymous"
                        : "anonymous")}
                </div>

                <div>
                  <p>{news.post.author.published_date}</p>
                </div>
              </Card.Text>
            </div>
          </div>
          <div className="d-flex p-2">
            <FaBookmark style={{ cursor: "pointer" }} className="me-2" />
            <FaShareAlt style={{ cursor: "pointer" }} />
          </div>
        </div>
        <Card.Body>
          <Card.Title>{news.post.title}</Card.Title>
          <Card.Img
            className="mt-3 mb-3"
            style={{ "border-radius": "10px" }}
            src={news.post.image_url}
          />

          <Card.Text>
            {fold ? (
              <>
                <p> {news.post.details.substring(0, 180)}</p>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setFold(!fold)}
                >
                  ...Read more.
                </span>
              </>
            ) : (
              <>
                <p> {news.post.details}</p>
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => setFold(!fold)}
                >
                  ...Read less.
                </span>
              </>
            )}
          </Card.Text>
          <hr />

          <div className="d-flex justify-content-between">
            <div style={{ display: "flex" }}>
              <FaStar style={{ color: "#FF8C47" }} />
              <FaStar style={{ color: "#FF8C47" }} />
              <FaStar style={{ color: "#FF8C47" }} />
              <FaStar style={{ color: "#FF8C47" }} />
              <FaStar style={{ color: "#FF8C47" }} />

              <p className="ms-2">{news.post.rating.number}</p>
            </div>
            <div style={{ display: "flex" }}>
              <FaEye />
              <p className="ms-2">{news.post.total_view}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SinglePost;
