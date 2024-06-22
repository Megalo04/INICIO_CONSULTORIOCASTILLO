import React from 'react';
import { Form, Button } from 'react-bootstrap';

const EditProfile = ({ onClose }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí iría la lógica para enviar los datos al backend
        console.log('Enviar datos al backend');
        // onClose(); // Puedes cerrar el formulario después de enviar los datos
    };

    return (
        <div>
            <h2>Editar Perfil</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Nombre" />
                </Form.Group>

                <Form.Group controlId="formBasicAddress">
                    <Form.Label>Dirección</Form.Label>
                    <Form.Control type="text" placeholder="Dirección" />
                </Form.Group>

                {/* Más campos del formulario según necesidad */}

                <Button variant="primary" type="submit">
                    Guardar Cambios
                </Button>{' '}
                <Button variant="secondary" onClick={onClose}>
                    Cancelar
                </Button>
            </Form>
        </div>
    );
};

export default EditProfile;
