import React, { useEffect, useState } from 'react';
import { Container, Dropdown, FormControl, Button, Navbar} from 'react-bootstrap';
import feather from 'feather-icons';
import { Eye, EyeOff } from 'react-feather';
import { Link } from 'react-router-dom';

const Login = () => {
    const [selectedItem, setSelectedItem] = useState('DNI'); // Estado para el ítem seleccionado
    const [showPassword, setShowPassword] = useState(false); // Estado de la contraseña
    const [isSticky, setSticky] = useState(false); // Estado para el sticky navbar

    useEffect(() => {
        feather.replace();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleSelect = (eventKey) => {
        setSelectedItem(eventKey);
    };

    // Función para alternar la visibilidad de la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <>
            <Container>
                <div className='row align-items-center'>
                    <div className="col-md-8">
                        <img
                            src="https://medicaelmarques.com/wp-content/uploads/2021/05/teleconsultaRecurso-5@3x.png"
                            alt="Iniciar sesión"
                            style={{ width: '90%', height: 'auto' }}  // Ajusta el tamaño aquí
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <form>
                                        <div className="card text-white bg-dark mb-3 text-center">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase">Iniciar Sesión</h5>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="correo">Tipo de Documento:</label>
                                            <div className="container">
                                                <Dropdown onSelect={handleSelect}>
                                                    <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 bg-white border">
                                                        {selectedItem}
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu className="w-100">
                                                        <Dropdown.Item eventKey="DNI">DNI</Dropdown.Item>
                                                        <Dropdown.Item eventKey="PASAPORTE">PASAPORTE</Dropdown.Item>
                                                        <Dropdown.Item eventKey="CARNE DE EXTRANJERÍA">CARNE DE EXTRANJERÍA</Dropdown.Item>
                                                        <Dropdown.Item eventKey="DOCUMENTO DE IDENTIDAD EXTRANJERA">DOCUMENTO DE IDENTIDAD EXTRANJERA</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="form-group">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-1">
                                                        <p style={{ marginBottom: '5px' }}></p>
                                                        <i className="feather" data-feather="user"></i>
                                                    </div>
                                                    <div className="col-md-11">
                                                        <input
                                                            type="number"
                                                            className="form-control"
                                                            id="números"
                                                            placeholder="Número de documento"
                                                            required
                                                        ></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="form-group">
                                            <label htmlFor="password">Contraseña:</label>
                                            <div className="form-group">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-1">
                                                            <p style={{ marginBottom: '5px' }}></p>
                                                            <i className="feather" data-feather="lock"></i>
                                                        </div>
                                                        <div className="col-md-11">
                                                            <div className="input-group">
                                                                <FormControl
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    placeholder="Ingrese aquí su contraseña"
                                                                    required
                                                                />
                                                                <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                                </Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className='row align-items-center'>
                                            <div className='col-md-1'> </div>
                                            <div className='col-md-5 mx-auto'>
                                                <Link to="/" className="btn btn-primary" role="button">Iniciar Sesión</Link>
                                            </div>
                                        </div>

                                        <div className='row justify-content-center'>
                                            <div className='col-md-7 text-end'> ¿Aun no tienes una cuenta? </div>
                                            <div className='col-md-5 mx-auto'>
                                                <Link to="/register" className="link-opacity-10-hover">Registrarse</Link>
                                            </div>
                                        </div>

                                        <div className="col-md-1">
                                            <p style={{ marginBottom: '5px' }}></p>
                                            <Link to="/" className="text-decoration-none">
                                                <i className="feather" data-feather="arrow-left" style={{ fontSize: '30px' }}></i>
                                            </Link>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </Container >
        </>
    );
}

export default Login;