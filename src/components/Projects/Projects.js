import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://chatify-49.web.app/"
              technologies={["React.js", "Material-UI", "Firebase", "Real-time Database"]}
              features={[
                "Real-time messaging with instant updates",
                "Image sharing and media support",
                "Message reactions and emoji support",
                "User authentication and profiles"
              ]}
              date="2023"
              category="Web App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/soumyajit4419/Bits-0f-C0de"
              demoLink="https://blogs.soumya-jit.tech/"
              technologies={["Next.js", "Tailwind CSS", "Markdown", "React"]}
              features={[
                "Markdown-based content management",
                "Dark mode support",
                "SEO optimized blog posts",
                "Fast static site generation"
              ]}
              date="2023"
              category="Blog Platform"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Editor.io"
              description="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview.Both the editor supports auto save of work using Local Storage"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://editor.soumya-jit.tech/"
              technologies={["React.js", "CodeMirror", "Local Storage", "GFM"]}
              features={[
                "Live HTML/CSS/JS preview",
                "Markdown editor with GFM support",
                "Auto-save functionality",
                "Syntax highlighting and formatting"
              ]}
              date="2022"
              category="Developer Tool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
              technologies={["PyTorch", "CNN", "ResNet34", "Transfer Learning", "Python"]}
              features={[
                "98% accuracy disease detection",
                "38 plant disease classes",
                "14 unique plant species support",
                "Transfer learning with ResNet34"
              ]}
              date="2022"
              category="Machine Learning"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              technologies={["NLP", "Python", "Machine Learning", "Text Analysis"]}
              features={[
                "Suicide ideation detection",
                "Natural language processing",
                "Social media post analysis",
                "Mental health support system"
              ]}
              date="2021"
              category="AI for Good"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              technologies={["TensorFlow", "Keras", "OpenCV", "CNN", "Python"]}
              features={[
                "Real-time emotion detection",
                "Face recognition with OpenCV",
                "FER-2013 dataset training",
                "Multiple emotion classification"
              ]}
              date="2021"
              category="Computer Vision"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
