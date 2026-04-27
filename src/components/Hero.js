import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const Hero = () => {
  return (
    <section id="top" className="hero">
      <Container>
        <Row className="align-items-center g-4">
          <Col md={7}>
            <h1 className="hero-title mb-3">
              Launch your{" "}
              <span className="hero-highlight">
                IT career
              </span>{" "}
              with industry‑grade mentorship.
            </h1>
            <p className="hero-lead mb-4">
              Nobel IT Solutions &amp; Development offers intensive, 100% job‑oriented
              programs in Full Stack Development, Python, Java, .NET, Web Development,
              Data Science and more, guided by working professionals in Pune.
            </p>
            <div className="d-flex flex-wrap gap-3 align-items-center mb-4">
              <Button href="/Contact" className="btn-primary-soft">
                Book Free Counseling
              </Button>
              <Button href="#courses" variant="outline-light" className="btn-ghost">
                View All Courses
              </Button>
              <div className="d-flex flex-column">
                <span>✔ Live projects &amp; mock interviews</span>
                <span>✔ Placement assistance with leading IT firms</span>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="hero-card">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="mb-0">Request a Call Back</h5>
                <span className="badge bg-success-subtle text-success-emphasis border border-success border-opacity-25">
                  Slots filling fast
                </span>
              </div>
              <form>
                <div className="mb-3">
                  <label className="form-label small">Full Name</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small">Mobile Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    placeholder="+91"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label small">Interested Course</label>
                  <select className="form-select">
                    <option>Full Stack Java Development</option>
                    <option>Full Stack .NET Development</option>
                    <option>Python Programming</option>
                    <option>Web Development</option>
                    <option>Data Science</option>
                    <option>Software Testing</option>
                  </select>
                </div>
                <Button href="/Contact" type="submit" className="btn-primary-soft w-100 mb-2">
                  Get Counseling Call
                </Button>
                <p>
                  By submitting, you agree to be contacted via phone, WhatsApp or email
                  regarding courses &amp; placements.
                </p>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;