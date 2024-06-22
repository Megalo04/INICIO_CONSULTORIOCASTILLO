import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FiMapPin, FiPhone, FiMail, FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

function Footer() {
    return (
        <footer id="contactanos" style={{ backgroundColor: '#0A2045', color: '#FFFFFF', marginTop: '50px', padding: '20px 0' }}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Información de Contacto</h5>
                        <p><FiMapPin /> Dirección: Urb. San José De Santa Inés, Calle "La Perla", Trujillo</p>
                        <p><FiPhone /> Teléfono: (123) 456-7890</p>
                        <p><FiMail /> Email: ConsultorioCastillo@outlook.com</p>
                    </Col>
                    <Col md={6}>
                        <h5>Redes Sociales</h5>
                        <p>
                            <a href="#" className="text-white d-block mb-2" style={{ textDecoration: 'none' }}>
                                <FiFacebook /> Facebook
                            </a>
                            <a href="#" className="text-white d-block mb-2" style={{ textDecoration: 'none' }}>
                                <FiTwitter /> Twitter
                            </a>
                            <a href="#" className="text-white d-block" style={{ textDecoration: 'none' }}>
                                <FiInstagram /> Instagram
                            </a>
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p style={{ textAlign: 'center', marginTop: '20px' }}>© {new Date().getFullYear()} Consultorio Castillo. Todos los derechos reservados.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;
