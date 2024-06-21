import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer id="footer" style={{ backgroundColor: '#0A2045', color: '#FFFFFF', marginTop: '50px', padding: '20px 0' }}>
            <Container>
                <Row>
                    <Col md={6}>
                        <h5>Información de Contacto</h5>
                        <p>Dirección: Av. Principal 123, Ciudad</p>
                        <p>Teléfono: (123) 456-7890</p>
                        <p>Email: consultorio@castillo.com</p>
                    </Col>
                    <Col md={6}>
                        <h5>Redes Sociales</h5>
                        {/* Aquí puedes agregar íconos o enlaces a tus redes sociales */}
                        <p>Facebook | Twitter | Instagram</p>
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
