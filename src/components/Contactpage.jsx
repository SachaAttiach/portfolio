import { Container } from "react-bootstrap";
import "../pages/style.css";

function Contactpage() {
  const openWhatsApp = () => {
    const phoneNumber = "+972586010704";
    const message = "Hello, I saw your website, awesome stuff!";

    const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappLink);
  };

  return (
    <div className="contactbackground">
      <Container>
        <h2 className="contacthead">Get In Touch</h2>
        <p className="contactpara">
          I'm actively seeking exciting full-stack opportunities where I can
          bring my skills to the forefront and make a meaningful impact. <br />
          If you're ready to explore collaboration or have an opportunity in
          mind, click the button below to get in touch with me.
          <br /> Let's embark on this coding adventure together!
        </p>
        <button className="contactbtn" onClick={openWhatsApp}>
          Contact Me
        </button>
      </Container>
    </div>
  );
}

export default Contactpage;
