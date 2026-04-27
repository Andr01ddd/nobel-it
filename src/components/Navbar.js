import { Container, Nav, Navbar as BsNavbar, NavDropdown } from "react-bootstrap";
import { useState } from "react";
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
        <BsNavbar.Brand href="/" className="d-flex align-items-center gap-2">
          <div className="d-flex flex-column">
            <span className="fs-5">Nobel IT</span>
            {/* <img src={logo} style={{"width":"200px"}}/> */}
            <span className="brand-pill">Training • Development • Placement</span>
          </div>
        </BsNavbar.Brand>
        <BsNavbar.Toggle aria-controls="main-nav" />
        <BsNavbar.Collapse id="main-nav" className="justify-content-end">
          <Nav className="gap-2">
            <Nav.Link href="/About">About</Nav.Link>
            <NavDropdown 
              title="Courses" 
              id="nav-dropdown"
              show={showDropdown}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >              
            <NavDropdown.Item href="/technical-courses">technical-courses</NavDropdown.Item>
            <NavDropdown.Item href="/personality-development-courses">personality-development-courses</NavDropdown.Item>
            <NavDropdown.Item href="/non-technical-courses">non-technical-courses</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Services">Services</Nav.Link>
            <Nav.Link href="/Contact">Contact</Nav.Link>
          </Nav>
        </BsNavbar.Collapse>
      </Container>
    </BsNavbar>
  );
};

export default Navbar;