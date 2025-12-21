"use client";

import { motion } from "framer-motion";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { staggerContainer, childVariants } from "@/src/components/AnimationVariants";
import { socialLinks } from "@/src/data/socialLinks";


const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <Container>
        <motion.div variants={childVariants}>
          <Row className="justify-content-center text-center mb-5">
            <Col lg={6}>
              <h2 className="fw-semibold display-6 mb-3">Contact</h2>
              <p className="text-muted fs-5">
                Reach out for job opportunities or professional collaborations.
              </p>
            </Col>
          </Row>
        </motion.div>

        <motion.div variants={childVariants}>
          <Row className="justify-content-center mb-5">
            <Col lg={6}>
              <div className="d-flex justify-content-center gap-4 fs-5">
                {socialLinks.map((link) => (
                    <a key={link.title} href={link.link} target="_blank" rel="noopener noreferrer" className="text-muted fs-4">
                      {link.title === "Github" && <FaGithub />}
                      {link.title === "LinkedIn" && <FaLinkedin />}
                      {link.title === "Email" && <FaEnvelope/> }
                    </a>
                  ))}
              </div>
            </Col>
          </Row>
        </motion.div>

        <motion.div variants={childVariants}>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Form className="d-flex flex-column gap-3">
                <Form.Control type="text" placeholder="Name" />
                <Form.Control type="email" placeholder="Email" />
                <Form.Control as="textarea" rows={4} placeholder="Message" />
                <div className="d-grid mt-2">
                  <Button variant="dark" size="lg" type="submit">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Col>
          </Row>
        </motion.div>
      </Container>
    </motion.section>
  );
};

export default Contact;
