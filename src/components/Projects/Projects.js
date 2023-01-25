import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import whiteBoxTest from "../../Assets/Projects/white-box-test.png";
import banking from "../../Assets/Projects/banking.png";
import sortTimeManagement from "../../Assets/Projects/sort-time-management.png";
import songsMaster from "../../Assets/Projects/songs-master.png";

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
              imgPath={sortTimeManagement}
              isBlog={false}
              title="Sort Time Measuring"
              description="This C++ program fills an vector array of random numbers and measure the time taken by the the system to complete with different size of arrays."
              ghLink="https://github.com/bloodhound-dev/Sort-Time-Measurement"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={songsMaster}
              isBlog={false}
              title="Songs Master"
              description="This project is based on API which gets in the Top Shazam-ed songs in the world in real-time and showcases it for the ease of access!!"
              ghLink="https://github.com/bloodhound-dev/SongsMaster/tree/master"
              demoLink="https://songs-master.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={banking}
              isBlog={false}
              title="Banking System"
              description="A complete banking system with the function of file handling."
              ghLink="https://github.com/bloodhound-dev/Bank-System"
                         
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={whiteBoxTest}
              isBlog={false}
              title="White Box Test"
              description="Design and implement a white-box test for a program that computes the sine and cosine functions in a specialized manner. This program is going to be part of an embedded system running on a processor that does not support floating-point arithmetic. The program to be tested is attached. Your job is to test the functions sin and cos; you are to assume that the functions sin0to45 and sin45to90 have already been tested."
              ghLink="https://github.com/bloodhound-dev/White-Box-Test"
              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
