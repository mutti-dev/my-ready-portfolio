"use client";

import { motion } from "framer-motion";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { projects } from "@/src/data/projects";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { staggerContainer, childVariants } from "@/src/components/AnimationVariants";


const Projects = () => {

 

  return (
    <motion.section
      id="projects"
      className="py-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
    >
      <Container>
        <h2 className="text-center fw-semibold display-6 mb-5">
          Projects
        </h2>

        <Row className="g-4">
          {projects.map((project, index) => (
            <Col key={index} md={6} lg={4}>
              <motion.div variants={childVariants} className="h-100">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="d-flex flex-column">
                    <div className="mb-3">
                      <Card.Title className="fw-semibold mb-2">
                        {project.title}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {project.description}
                      </Card.Text>
                    </div>

                    <ul className="ps-3 text-muted mb-3">
                      {project.features.map((feature, i) => (
                        <li key={i} className="mb-1">
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <p className="text-muted mb-4">
                      <strong>Tech Stack:</strong> {project.tech.join(", ")}
                    </p>

                    <div className="mt-auto d-flex gap-3">
                      <Button
                        href={project.github}
                        target="_blank"
                        variant="outline-dark"
                        size="sm"
                        className="d-flex align-items-center gap-2"
                      >
                        <FaGithub />
                        GitHub
                      </Button>

                      {project.demo && (
                        <Button
                          href={project.demo}
                          target="_blank"
                          variant="dark"
                          size="sm"
                          className="d-flex align-items-center gap-2"
                        >
                          <FaExternalLinkAlt />
                          Demo
                        </Button>
                      )}
                    </div>
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

export default Projects;
