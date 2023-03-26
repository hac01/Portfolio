import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/62dc51bd-8128-4352-aac2-54ccb6b265f4.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Discord Bot which let's you to run multiple tools like amass , subfinder , httpx etc. from discord app."
              ghLink="https://github.com/hac01/Astra-Bot"
              demoLink="https://github.com/hac01/Astra-Bot#example"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
