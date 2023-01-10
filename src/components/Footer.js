import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/facebook_svg.svg";
import navIcon2 from "../assets/img/linkedin_svg.svg";
import navIcon3 from "../assets/img/git_iconsvg.svg";

export const Footer = () => {
    return (
      <footer className="footer">
        <Container>
          <Row className="align-items-center">
            {/* <MailchimpForm /> */}
            <Col size={12} sm={6}>
              <span className="brand-logo"><span className="word">Wouse</span> Design</span>
            </Col>
            <Col size={12} sm={6} className="text-center text-sm-end">
              <div className="social-icon">
                <a href="#"><img src={navIcon1} alt="Icon" /></a>
                <a href="#"><img src={navIcon2} alt="Icon" /></a>
                <a href="#"><img src={navIcon3} alt="Icon" /></a>
              </div>
            </Col>
            <p>Copyright 2022. All Rights Reserved</p>
          </Row>
        </Container>
      </footer>
    )
  }