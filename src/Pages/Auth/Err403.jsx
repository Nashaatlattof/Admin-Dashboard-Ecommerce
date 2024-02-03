import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Err403 = ({role}) => {

  return (
    <Row className="content text-center">
      <Col>
        <h1 className="message">You are not authorized.</h1>
        <p className="message2">
          You tried to access a page you did not have prior authorization for.
        </p>
        <Link className="btn btn-primary  text-center" to={role === "1992" ? "/dashboard/writer" : "/"}  >
       {role === "1992" ? "Go TO Home Page" : "Go TO Home Page"}
        </Link>
      </Col>
      <Col>
        <div className="neon ">403</div>
        <div className="door-frame text-center">
          <div className="door">
            <div className="rectangle"></div>
            <div className="handle"></div>
            <div className="window">
              <div className="eye"></div>
              <div className="eye eye2"></div>
              <div className="leaf"></div>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Err403;
