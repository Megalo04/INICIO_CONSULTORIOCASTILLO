import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { BsFillPersonFill, BsLockFill, BsEnvelope, BsCalendar, BsHouseDoorFill, BsTelephoneFill, BsCreditCard, BsArrowLeft } from 'react-icons/bs';

const EditProfile = ({ onClose }) => {
    const [showUploadButton, setShowUploadButton] = useState(false); // Utiliza useState para controlar la visibilidad del botón
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí iría la lógica para enviar los datos al backend
        console.log('Enviar datos al backend');
        onClose(); // Puedes cerrar el formulario después de enviar los datos
    };

    return (
        <div style={{ marginTop: '20px' }}>
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="rounded p-4" style={{ backgroundColor: '#22AED1', color: 'white' }}>
                        <h2 className="text-center mb-4">EDITAR PERFIL</h2>
                        <Form onSubmit={handleSubmit}>
                            <Row>
                                {/* Primera columna del formulario */}
                                <Col md={6}>
                                    <Form.Group controlId="formBasicNames">
                                        <Form.Label><BsFillPersonFill /> Nombres</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese sus nombres" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicLastName">
                                        <Form.Label><BsFillPersonFill /> Apellido Paterno</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su apellido paterno" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicMotherLastName">
                                        <Form.Label><BsFillPersonFill /> Apellido Materno</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su apellido materno" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicAddress">
                                        <Form.Label><BsHouseDoorFill /> Dirección</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su dirección" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPhone">
                                        <Form.Label><BsTelephoneFill /> Teléfono</Form.Label>
                                        <Form.Control type="tel" placeholder="Ingrese su teléfono" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicNewPassword">
                                        <Form.Label><BsLockFill /> Nueva Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Ingrese su nueva contraseña" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicConfirmPassword">
                                        <Form.Label><BsLockFill /> Confirmar Nueva Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Confirme su nueva contraseña" />
                                    </Form.Group>
                                </Col>

                                {/* Segunda columna del formulario */}
                                <Col md={6}>
                                    <Form.Group controlId="formBasicDocumentType">
                                        <Form.Label><BsCreditCard /> Tipo de Documento</Form.Label>
                                        <Form.Control as="select" defaultValue="">
                                            <option value="" disabled>Click para seleccionar</option>
                                            <option value="dni">DNI</option>
                                            <option value="pasaporte">Pasaporte</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicDocumentNumber">
                                        <Form.Label><BsCreditCard /> Número de Documento</Form.Label>
                                        <Form.Control type="text" placeholder="Ingrese su número de documento" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicGender">
                                        <Form.Label><BsFillPersonFill /> Género</Form.Label>
                                        <Form.Control as="select" defaultValue="">
                                            <option value="" disabled>Click para seleccionar</option>
                                            <option value="masculino">Masculino</option>
                                            <option value="femenino">Femenino</option>
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicBirthdate">
                                        <Form.Label><BsCalendar /> Fecha de Nacimiento</Form.Label>
                                        <Form.Control type="date" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label><BsEnvelope /> Email address</Form.Label>
                                        <Form.Control type="email" placeholder="Ingrese su email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicOldPassword">
                                        <Form.Label><BsLockFill /> Antigua Contraseña</Form.Label>
                                        <Form.Control type="password" placeholder="Ingrese su antigua contraseña" />
                                    </Form.Group>
                                </Col>
                            </Row>

                            {/* Botones alineados a la derecha */}
                            <div className="d-flex justify-content-end mt-3">
                                <Button variant="light" onClick={onClose} style={{ marginRight: '10px' }}>
                                    Cancelar
                                </Button>
                                <Button variant="light" type="submit">
                                    Guardar Cambios
                                </Button>
                            </div>
                        </Form>
                    </Card>
                </Col>

                 {/* Columna derecha con la imagen */}
                 <Col md={4} className="text-center" onMouseEnter={() => setShowUploadButton(true)} onMouseLeave={() => setShowUploadButton(false)}>
                    <img
                        src="https://via.placeholder.com/500"
                        alt="Perfil"
                        style={{ maxWidth: '100%', borderRadius: '50%' }}
                    />
                    {showUploadButton && (
                        <Button variant="light" className="mt-2" style={{ fontSize: '14px' }}>
                            Subir Imagen
                        </Button>
                    )}
                </Col>
            </Row>
        </div>
    );
};

export default EditProfile;