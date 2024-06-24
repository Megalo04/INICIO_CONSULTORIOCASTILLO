import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import Reservar from './components/Reservar';
import EditProfile from './components/EditProfile'; 
import PaymentGateway from './components/PaymentGateway';

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
        <Router>
            <>
                <Header isLoggedIn={isLoggedIn} onLogin={handleLogin} onLogout={handleLogout} onEditProfile={handleEditProfile} />
                <Routes>
                    <Route path="/" element={<Container fluid style={{ padding: '20px', backgroundColor: '#FFFFFF' }}>
                        {showEditProfile ? (
                            <EditProfile onClose={handleCloseEditProfile} />
                        ) : (
                            <Main />
                        )}
                    </Container>} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/Reservar" element={<Reservar />} />
                    <Route path="/PaymentGateway" element={<PaymentGateway />} />
                </Routes>
                <Footer />
            </>
        </Router>
    );
}

export default App;
