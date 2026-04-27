import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
function Contact() {
    return(

<section id="contact" className="section">
      <Container>
        <Row className="g-5 align-items-center my-5">
          <Col md={6}>
            <h2 className="section-heading mb-3">Get in touch with us.</h2>
            <p className="section-subtitle mb-3">
              Talk to our academic counselors to understand course details, batch timings
              and placement support. You can also walk in to our Thergaon, Pune office.
            </p>
            <div className="contact-card p-4">
              <h5 className="mb-3">Contact details</h5>
              <div>
                <div className="fw-semibold mb-1">Office Address</div>
                Office No: 301, Khinvasara Trade Center, Wakad Road, Dange Chowk,
                Mangal Nagar, Thergaon, Pune - 411033 (MH)
              </div>
              <div>
                <div className="fw-semibold mb-1">Phone</div>
                +91 9860671574
              </div>
              <div>
                <div className="fw-semibold mb-1">Email</div>
                nobelitsolutions@nobelitsol.com
              </div>
              <div>
                <div className="fw-semibold mb-1">Timings</div>
                Mon – Sat, 9:00 AM to 7:00 PM (IST)
              </div>
            </div>
          </Col>
          <Col md={6}>
            <div className="card-elevated p-4 h-100">
              <h5 className="mb-3">Send us a quick message</h5>
              <form>
                <div className="mb-3">
                  <label className="form-label small">Full Name</label>
                  <input className="form-control" placeholder="Your name" />
                </div>
                <div className="mb-3">
                  <label className="form-label small">Email</label>
                  <input type="email" className="form-control" placeholder="you@example.com" />
                </div>
                <div className="mb-3">
                  <label className="form-label small">Mobile</label>
                  <input type="tel" className="form-control" placeholder="+91" />
                </div>
                <div className="mb-3">
                  <label className="form-label small">Message</label>
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Tell us about your background and the course you're interested in."
                  />
                </div>
                <Button type="submit" className="btn-primary-soft w-100">
                  Submit Query
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    );
}


export default Contact;