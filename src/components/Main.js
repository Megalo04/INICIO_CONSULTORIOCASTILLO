import { Carousel } from 'react-bootstrap';
import React from 'react';
import { Container } from 'react-bootstrap';
import Fotos from './data/fotos.json'

function Main() {
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
            Me complace darle la bienvenida a mi consultorio médico. Con una dedicación incansable hacia el cuidado de la salud y el bienestar de mis pacientes, mi equipo y yo nos esforzamos por proporcionar atención médica integral y personalizada a cada persona que nos visita.

            En nuestro consultorio, nos comprometemos a crear un ambiente acogedor y comprensivo, donde usted se sienta cómodo y seguro mientras abordamos sus preocupaciones de salud. Desde exámenes de rutina hasta tratamientos especializados, estamos aquí para brindarle el más alto nivel de atención médica, combinando conocimientos actualizados con un enfoque empático y compasivo.

            En cada consulta, nos esforzamos por establecer una relación de confianza con nuestros pacientes, escuchando atentamente sus inquietudes y trabajando juntos para desarrollar planes de tratamiento que se adapten a sus necesidades individuales. Su salud y bienestar son nuestra máxima prioridad, y estamos aquí para apoyarlo en cada paso del camino.

            Gracias por confiar en nosotros con su cuidado médico. Esperamos poder acompañarlo en su viaje hacia una vida más saludable y feliz.

            ¡Bienvenido a nuestro consultorio!
            </p>
        </div>
    </div>
</div>


            <section id="preguntas-frecuentes">
                <h2>Preguntas Frecuentes</h2>
                <p>Aquí estarán las preguntas frecuentes y sus respuestas.</p>
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
