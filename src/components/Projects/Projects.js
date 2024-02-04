import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import newspaper from "../../Assets/Projects/01newspaper.png";
import diskmanager from "../../Assets/Projects/01diskspace.png";
import portfolio from "../../Assets/Projects/01portfolio.png";
import iot from "../../Assets/Projects/01homesafety.png";

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
              imgPath={newspaper}
              isBlog={false}
              title="Newspaper Agency Manager"
              description="Created a dynamic Java FX project seamlessly integrating MYSQL and FXML, presenting an innovative solution for the streamlined management of various newspaper agency operations, including sales, distribution, and billing. Utilized JDBC to establish a robust connection between the Java application and MYSQL database, ensuring efficient data storage and retrieval."
              ghLink="https://github.com/Shivam-1400/NEWSPAPER_AGENCY_MANAGER"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={diskmanager}
              isBlog={false}
              title="Disk Space Manager"
              description="The Disk Space Manager is an advanced disk management application that empowers users to efficiently manage their disk space. It provides comprehensive insights into space utilization, facilitates file detection, and offers capabilities to free up disk space."
              ghLink="https://github.com/Shivam-1400/DiskSpaceManager"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iot}
              isBlog={false}
              title="Smart Home  IoT System"
              description="Designed and developed an IoT-based home safety system. Collaborated in a fun team to create a cool home safety gadget using a remote control. We added fire alarms, door lockers, and the power to control home gadgets with just one click. It's like having a superhero for your home! Mixed hardware like sensors and controllers, and software to make a simple and friendly gadget that keeps your home safe and sound. It's not just a project; it's like having a tech buddy for your home"
              // ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://www.tinkercad.com/things/dzKqyQ2X2to-home-safety-using-ir-remote"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portifolio"
              description=" Multi-Page application to showoff projects and portfolio. Styled with React-Bootstrap and Css with easy to customize colors. Fully Responsive"
              ghLink="https://github.com/Shivam-1400/Portfolio"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
