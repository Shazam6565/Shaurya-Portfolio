import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { BiCalendar, BiCodeAlt } from "react-icons/bi";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>

        {/* Project Metadata */}
        {(props.date || props.category) && (
          <div className="project-metadata">
            {props.date && (
              <span className="project-date">
                <BiCalendar /> {props.date}
              </span>
            )}
            {props.category && (
              <span className="project-category">
                <BiCodeAlt /> {props.category}
              </span>
            )}
          </div>
        )}

        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

        {/* Technology Tags */}
        {props.technologies && props.technologies.length > 0 && (
          <div className="tech-tags-container">
            {props.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Key Features */}
        {props.features && props.features.length > 0 && (
          <div className="project-features">
            <h6 className="features-heading">Key Features:</h6>
            <ul className="features-list">
              {props.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Action Buttons */}
        <div className="project-buttons">
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              {"Demo"}
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
