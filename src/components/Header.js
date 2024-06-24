import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header({ isLoggedIn, onLogin, onLogout, onEditProfile }) {
    const [isSticky, setSticky] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // Estado para el menú desplegable

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

    // Función para manejar la apertura y cierre del menú desplegable
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Función para manejar la acción de "Cerrar Sesión"
    const handleLogoutClick = () => {
        // Implementar la lógica para cerrar la sesión del usuario
        onLogout(); // Llamar a la función proporcionada desde props
        setDropdownOpen(false); // Cerrar el menú desplegable después de hacer clic
    };

    return (
        <Navbar expand="lg" variant="dark" className={isSticky ? 'sticky-top' : ''} style={{ backgroundColor: '#22AED1', transition: '0.3s ease-in-out' }}>
            <Container>
                <Navbar.Brand href="#" className="d-flex align-items-center">
                    <img
                        src="https://i.imgur.com/JeZJuDo.png"
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
                        {/* Botones en el centro (¿Quiénes Somos?, Preguntas Frecuentes, Contáctanos, Reservar Cita) */}
                        <Button
                            variant="link"
                            className="text-white mx-2"
                            onClick={() => scrollToSection('quienes-somos')}
                            style={{ textDecoration: 'none', fontWeight: 'normal' }}
                            onMouseEnter={(e) => e.target.style.fontWeight = 'bold'}
                            onMouseLeave={(e) => e.target.style.fontWeight = 'normal' }
                        >
                            ¿Quiénes Somos?
                        </Button>
                        <span className="text-white d-flex align-items-center mx-1">|</span>
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
                        <span className="text-white d-flex align-items-center mx-1">|</span>
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
                        <span className="text-white d-flex align-items-center mx-1">|</span>
                        
                        <Link to="/Reservar">
                        <Button
                            variant="link"
                            className="text-white mx-2"
                            onClick={() => console.log('Reservar cita')}
                            style={{ textDecoration: 'none', fontWeight: 'normal' }}
                            onMouseEnter={(e) => e.target.style.fontWeight = 'bold'}
                            onMouseLeave={(e) => e.target.style.fontWeight = 'normal' }
                        >
                            Reservar Cita
                        </Button>
                        </Link>

                    </Nav>
                    <Nav className="ml-auto">
                        {/* Condición para mostrar el menú desplegable */}
                        {isLoggedIn ? (
                            <Dropdown onToggle={toggleDropdown} show={dropdownOpen}>
                                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                                    Mi Perfil
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={onEditProfile}>Editar Perfil</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogoutClick}>Cerrar Sesión</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <>
                            <Link to="/Register">
                                <Button variant="outline-light" className="mx-2">Registrarse</Button>
                                </Link>
                                <Button variant="outline-light" className="mx-2" onClick={onLogin}>Iniciar Sesión</Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;