import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
// import logo from '../assets/';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

    return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* <img src={logo} alt="Logo" /> */}
        <Navbar.Brand href="#home">WouseDesign</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Projects')}>Projects</Nav.Link>
            <button className="contact_btn" onClick={() => console.log('connect')}><span>Contacts</span></button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );

}