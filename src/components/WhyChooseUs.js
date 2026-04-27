import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const WhyChooseUs = () => {
  return (
    <section id="about" className="section">
      <Container>
        <Row className="g-4 align-items-center">
          <Col md={6}>
            <h2 className="section-heading mb-3">
              Why students trust Nobel IT for career‑ready training.
            </h2>
            <p className="section-subtitle mb-3">
              Based in PCMC Pune, Nobel IT Solutions &amp; Development is focused on
              bridging the gap between academic knowledge and industry expectations with
              practical, mentor‑driven learning.
            </p>
            <ul className="list-unstyled mb-0 small">
              <li className="mb-2">
                ✔ Trainer‑led sessions by experienced software engineers and solution architects.
              </li>
              <li className="mb-2">
                ✔ Real‑time projects, coding exercises, code reviews and mock interviews.
              </li>
              <li className="mb-2">
                ✔ Small batch sizes for personalized attention and doubt‑clearing.
              </li>
              <li className="mb-2">
                ✔ In‑house development &amp; consulting exposure for select candidates.
              </li>
              <li className="mb-2">
                ✔ Dedicated placement support and interview preparation.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;