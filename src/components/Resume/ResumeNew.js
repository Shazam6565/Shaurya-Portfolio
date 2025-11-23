import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Shaurya_tiwari_Resume_2024_master.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import {
  FaBriefcase,
  FaGraduationCap,
  FaAward,
  FaCode,
  FaTools,
  FaLightbulb
} from "react-icons/fa";

function ResumeNew() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  // Resume Data
  const experience = [
    {
      role: "Senior Full Stack Developer",
      company: "Tech Innovations Inc.",
      period: "2023 - Present",
      location: "San Francisco, CA",
      achievements: [
        "Led development of microservices architecture serving 1M+ users",
        "Improved application performance by 40% through optimization",
        "Mentored team of 5 junior developers",
        "Implemented CI/CD pipeline reducing deployment time by 60%"
      ]
    },
    {
      role: "Full Stack Developer",
      company: "Digital Solutions Ltd.",
      period: "2021 - 2023",
      location: "New York, NY",
      achievements: [
        "Built responsive web applications using React and Node.js",
        "Integrated third-party APIs and payment gateways",
        "Reduced bug reports by 35% through comprehensive testing",
        "Collaborated with cross-functional teams on product features"
      ]
    },
    {
      role: "Junior Developer",
      company: "StartUp Ventures",
      period: "2020 - 2021",
      location: "Remote",
      achievements: [
        "Developed and maintained company website and internal tools",
        "Participated in code reviews and agile development processes",
        "Created reusable component library for faster development"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      institution: "Stanford University",
      period: "2018 - 2020",
      location: "Stanford, CA",
      details: ["GPA: 3.9/4.0", "Focus: Machine Learning & AI"]
    },
    {
      degree: "Bachelor of Technology in Computer Engineering",
      institution: "MIT",
      period: "2014 - 2018",
      location: "Cambridge, MA",
      details: ["GPA: 3.8/4.0", "Dean's List: All Semesters"]
    }
  ];

  const skills = {
    "Frontend Development": [
      { name: "React.js", level: 95 },
      { name: "JavaScript/TypeScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
      { name: "Next.js", level: 85 }
    ],
    "Backend Development": [
      { name: "Node.js", level: 90 },
      { name: "Python", level: 85 },
      { name: "Express.js", level: 88 },
      { name: "PostgreSQL/MongoDB", level: 82 }
    ],
    "Tools & Technologies": [
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "CI/CD", level: 85 }
    ]
  };

  const certifications = [
    "AWS Certified Solutions Architect",
    "Google Cloud Professional Developer",
    "MongoDB Certified Developer",
    "Certified Scrum Master (CSM)"
  ];

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />

        {/* Header Section */}
        <Container>
          <Row className="resume-header">
            <Col md={12} className="text-center">
              <h1 className="resume-main-title">
                Professional <strong className="purple">Resume</strong>
              </h1>
              <p className="resume-subtitle">
                Full Stack Developer | Problem Solver | Tech Enthusiast
              </p>
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                className="download-resume-btn"
              >
                <AiOutlineDownload />
                &nbsp;Download Full Resume
              </Button>
            </Col>
          </Row>

          {/* Professional Summary */}
          <Row className="resume-summary-section">
            <Col md={12}>
              <div className="resume-card">
                <h2 className="section-title">
                  <FaLightbulb className="section-icon" />
                  Professional Summary
                </h2>
                <p className="summary-text">
                  Passionate Full Stack Developer with 4+ years of experience building scalable web applications.
                  Specialized in React, Node.js, and cloud technologies. Proven track record of delivering
                  high-quality solutions and leading development teams. Committed to writing clean, maintainable
                  code and staying current with emerging technologies.
                </p>
              </div>
            </Col>
          </Row>

          {/* Experience Section */}
          <Row className="resume-content-section">
            <Col md={12}>
              <div className="resume-card">
                <h2 className="section-title">
                  <FaBriefcase className="section-icon" />
                  Work Experience
                </h2>
                <div className="timeline">
                  {experience.map((job, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h3 className="timeline-title">{job.role}</h3>
                        <h4 className="timeline-company">{job.company}</h4>
                        <p className="timeline-period">
                          {job.period} | {job.location}
                        </p>
                        <ul className="timeline-achievements">
                          {job.achievements.map((achievement, idx) => (
                            <li key={idx}>{achievement}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Education Section */}
          <Row className="resume-content-section">
            <Col md={12}>
              <div className="resume-card">
                <h2 className="section-title">
                  <FaGraduationCap className="section-icon" />
                  Education
                </h2>
                <div className="timeline">
                  {education.map((edu, index) => (
                    <div key={index} className="timeline-item">
                      <div className="timeline-marker"></div>
                      <div className="timeline-content">
                        <h3 className="timeline-title">{edu.degree}</h3>
                        <h4 className="timeline-company">{edu.institution}</h4>
                        <p className="timeline-period">
                          {edu.period} | {edu.location}
                        </p>
                        <ul className="timeline-achievements">
                          {edu.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Skills Section */}
          <Row className="resume-content-section">
            <Col md={12}>
              <div className="resume-card">
                <h2 className="section-title">
                  <FaCode className="section-icon" />
                  Technical Skills
                </h2>
                {Object.entries(skills).map(([category, skillList], index) => (
                  <div key={index} className="skill-category">
                    <h3 className="skill-category-title">{category}</h3>
                    <div className="skills-grid">
                      {skillList.map((skill, idx) => (
                        <div key={idx} className="skill-item">
                          <div className="skill-header">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div
                              className="skill-progress"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Col>
          </Row>

          {/* Certifications Section */}
          <Row className="resume-content-section">
            <Col md={12}>
              <div className="resume-card">
                <h2 className="section-title">
                  <FaAward className="section-icon" />
                  Certifications & Achievements
                </h2>
                <div className="certifications-grid">
                  {certifications.map((cert, index) => (
                    <div key={index} className="certification-item">
                      <FaAward className="cert-icon" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Col>
          </Row>

          {/* Bottom Download Button */}
          <Row className="resume-footer">
            <Col md={12} className="text-center">
              <Button
                variant="primary"
                href={pdf}
                target="_blank"
                className="download-resume-btn"
              >
                <AiOutlineDownload />
                &nbsp;Download Full Resume
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
}

export default ResumeNew;
