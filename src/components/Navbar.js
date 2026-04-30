import { Container, Nav, Navbar as BsNavbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";

// import logo from "../about-us/nobelitsol.png"



function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <BsNavbar
      expand="lg"
      fixed="top"
      className="custom-navbar"
      variant="dark"
    >
      <Container>
        <BsNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <div className="d-flex flex-column">
            <span className="fs-5">Nobel IT</span>
            {/* <img src={logo} style={{"width":"200px"}}/> */}
            <span className="brand-pill">Training • Development • Placement</span>
          </div>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="gap-2">
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <NavDropdown 
              title="Courses" 
              id="nav-dropdown"
              show={showDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >              
            <NavDropdown.Item as={Link} to="/technical-courses">technical-courses</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/personality-development-courses">personality-development-courses</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/non-technical-courses">non-technical-courses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/services"> Services </Nav.Link>
            <Nav.Link as={Link} to="/contact"> Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;