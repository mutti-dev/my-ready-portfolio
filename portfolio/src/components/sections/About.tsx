"use client";

import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import { staggerContainer, childVariants } from "@/src/components/AnimationVariants";


const About = () => {


  return (
    <motion.section
      id="about"
      className="py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg={8}>
            <h2 className="text-center fw-semibold display-6 mb-4">
              About
            </h2>
            <motion.div variants={childVariants} className="h-100">

              <div className="fs-5 text-muted d-flex flex-column gap-3 ">
                <p style={{ textAlign: "justify" }}>
                  I am a full-stack developer with hands-on experience building
                  scalable web applications using modern frontend frameworks such
                  as React and Next.js, paired with backend technologies including
                  Node.js and Django.
                </p>

                <p style={{ textAlign: "justify" }}>
                  I have worked on production systems such as CRM platforms,
                  data-driven applications, and real-time services, with a strong
                  focus on performance, reliability, and long-term maintainability.
                </p>

                <p style={{ textAlign: "justify" }}>
                  My development approach emphasizes clean architecture, readable
                  code, and thoughtful problem-solving to deliver measurable
                  business impact.
                </p>

                <p style={{ textAlign: "justify" }}>
                  I also have practical exposure to AI-assisted solutions,
                  including integrating PyTorch-based models for automation and
                  intelligent workflows in real-world applications.
                </p>
              </div>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </motion.section>
  );
};

export default About;
