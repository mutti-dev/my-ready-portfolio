"use client";

import { motion } from "framer-motion";
import { Container, Row, Col, Card } from "react-bootstrap";
import { staggerContainer, childVariants } from "@/src/components/AnimationVariants";
import { skillGroups } from "@/src/data/skillGroups";


const Skills = () => {


  return (
    <motion.section
      id="skills"
      className="py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <Container>
        <h2 className="text-center fw-semibold display-6 mb-5">
          Skills
        </h2>

        <Row className="g-4 justify-content-center">
          {skillGroups.map((group, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div variants={childVariants} className="h-100">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body>
                    <Card.Title className="fw-semibold mb-3">
                      {group.title}
                    </Card.Title>
                    <ul className="mb-0 ps-3 text-muted">
                      {group.skills.map((skill, i) => (
                        <li key={i} className="mb-1">
                          {skill}
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

export default Skills;
