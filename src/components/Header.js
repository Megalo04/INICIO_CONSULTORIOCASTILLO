import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button, Dropdown } from 'react-bootstrap';

function Header() {
    const [isSticky, setSticky] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación
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

    // Función para reservar cita
    const reservarCita = () => {
        // Implementar lógica para reservar la cita
        console.log('Reservar cita');
    };

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        // Aquí podrías implementar la lógica de autenticación (por ejemplo, mostrar un formulario de inicio de sesión)
        setIsLoggedIn(true); // Simulando que el usuario inició sesión
    };

    // Función para manejar el cierre de sesión
    const handleLogout = () => {
        // Aquí podrías implementar la lógica para cerrar la sesión del usuario
        setIsLoggedIn(false); // Simulando que el usuario cerró sesión
    };

    // Función para manejar la apertura y cierre del menú desplegable
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    // Función para manejar la acción de "Editar Perfil"
    const handleEditProfile = () => {
        // Implementar la lógica para editar el perfil
        console.log('Editar perfil');
        setDropdownOpen(false); // Cerrar el menú desplegable después de hacer clic
    };

    // Función para manejar la acción de "Cerrar Sesión"
    const handleLogoutClick = () => {
        // Implementar la lógica para cerrar la sesión del usuario
        console.log('Cerrar sesión');
        setIsLoggedIn(false); // Simulando que el usuario cerró sesión
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
                        <Button
                            variant="link"
                            className="text-white mx-2"
                            onClick={reservarCita}
                            style={{ textDecoration: 'none', fontWeight: 'normal' }}
                            onMouseEnter={(e) => e.target.style.fontWeight = 'bold'}
                            onMouseLeave={(e) => e.target.style.fontWeight = 'normal' }
                        >
                            Reservar Cita
                        </Button>
                    </Nav>
                    <Nav className="ml-auto">
                        {/* Condición para mostrar el menú desplegable */}
                        {isLoggedIn ? (
                            <Dropdown onToggle={toggleDropdown} show={dropdownOpen}>
                                <Dropdown.Toggle variant="outline-light" id="dropdown-basic">
                                    Mi Perfil
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={handleEditProfile}>Editar Perfil</Dropdown.Item>
                                    <Dropdown.Item onClick={handleLogoutClick}>Cerrar Sesión</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        ) : (
                            <>
                                <Button variant="outline-light" className="mx-2">Registrarse</Button>
                                <Button variant="outline-light" className="mx-2" onClick={handleLogin}>Iniciar Sesión</Button>
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;