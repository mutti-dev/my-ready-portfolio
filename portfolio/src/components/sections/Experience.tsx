"use client";

import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { staggerContainer, childVariants } from "@/src/components/AnimationVariants";
import { experiences } from "@/src/data/experiences";

const Experience = () => {


  const item = {
    hidden: { opacity: 0, y: 16 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <motion.section
      id="experience"
      className="py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <Container>
        <h2 className="text-center display-6 fw-semibold mb-5">Experience</h2>
        <Row className="g-4">
          {experiences.map((exp, index) => (
            <Col key={index} md={6}>
              <motion.div variants={item}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="d-flex flex-column">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <Card.Title className="h5">{exp.title}</Card.Title>
                      <span className="text-muted">{exp.period}</span>
                    </div>
                    <Card.Text className="mb-3">{exp.description}</Card.Text>
                    <ul className="ps-3 mb-0">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="text-muted">
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </Card.Body>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Container>
    </motion.section>
  );
};

export default Experience;
