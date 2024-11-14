import 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <Container className="mx-auto">
        <Row className="footer-row">
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Datos de la Empresa</h5>
            <p>Información de la empresa</p>
          </Col>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Google Maps</h5>
            <iframe
              src="https://www.google.com/maps/embed?..."
              width="100%"
              height="200"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Col>
          <Col md={4} className="footer-col">
            <h5 className="footer-title">Redes Sociales</h5>
            <ul className="footer-socials">
              <li><a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#" target="_blank"><i className="fab fa-instagram"></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;

