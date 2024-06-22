import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import EditProfile from './components/EditProfile';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación
    const [showEditProfile, setShowEditProfile] = useState(false); // Estado para mostrar el formulario de edición

    // Función para manejar el inicio de sesión
    const handleLogin = () => {
        setIsLoggedIn(true); // Simulando que el usuario inició sesión
    };

    // Función para manejar la acción de "Editar Perfil"
    const handleEditProfile = () => {
        setShowEditProfile(true); // Mostrar el formulario de edición
    };

    // Función para cerrar sesión
    const handleLogout = () => {
        setIsLoggedIn(false); // Simulando que el usuario cerró sesión
        setShowEditProfile(false); // Asegúrate de ocultar el formulario de edición si está abierto
    };

    // Función para cerrar el formulario de edición
    const handleCloseEditProfile = () => {
        setShowEditProfile(false); // Ocultar el formulario de edición
    };

    return (
        <>
            <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} onEditProfile={handleEditProfile} />
            <Container fluid style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
                {showEditProfile ? (
                    <EditProfile onClose={handleCloseEditProfile} />
                ) : (
                    <Main />
                )}
            </Container>
            <Footer />
        </>
    );
}

export default App;
