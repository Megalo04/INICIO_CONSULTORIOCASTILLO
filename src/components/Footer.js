import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
    return (
        <Container fluid style={{ backgroundColor: '#0A2045', color: '#FFFFFF', textAlign: 'center', padding: '10px 0', position: 'fixed', bottom: 0, width: '100%' }}>
            <p>&copy; 2024 CONSULTORIO CASTILLO. Todos los derechos reservados.</p>
        </Container>
    );
}

export default Footer;
