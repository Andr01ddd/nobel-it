import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const PlacementSection = () => {
  return (
    <section id="placements" className="section">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={5}>
            <h2 className="section-heading mb-3">End‑to‑end placement guidance.</h2>
            <p className="section-subtitle mb-3">
              From building your portfolio and GitHub to mock interviews and aptitude
              preparation, our placement team works closely with you until you land the
              right role.
            </p>
            <ul className="list-unstyled small mb-0">
              <li className="mb-2">✔ Resume building and LinkedIn/GitHub optimization.</li>
              <li className="mb-2">✔ HR, technical and system design mock interviews.</li>
              <li className="mb-2">✔ Regular interview calls with partner companies.</li>
              <li className="mb-2">✔ Soft skills, communication and aptitude sessions.</li>
            </ul>
          </Col>
          <Col md={7}>
            <div className="card-elevated p-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Recent hiring partners</h5>
                <span className="badge bg-secondary-subtle text-secondary-emphasis border border-opacity-25">
                  Updated frequently
                </span>
              </div>
              <div className="row row-cols-2 row-cols-md-4 g-3">
                <div className="col">
                  <div className="p-2 border rounded-3 border-opacity-25">
                    Product startups
                  </div>
                </div>
                <div className="col">
                  <div className="p-2 border rounded-3 border-opacity-25">
                    IT services firms
                  </div>
                </div>
                <div className="col">
                  <div className="p-2 border rounded-3 border-opacity-25">
                    MNCs &amp; captives
                  </div>
                </div>
                <div className="col">
                  <div className="p-2 border rounded-3 border-opacity-25">
                    Local tech companies
                  </div>
                </div>
              </div>
              <p>
                Note: Placement assistance depends on your performance in assignments,
                projects and assessments conducted during the course.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PlacementSection;