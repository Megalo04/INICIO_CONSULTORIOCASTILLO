import React from 'react';
import { Button, Navbar, Container } from 'react-bootstrap';

function Header() {
    return (
        <Navbar style={{ backgroundColor: '#22AED1' }} variant="dark">
            <Container>
                <Navbar.Brand href="#">CONSULTORIO CASTILLO</Navbar.Brand>
                <div>
                    <Button variant="dark" className="mx-2">Registrar</Button>
                    <Button variant="dark" className="mx-2">Logueo</Button>
                    <Button variant="dark" className="mx-2">Reserva tu cita aquí</Button>
                </div>
            </Container>
        </Navbar>
    );
}

export default Header;
