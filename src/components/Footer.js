import React from "react";

const Footer = () => {
  return (
    <footer className="footer pt-5 pb-3 mt-5 d-flex">
      <div className="container">
        <div className="row g-4  justify-content-between">
          <div className="col-md-4">
            <div className="mb-3">
              <span className="navbar-brand d-block mb-1">Nobel IT Solutions &amp; Development</span>
              <span className="brand-pill">Training • Development • Placement</span>
            </div>
            <div className="d-flex gap-2">
              <a
                href="https://www.facebook.com/NobelItSolution/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm d-inline-flex align-items-center justify-content-center"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.instagram.com/nobelitsol/"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm d-inline-flex align-items-center justify-content-center"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://in.linkedin.com/company/nobel-it-solutions-and-development"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm d-inline-flex align-items-center justify-content-center"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://wa.me/919860671574"
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost btn-sm d-inline-flex align-items-center justify-content-center"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>

          {/* Contact info */}
          <div className="col-md-6">
            <h6 className="text-light mb-3">Contact</h6>
            <ul className="list-unstyled small section-subtitle mb-0">
              <li className="mb-2 d-flex">
                <i className="fa fa-map-marker-alt me-2 mt-1"></i>
                <span>
                  Office No: 301, Khinvasara Trade Center, Wakad Road, Dange Chowk, Mangal
                  Nagar, Thergaon, Pune - 411033
                </span>
              </li>
              <li className="mb-2">
                <i className="fa fa-phone me-2"></i>
                <a href="tel:+919860671574" className="text-decoration-none">
                  +91 9860671574
                </a>
              </li>
              <li className="mb-2">
                <i className="fa fa-envelope me-2"></i>
                <a
                  href="mailto:nobelitsolutions@nobelitsol.com"
                  className="text-decoration-none"
                >
                  nobelitsolutions@nobelitsol.com
                </a>
              </li>
              <li className="mb-2">
                <i className="fa fa-globe me-2"></i>
                <a
                  href="https://www.nobelitsol.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-decoration-none"
                >
                  www.nobelitsol.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-top border-opacity-25 mt-4 pt-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-2">
          <div className="small section-subtitle">
            © {new Date().getFullYear()} Nobel IT Solutions &amp; Development. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;