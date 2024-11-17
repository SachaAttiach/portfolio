import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Container, Row, Col } from "react-bootstrap";
import chatlogin from "/src/assets/images/chatlogin.png";
import chat from "/src/assets/images/chat.png";

//MYOFORM
import login from "/src/assets/images/login.png";
import register from "/src/assets/images/register.png";
import home from "/src/assets/images/home.png";
import questionnaire from "/src/assets/images/questionnaire.png";
import report from "/src/assets/images/report.png";
import report2 from "/src/assets/images/report2.png";
import report3 from "/src/assets/images/report3.png";
import admin from "/src/assets/images/admin.png";

//Parallel
import alldeals from "/src/assets/images/alldeals.png";
import homepa from "/src/assets/images/homepa.png";
import lenders from "/src/assets/images/lenders.png";
import financials from "/src/assets/images/financials.png";
import documents from "/src/assets/images/documents.png";
import search from "/src/assets/images/search.png";

import "../pages/style.css";

const Projectlist = () => {
  const myoformImgs = [
    login,
    register,
    home,
    questionnaire,
    report,
    report2,
    report3,
    admin
  ];

  const parallelImgs = [
    alldeals,
    homepa,
    lenders,
    financials,
    documents,
    search,
  ]
  const chatImages = [chatlogin, chat];

  const [selectedMyoformImageIndex, setSelectedMyoformImageIndex] = useState(0);
  const [selectedChatImageIndex, setSelectedChatImageIndex] = useState(0);
  const [selectedParalellImageIndex, setSelectedParallelImageIndex] = useState(0);


  const handleMyoformImageChange = (index) => {
    setSelectedMyoformImageIndex(index);
  };

  const handleChatImageChange = (index) => {
    setSelectedChatImageIndex(index);
  };

  const handleParallelImageChange = (index) => {
    setSelectedParallelImageIndex(index);
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
                {myoformImgs.map((image, index) => (
                  <div key={index}>
                    <img src={image} alt={`Image ${index + 1}`} />
                  </div>
                ))}
              </Carousel>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={12} className="project-content">
              <h1>Real estate app</h1>
              <p>A real estate app connecting borrowers and lenders.</p>
              <p>
                Client: React, Tailwind | Server: Node JS and Express. | DB: Mongo
              </p>
              <Carousel
                selectedItem={selectedParalellImageIndex}
                onChange={handleParallelImageChange}
                showStatus={false} // Hide the status indicators
                showThumbs={true} // Hide the thumbnail navigation
              >
                {parallelImgs.map((image, index) => (
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
