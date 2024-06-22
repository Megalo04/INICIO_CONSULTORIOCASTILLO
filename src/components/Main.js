import React, { useState } from 'react';
import { Carousel, Container, Card, Button } from 'react-bootstrap';
import Fotos from './data/fotos.json';

function Main() {
    const [activeKey, setActiveKey] = useState(null);

    const toggleAccordion = (key) => {
        setActiveKey(activeKey === key ? null : key);
    };

    return (
        <Container style={{ padding: '20px' }}>
            <section id="inicio">
                <h1>Bienvenido al CONSULTORIO CASTILLO</h1>
            </section>

            <Carousel>
            <Carousel.Item>
                <img
                    className="foto1"
                    src="https://www.hospitaldechancay.gob.pe/files/Consultorio(1).jpg"
                    alt="primero"
                />
                <Carousel.Caption>
                    <h3>T1</h3>
                    <p>contenido1</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="foto2"
                    src="https://growmedical.org/wp-content/uploads/2021/12/Consultorio-medico-3-702x526.jpg"
                    alt="segundo"
                />
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Text for the second slide goes here.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="foto3"
                    src="https://growmedical.org/wp-content/uploads/2021/12/Consulorio-medico-1.jpg"
                    alt="tercero"
                />
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Text for the third slide goes here.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <div className="container mt-5">
    <div className="row">
        <div className="col-md-6">
            <img
                className="img-fluid"
                src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png"
                alt="Foto Izquierda"
            />
        </div>
        <div className="col-md-6">
            <h2>Hola, soy el doctor Walter Castillo</h2>
            <p>
            ¡Hola! Soy el doctor Walter Castillo, y le doy la bienvenida a mi consultorio médico. Aquí, nos dedicamos a su bienestar con atención personalizada y comprensiva. Estamos comprometidos a brindarle la mejor atención médica, enfocada en sus necesidades individuales. ¡Gracias por confiar en nosotros con su salud!
            </p>
        </div>
    </div>
</div>

            <section id="preguntas-frecuentes">
            <h2 className="mb-4">Preguntas Frecuentes</h2>
    <div className="accordion" id="faqAccordion">
        <div className="card">
            <div className="card-header bg-light" id="faqHeading1">
                <h5 className="mb-0">
                    <button
                        className="btn btn-link text-dark"
                        type="button"
                        data-toggle="collapse"
                        data-target="#faqCollapse1"
                        aria-expanded={activeKey === 0 ? "true" : "false"}
                        aria-controls="faqCollapse1"
                        onClick={() => toggleAccordion(0)}
                    >
                        ¿Cuál es el horario de atención?
                    </button>
                </h5>
            </div>
            <div
                id="faqCollapse1"
                className={activeKey === 0 ? "collapse show" : "collapse"}
                aria-labelledby="faqHeading1"
                data-parent="#faqAccordion"
            >
                <div className="card-body">
                    Nuestro horario de atención es de lunes a viernes, de 8:00 AM a 5:00 PM, y los sábados de 9:00 AM a 1:00 PM.
                </div>
            </div>
        </div>
    </div>
            </section>
            
            

            <section id="mision-vision">
                <h2>Preguntas Frecuentes</h2>
                <p>Aquí estarán las preguntas frecuentes y sus respuestas.</p>
            </section>



            <section id="contactanos">
                <h2>Preguntas Frecuentes</h2>
                <p>Aquí estarán las preguntas frecuentes y sus respuestas.</p>
            </section>

        </Container>


    );
}
export default Main;
