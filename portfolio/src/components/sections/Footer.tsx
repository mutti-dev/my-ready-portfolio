"use client";

import { personalInfo } from "@/src/data/personalInfo";
import { socialLinks } from "@/src/data/socialLinks";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
            </p>
          </Col>

          <Col md={6} className="text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end gap-3">
              {socialLinks.map((link, index) => {
                let Icon = FaEnvelope;
                if (link.title === "Github") Icon = FaGithub;
                else if (link.title === "LinkedIn") Icon = FaLinkedin;
                else if (link.title === "Email") Icon = FaFileDownload;

                return (
                  <a
                    key={index}
                    href={link.link}
                    target={link.title !== "Email" ? "_blank" : undefined}
                    rel={link.title !== "Email" ? "noopener noreferrer" : undefined}
                    className="text-white text-decoration-none d-flex align-items-center gap-1 hover-opacity"
                  >
                    <Icon />
                    {link.title === "Email" ? "Resume" : link.title}
                  </a>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
