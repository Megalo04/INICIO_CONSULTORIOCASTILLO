import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function Header() {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Función para hacer scroll suave hasta una sección específica
    const scrollToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <Navbar expand="lg" variant="dark" className={isSticky ? 'sticky-top' : ''} style={{ backgroundColor: '#22AED1', transition: '0.3s ease-in-out' }}>
            <Container>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img
                        src="https://i.imgur.com/JeZJuDo.png"  // Nueva imagen
                        height="40"
                        className="d-inline-block align-top mr-2"
                        alt="Consultorio Castillo Logo"
                    />
                    <span style={{ lineHeight: '40px' }}>CONSULTORIO CASTILLO</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="mr-auto">
                        {/* Botones a la izquierda (Logo y nombre del consultorio) */}
                    </Nav>
                    <Nav className="mx-auto">
                        {/* Botones en el centro (Preguntas Frecuentes, Misión, Visión, Contáctanos) */}
                        <Button 
                            variant="link" 
                            className="text-white mx-2" 
                            onClick={() => scrollToSection('preguntas-frecuentes')}
                            style={{ textDecoration: 'none', fontWeight: 'normal' }}
                            onMouseEnter={(e) => e.target.style.fontWeight = 'bold'}
                            onMouseLeave={(e) => e.target.style.fontWeight = 'normal' }
                        >
                            Preguntas Frecuentes
                        </Button>
                        <span className="text-white mx-2 d-flex align-items-center">|</span>
                        <Button 
                            variant="link" 
                            className="text-white mx-2" 
                            onClick={() => scrollToSection('mision-vision')}
                            style={{ textDecoration: 'none', fontWeight: 'normal' }}
                            onMouseEnter={(e) => e.target.style.fontWeight = 'bold'}
                            onMouseLeave={(e) => e.target.style.fontWeight = 'normal' }
                        >
                            Misión y Visión
                        </Button>
                        <span className="text-white mx-2 d-flex align-items-center">|</span>
                        <Button 
                            variant="link" 
                            className="text-white mx-2" 
                            onClick={() => scrollToSection('contactanos')}
                            style={{ textDecoration: 'none', fontWeight: 'normal' }}
                            onMouseEnter={(e) => e.target.style.fontWeight = 'bold'}
                            onMouseLeave={(e) => e.target.style.fontWeight = 'normal' }
                        >
                            Contáctanos
                        </Button>
                    </Nav>
                    <Nav className="ml-auto">
                        {/* Botones a la derecha (Registro y Logueo) */}
                        <Button variant="outline-light" className="mx-2">Registrarse</Button>
                        <Button variant="outline-light" className="mx-2">Iniciar Sesión</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
