import React, { useEffect, useState } from 'react';
import { Container, Dropdown, FormControl, Button, Navbar } from 'react-bootstrap';
import feather from 'feather-icons';
import { Eye, EyeOff } from 'react-feather';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';


const Register = () => {
    const [selectedItem, setSelectedItem] = useState('DNI'); // Estado para el ítem seleccionado
    const [selectedItem1, setSelectedItem1] = useState('Género');
    const [showPassword, setShowPassword] = useState(false); // Estado de la contraseña
    const [isSticky, setSticky] = useState(false); // Estado para el sticky navbar
    const [startDate, setStartDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);

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

    const handleSelect1 = (eventKey) => {
        setSelectedItem1(eventKey);
    };

    // Función para alternar la visibilidad de la contraseña
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleDateChange = (date) => {
        setStartDate(date);
        setShowDatePicker(false);
    };

    return (
        <>
            <Container>
                <div className='row align-items-center'>
                    <div className="col-md-7">
                        <img
                            src="https://thancguide.org/wp-content/uploads/2022/11/patient-looking-for-doctor.png"
                            alt="Registrar Cliente"
                            style={{ width: '100%', height: 'auto' }}  // Ajusta el tamaño aquí
                        />
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <form>
                                        <div className="card text-white bg-dark mb-3 text-center">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase">Registrar</h5>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="correo">Datos del Paciente:</label>
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
                                            <div className="container">
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="nombres"
                                                        placeholder="Escriba aquí sus nombres"
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="form-group">
                                            <div className="container">
                                                <div className='row'>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="apellidoPaterno"
                                                            placeholder="Apellido Paterno"
                                                            required
                                                        ></input>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="apellidoMaterno"
                                                            placeholder="Apellido Materno"
                                                            required
                                                        ></input>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>


                                        <div className="form-group">
                                            <div className="container-fluid">
                                                <div className='row'>
                                                    <div className='col-md-6'>
                                                        <Dropdown onSelect={handleSelect1}>
                                                            <Dropdown.Toggle variant="light" id="dropdown-basic" className="w-100 bg-white border">
                                                                {selectedItem1}
                                                            </Dropdown.Toggle>
                                                            <Dropdown.Menu className="w-100">
                                                                <Dropdown.Item eventKey="Masculino">Masculino</Dropdown.Item>
                                                                <Dropdown.Item eventKey="Femenino">Femenino</Dropdown.Item>
                                                                <Dropdown.Item eventKey="Otros">Otros</Dropdown.Item>
                                                            </Dropdown.Menu>
                                                        </Dropdown>
                                                    </div>
                                                    <div className='col-md-5'>
                                                        {showDatePicker ? (
                                                            <DatePicker
                                                                selected={startDate}
                                                                onChange={handleDateChange}
                                                                dateFormat="dd/MM/yyyy"
                                                                className="form-control w-100"
                                                                placeholderText="Seleccione su fecha de nacimiento"
                                                                calendarClassName="date-picker-wrapper"
                                                            />
                                                        ) : (
                                                            <div onClick={() => setShowDatePicker(true)} className="form-control w-100">
                                                                {startDate ? startDate.toLocaleDateString() : 'Fecha de nacimiento'}
                                                            </div>
                                                        )}
                                                    </div>
                                                    <div className="col-md-1">
                                                        <p style={{ marginBottom: '5px' }}></p>
                                                        <i className="feather" data-feather="calendar" style={{ fontSize: '20px', border: '1px solid black', padding: '5px', borderRadius: '50%' }}></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className="form-group">
                                            <div className="container">
                                                <div className="col-md-12">
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="direccion"
                                                        placeholder="Escriba aqui su dirección"
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                        <p></p>
                                        <div className='container-fluid'>
                                            <div className='row'>
                                                <div className='col-md-6'>
                                                    <div className="input-group mb-3">
                                                        <select className="form-select col" id="countryCode" aria-label="Código de país">
                                                            <option value="+51">+51 (Perú)</option>
                                                            <option value="+1">+1 (Estados Unidos)</option>
                                                            <option value="+44">+44 (Reino Unido)</option>
                                                            <option value="+33">+33 (Francia)</option>
                                                            <option value="+81">+81 (Japón)</option>
                                                            <option value="+86">+86 (China)</option>
                                                            <option value="+61">+61 (Australia)</option>
                                                            <option value="+52">+52 (México)</option>
                                                        </select>
                                                        <input type="number" className="form-control" aria-label="Número de teléfono" placeholder="Número de teléfono" />
                                                    </div>
                                                </div>
                                                <div className='col-md-6'>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="text"
                                                        placeholder="Email"
                                                        required
                                                    ></input>
                                                </div>
                                            </div>
                                        </div>
                                
                                        <div className="form-group">
                                            <label htmlFor="password">Contraseña:</label>
                                            <div className="form-group">
                                                <div className="container">
                                                    <div className="row">
                                                        <div className="col-md-6">
                                                            <div className="input-group">
                                                                <FormControl
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    placeholder="Ingresar contraseña"
                                                                    required
                                                                />
                                                                <Button variant="outline-secondary" onClick={togglePasswordVisibility}>
                                                                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                                                </Button>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6">
                                                            <div className="input-group">
                                                                <FormControl
                                                                    type={showPassword ? 'text' : 'password'}
                                                                    placeholder="Repita su contraseña"
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
                                            <div className='col-md-2'> </div>
                                            <div className='col-md-5 mx-auto'>
                                                <Link to="/" className="btn btn-primary" role="button">Registrarse</Link>
                                            </div>
                                        </div>
                                        <div className='row justify-content-center'>
                                            <div className='col-md-7 text-end'> ¿Ya tienes una cuenta? </div>

                                            <div className='col-md-5 mx-auto'>
                                                <Link to="/login" className="link-opacity-10-hover">Iniciar Sesión</Link>
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

export default Register;
