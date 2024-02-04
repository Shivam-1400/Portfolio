import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiLeetcode,
  SiHackerrank,
  SiCodechef,
  SiCodeforces,
  SiGeeksforgeeks,
} from "react-icons/si";

function Platform() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://leetcode.com/skshivamkeshri852/"
          style={{ textDecoration: "none", color: "white" }}
        >
          <SiLeetcode />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.hackerrank.com/profile/skshivam_keshri1"
          style={{ textDecoration: "none", color: "white" }}
        >
          <SiHackerrank />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://www.codechef.com/users/shivamkeshri14"
          style={{ textDecoration: "none", color: "white" }}
        >
          <SiCodechef />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://codeforces.com/profile/shivamkeshri14"
          style={{ textDecoration: "none", color: "white" }}
        >
          <SiCodeforces />
        </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <a
          href="https://auth.geeksforgeeks.org/user/skshivamkeshri852"
          style={{ textDecoration: "none", color: "white" }}
        >
          <SiGeeksforgeeks />
        </a>
      </Col>
    </Row>
  );
}

export default Platform;
