import { Container, Row, Col } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { skillsData } from "../data/SkillsData";
import { skillsImage } from "../utils/SkillsImage";
import "../pages/style.css";

function Aboutpage() {
  return (
    <div className="aboutpagebackground">
      <Container>
        <Row className="textbackground">
          <Col md={7}>
            <h3 className="aboutmetext">
              About <span>Me</span>
            </h3>
            <p className="aboutdetails">
              {" "}
              Born in France, educated in London, and currently immersed in the
              vibrant Israeli hi-tech scene, I bring a global perspective to my
              work as a full-stack developer. I've got a knack for getting
              things done efficiently, breaking complex tasks into manageable
              steps, all while keeping a finger on the commercial pulse. My
              secret sauce? Excellent communication skills that make it a breeze
              for clients to share their needs with me. Let's build amazing tech
              together!
            </p>
            <div className="skillsContainer">
              <div className="skill--scroll">
                <Marquee
                  gradient={false}
                  speed={60}
                  pauseOnClick={true}
                  delay={0}
                  play={true}
                  direction="left"
                >
                  {skillsData.map((skill, id) => (
                    <div className="skill--box" key={id}>
                      <img
                        className="skill-image"
                        src={skillsImage(skill)}
                        alt={skill}
                      />
                      <p>{skill}</p>
                    </div>
                  ))}
                </Marquee>
              </div>
            </div>
          </Col>
          <Col md={5}>
            <div className="webimage"></div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Aboutpage;
