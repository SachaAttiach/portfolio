import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from "react-bootstrap";
import admin from "/src/assets/images/admin.png";
import fat from "/src/assets/images/fatsenstitivity.png";
import myoform from "/src/assets/images/myoform.png";
import nutrition from "/src/assets/images/nutrition.png";
import questionnaire from "/src/assets/images/questionnaire.png";
import settings from "/src/assets/images/settings.png";
import report from "/src/assets/images/report.png";
import chatlogin from "/src/assets/images/chatlogin.png";
import chat from "/src/assets/images/chat.png";

import "../pages/style.css";

const Projectlist = () => {
  const mockImages = [
    myoform,
    questionnaire,
    admin,
    report,
    nutrition,
    fat,
    settings,
  ];
  const chatImages = [chatlogin, chat];

  const [selectedMyoformImageIndex, setSelectedMyoformImageIndex] = useState(0);
  const [selectedChatImageIndex, setSelectedChatImageIndex] = useState(0);

  const handleMyoformImageChange = (index) => {
    setSelectedMyoformImageIndex(index);
  };

  const handleChatImageChange = (index) => {
    setSelectedChatImageIndex(index);
  };

  return (
    <div className="projectbackground">
      <Container fluid className="project-section">
        <Container>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-content">
              <h1>Myoform.io</h1>
              <p>
                An app that combines nutrition, training, and genetic data for a
                personalized genetic report on sports performance. Discover how
                your unique genome influences your athletic abilities and
                receive customized supplement recommendations for an informed
                and optimized approach to fitness.
              </p>
              <p>
                Client: React, MUI | Server: Python and Flask. | DB: SQLAlchemy
              </p>
              <Carousel
                selectedItem={selectedMyoformImageIndex}
                onChange={handleMyoformImageChange}
                showStatus={false} // Hide the status indicators
                showThumbs={true} // Hide the thumbnail navigation
              >
                {mockImages.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-content">
              <h1>Basketball Chat</h1>
              <p>A slack recreation for basketball chat. sockets.</p>
              <p>
                Client: React, MUI | Server: Node JS and Express. | DB: Stream
              </p>
              <Carousel
                selectedItem={selectedChatImageIndex}
                onChange={handleChatImageChange}
                showStatus={false} // Hide the status indicators
                showThumbs={true} // Hide the thumbnail navigation
              >
                {chatImages.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Projectlist;
