import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Form, Button } from 'react-bootstrap';
import { FaMobileAlt, FaCreditCard, FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import feather from 'feather-icons';


const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState('');

  const handlePaymentMethodChange = (method) => {
    setPaymentMethod(method);
  };

  const renderPaymentForm = () => {
    switch (paymentMethod) {
      case 'yape':
        return <YapeForm />;
      case 'plin':
        return <PlinForm />;
      case 'card':
        return <CardForm />;
      default:
        return null;
    }
  };

  return (
    <Container fluid className="bg-white min-vh-100 d-flex justify-content-center align-items-center">
      <Card style={{ width: '30rem' }} className="shadow">
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between mb-4">

          <Link to="/Reservar" className="text-decoration-none">
              <Button variant="link" className="d-flex align-items-center">
                <FaArrowLeft style={{ fontSize: '40px', border: '1px solid black', padding: '10px', borderRadius: '50%' }} />
              </Button>
            </Link>
            
            <h5 className="text-center mb-0" style={{ color: '#0A2045' }}>
              Seleccione su método de pago
            </h5>
            <div style={{ width: '30px' }}></div> {/* Espacio para alinear el ícono */}
          </div>
          <div className="d-flex justify-content-around mb-4">
            <Button
              variant={paymentMethod === 'yape' ? 'primary' : 'outline-primary'}
              onClick={() => handlePaymentMethodChange('yape')}
              className={paymentMethod === 'yape' ? 'active-button' : ''}
            >
              <FaMobileAlt size={30} /><br />Yape
            </Button>
            <Button
              variant={paymentMethod === 'plin' ? 'primary' : 'outline-primary'}
              onClick={() => handlePaymentMethodChange('plin')}
              className={paymentMethod === 'plin' ? 'active-button' : ''}
            >
              <FaMobileAlt size={30} /><br />Plin
            </Button>
            <Button
              variant={paymentMethod === 'card' ? 'primary' : 'outline-primary'}
              onClick={() => handlePaymentMethodChange('card')}
              className={paymentMethod === 'card' ? 'active-button' : ''}
            >
              <FaCreditCard size={30} /><br />Tarjeta
            </Button>
          </div>
          {renderPaymentForm()}
        </Card.Body>
      </Card>
    </Container>
  );
};

const YapeForm = () => {
  const [yapeNumber, setYapeNumber] = useState('');
  const [paymentApproved, setPaymentApproved] = useState(false);

  const handleYapePayment = (e) => {
    e.preventDefault();
    // Simular proceso de pago exitoso con un delay
    setTimeout(() => {
      setPaymentApproved(true);
    }, 2000);
  };

  return (
    <Form onSubmit={handleYapePayment}>
      <Form.Group controlId="yapeNumber" className="mb-3">
        <Form.Label>Número de Yape</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su número de Yape"
          value={yapeNumber}
          onChange={(e) => setYapeNumber(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      <Form.Group controlId="yapeConfirmationCode" className="mb-3">
        <Form.Label>Código de confirmación</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su código de confirmación"
          value={yapeNumber} // Aquí deberías usar el estado correcto para el código de confirmación
          onChange={(e) => setYapeNumber(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      {paymentApproved ? (
        <div className="text-center">
          <p style={{ fontWeight: 'bold' }}>Pago realizado con éxito.</p>
          {/* Usar Link para dirigir al usuario al main */}
          <Link to="/" className="btn btn-primary">Aceptar</Link>
        </div>
      ) : (
        <Button
          variant="primary" // Cambiado a "primary"
          type="submit"
          className="w-100"
          style={{ backgroundColor: '#22AED1', borderColor: '#22AED1' }} // Estilo similar a los otros botones
        >
          {paymentApproved ? 'Pago Aprobado' : 'Pagar con Yape'}
        </Button>
      )}
    </Form>
  );
};

const PlinForm = () => {
  const [plinNumber, setPlinNumber] = useState('');
  const [paymentApproved, setPaymentApproved] = useState(false);

  const handlePlinPayment = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setPaymentApproved(true);
    }, 2000);
  };

  return (
    <Form onSubmit={handlePlinPayment}>
      <Form.Group controlId="plinNumber" className="mb-3">
        <Form.Label>Número de Plin</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su número de Plin"
          value={plinNumber}
          onChange={(e) => setPlinNumber(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      <Form.Group controlId="plinApprovalCode" className="mb-3">
        <Form.Label>Código de aprobación</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingrese su código de aprobación"
          value={plinNumber}
          onChange={(e) => setPlinNumber(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      {paymentApproved ? (
        <div className="text-center">
          <p style={{ fontWeight: 'bold' }}>Pago realizado con éxito.</p>
          {/* Usar Link para dirigir al usuario al main */}
          <Link to="/" className="btn btn-primary">Aceptar</Link>
        </div>
      ) : (
        <Button
        variant="primary" // Cambiado a "primary"
        type="submit"
        className="w-100"
        style={{ backgroundColor: '#22AED1', borderColor: '#22AED1' }} // Estilo similar a los otros botones
      >
        {paymentApproved ? 'Pago Aprobado' : 'Pagar con Plin'}
      </Button>
      )}
    </Form>
  );
};


const CardForm = () => {
  const [cardName, setCardName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCVC, setCardCVC] = useState('');
  const [paymentApproved, setPaymentApproved] = useState(false);

  const handleCardPayment = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setPaymentApproved(true);
    }, 2000);
  };

  return (
    <Form onSubmit={handleCardPayment}>
      <Form.Group controlId="cardName" className="mb-3">
        <Form.Label>Nombre en la Tarjeta</Form.Label>
        <Form.Control
          type="text"
          placeholder="Nombre que figura en la tarjeta"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      <Form.Group controlId="cardNumber" className="mb-3">
        <Form.Label>Número de Tarjeta</Form.Label>
        <Form.Control
          type="text"
          placeholder="XXXX-XXXX-XXXX-XXXX"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      <Form.Group controlId="cardExpiry" className="mb-3">
        <Form.Label>Fecha de Expiración</Form.Label>
        <Form.Control
          type="text"
          placeholder="MM/AA"
          value={cardExpiry}
          onChange={(e) => setCardExpiry(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      <Form.Group controlId="cardCVC" className="mb-3">
        <Form.Label>CVC</Form.Label>
        <Form.Control
          type="text"
          placeholder="CVC"
          value={cardCVC}
          onChange={(e) => setCardCVC(e.target.value)}
          style={{ color: '#0A2045' }}
        />
      </Form.Group>
      {paymentApproved ? (
        <div className="text-center">
          <p style={{ fontWeight: 'bold' }}>Pago realizado con éxito.</p>
          {/* Usar Link para dirigir al usuario al main */}
          <Link to="/" className="btn btn-primary">Aceptar</Link>
        </div>
      ) : (
        <Button
          variant="primary"
          type="submit"
          className="w-100"
          style={{ backgroundColor: '#22AED1', borderColor: '#22AED1' }}
        >
          {paymentApproved ? 'Pago Aprobado' : 'Pagar con Tarjeta'}
        </Button>
      )}
    </Form>
  );
};


export default PaymentGateway;
