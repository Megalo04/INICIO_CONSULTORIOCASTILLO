import React, { useEffect, useState } from 'react';
import { Container, Dropdown, FormControl, Button } from 'react-bootstrap';
import feather from 'feather-icons';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Link } from 'react-router-dom';

const Reservar = () => {
    const [startDate, setStartDate] = useState(null);
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedTime, setSelectedTime] = useState('');

    useEffect(() => {
        feather.replace();
    }, []);

    const handleDateChange = (date) => {
        setStartDate(date);
        setShowDatePicker(false);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    return (
        <>
            <Container>
                <div className='row align-items-center'>
                    <div className="col-md-7">
                        <img
                            src="https://thancguide.org/wp-content/uploads/2022/11/patient-looking-for-doctor.png"
                            alt="Reservar Cita"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                    <div className="col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <div>
                                    <form>
                                        <div className="card text-white bg-dark mb-3 text-center">
                                            <div className="card-body">
                                                <h5 className="card-title text-uppercase">Agendar Cita</h5>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombres y Apellidos Completos:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="nombre"
                                                placeholder="Escriba aquí"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label>Tipo de Documento:</label>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <input
                                                            type="radio"
                                                            id="dni"
                                                            name="tipoDocumento"
                                                            value="dni"
                                                            defaultChecked
                                                        />
                                                        <label htmlFor="dni" className="ml-2">DNI</label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="radio"
                                                            id="ce"
                                                            name="tipoDocumento"
                                                            value="ce"
                                                        />
                                                        <label htmlFor="ce" className="ml-2">CE</label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="radio"
                                                            id="pasaporte"
                                                            name="tipoDocumento"
                                                            value="pasaporte"
                                                        />
                                                        <label htmlFor="pasaporte" className="ml-2">Pasaporte</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="numeroDocumento">Número de Documento:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                id="numeroDocumento"
                                                placeholder="Escriba aquí"
                                                required
                                            />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="fecha">Seleccionar Fecha Próxima:</label>
                                            {showDatePicker ? (
                                                <DatePicker
                                                    selected={startDate}
                                                    onChange={handleDateChange}
                                                    dateFormat="dd/MM/yyyy"
                                                    className="form-control"
                                                    placeholderText="Seleccione la fecha"
                                                    calendarClassName="date-picker-wrapper"
                                                />
                                            ) : (
                                                <div onClick={() => setShowDatePicker(true)} className="form-control">
                                                    {startDate ? startDate.toLocaleDateString() : 'Fecha de nacimiento'}
                                                </div>
                                            )}
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="hora">Horario Disponible:</label>
                                            <select
                                                id="hora"
                                                name="hora"
                                                className="form-control"
                                                value={selectedTime}
                                                onChange={handleTimeChange}
                                            >
                                                <option value="">Seleccionar hora</option>
                                                <option value="02:00">02:00</option>
                                                <option value="03:00">03:00</option>
                                                <option value="04:00">04:00</option>
                                                <option value="05:00">05:00</option>
                                                <option value="06:00">06:00</option>
                                            </select>
                                        </div>
                                        <br></br>
                                        <div className='row align-items-center'>
                                            <div className='col-md-2'> </div>
                                            <div className='col-md-5 mx-auto'>
                                                <Link to="/PaymentGateway" className="btn btn-primary" role="button">Ir a pagar</Link>
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
                </div>
            </Container>
        </>
    );
}

export default Reservar;
