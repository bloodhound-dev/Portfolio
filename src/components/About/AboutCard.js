import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rishab Raj </span>
            from <span className="purple"> Ranchi, India.</span>
            <br />I am a senior pursuing bachelor's in Computer Science from St. Andrews Institute of Technology and Management.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Auto Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The <span className = "purple">grind</span> isn't over <span className = "purple">yet</span>."{" "}
          </p>
          <footer className="blockquote-footer">Rishab</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
