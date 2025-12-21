"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col, Button, Form, Alert } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { staggerContainer, childVariants } from "@/src/components/AnimationVariants";
import { socialLinks } from "@/src/data/socialLinks";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

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
          <Row className="justify-content-center mb-4">
            <Col lg={6}>
              <div className="d-flex justify-content-center gap-4 fs-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.title}
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted"
                  >
                    {link.title === "Github" && <FaGithub />}
                    {link.title === "LinkedIn" && <FaLinkedin />}
                    {link.title === "Email" && <FaEnvelope />}
                  </a>
                ))}
              </div>
            </Col>
          </Row>
        </motion.div>

        <motion.div variants={childVariants}>
          <Row className="justify-content-center">
            <Col md={8} lg={6}>
              <Form onSubmit={handleSubmit} className="d-flex flex-column gap-3">
                <Form.Control
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  required
                />
                <Form.Control
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="Email"
                  required
                />
                <Form.Control
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  as="textarea"
                  rows={4}
                  placeholder="Message"
                  required
                />

                {status === "success" && (
                  <Alert variant="success">Message sent successfully!</Alert>
                )}
                {status === "error" && (
                  <Alert variant="danger">Something went wrong. Try again.</Alert>
                )}

                <div className="d-grid mt-2">
                  <Button variant="dark" size="lg" type="submit" disabled={status === "loading"}>
                    {status === "loading" ? "Sending..." : "Send Message"}
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
