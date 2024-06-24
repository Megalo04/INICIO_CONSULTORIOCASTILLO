import React, { useState } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import AccordionItem from './AccordionItem';

function Main() {
    const [activeKeys, setActiveKeys] = useState({});

    const toggleAccordion = (key) => {
        setActiveKeys(prevActiveKeys => ({
            ...prevActiveKeys,
            [key]: !prevActiveKeys[key]
        }));
    };

    return (
        <Container style={{ padding: '20px' }}>
            <section id="inicio">
                <h1>BIENVENIDO AL CONSULTORIO CASTILLO</h1>
            </section>

            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto" // Cambiado el ancho a w-75 (75% del contenedor)
                        src="https://www.hospitaldechancay.gob.pe/files/Consultorio(1).jpg"
                        alt="Primera foto"
                    />
                    <Carousel.Caption>
                        <h3>Foto 1</h3>
                        <p>Inicios del consultorio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto" // Cambiado el ancho a w-75 (75% del contenedor)
                        src="https://growmedical.org/wp-content/uploads/2021/12/Consultorio-medico-3-702x526.jpg"
                        alt="Segunda foto"
                    />
                    <Carousel.Caption>
                        <h3>Foto 2</h3>
                        <p>Evolución del consultorio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto" // Cambiado el ancho a w-75 (75% del contenedor)
                        src="https://growmedical.org/wp-content/uploads/2021/12/Consulorio-medico-1.jpg"
                        alt="Tercera foto"
                    />
                    <Carousel.Caption>
                        <h3>Foto 3</h3>
                        <p>Equipamento del consultorio</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-75 mx-auto" // Cambiado el ancho a w-75 (75% del contenedor)
                        src="https://img.freepik.com/fotos-premium/doctor-feliz-manos-pacientes-mayores_13339-107592.jpg"
                        alt="cuarta foto"
                    />
                    <Carousel.Caption>
                        <h3>Foto 4</h3>
                        <p>Pacientes felices</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-6">
                        <img
                            className="img-fluid"
                            src="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png"
                            alt="Foto del Doctor"
                        />
                    </div>
                    <div className="col-md-6">
                        <section id="quienes-somos" className="mt-5">
                            <h2>Hola, soy el doctor Walter Castillo</h2>
                            <p style={{ textAlign: 'justify' }}>
                                ¡Hola! Soy el doctor Walter Castillo, y le doy la bienvenida a mi consultorio médico. Aquí, nos dedicamos a su bienestar con atención personalizada y comprensiva. Estamos comprometidos a brindarle la mejor atención médica, enfocada en sus necesidades individuales. ¡Gracias por confiar en nosotros con su salud!
                            </p>
                        </section>
                    </div>
                </div>
            </div>

            <section id="preguntas-frecuentes" className="mt-5">
                <div className="row">
                    <div className="col-md-4">
                        <AccordionItem 
                            active={activeKeys[11]} 
                            toggleAccordion={() => toggleAccordion(11)} 
                            question="Misión"
                            answer="Nuestra misión es proporcionar atención médica integral y de calidad, centrada en el paciente, promoviendo su bienestar físico, emocional y social en un ambiente cálido y acogedor. Nos comprometemos a ofrecer soluciones médicas efectivas y humanizadas, manteniendo la compasión y la dedicación como pilares fundamentales de nuestra práctica."
                        />
                    </div>
                    <div className="col-md-4">
                        <AccordionItem 
                            active={activeKeys[22]} 
                            toggleAccordion={() => toggleAccordion(22)} 
                            question="Visión"
                            answer="Ser reconocidos como líderes indiscutibles en la prestación de servicios médicos de excelencia, destacándonos por nuestra dedicación incansable a la innovación, la mejora continua y el cuidado integral del paciente. Aspiramos a ser el referente insuperable en nuestra comunidad, ofreciendo soluciones médicas efectivas, humanizadas y vanguardistas."
                        />
                    </div>
                    <div className="col-md-4">
                        <AccordionItem 
                            active={activeKeys[33]} 
                            toggleAccordion={() => toggleAccordion(33)} 
                            question="Valores"
                            answer="En nuestro consultorio médico, nos guiamos por la compasión hacia nuestros pacientes, la integridad en nuestra práctica profesional, la colaboración en nuestro equipo, y la innovación en la mejora continua de nuestros servicios médicos. Estos valores fundamentales son la base de nuestra relación con los pacientes y colegas, y guían cada aspecto de nuestra práctica médica."
                        />
                    </div>
                </div>
            </section>

            <div className="my-5"></div>
            <h2>Preguntas Frecuentes</h2>
            <div className="accordion" id="faqAccordion">
                <AccordionItem 
                    active={activeKeys[0]} 
                    toggleAccordion={() => toggleAccordion(0)} 
                    question="¿Cuál es el horario de atención?"
                    answer="Nuestro horario de atención es de lunes a viernes, de 8:00 AM a 5:00 PM, y los sábados de 9:00 AM a 1:00 PM."
                />
                <AccordionItem 
                    active={activeKeys[1]} 
                    toggleAccordion={() => toggleAccordion(1)} 
                    question="¿Cómo puedo agendar una cita?"
                    answer="Puedes agendar una cita llamando a nuestro consultorio o usando nuestro sistema de citas en línea en nuestra página web."
                />
                <AccordionItem 
                    active={activeKeys[2]} 
                    toggleAccordion={() => toggleAccordion(2)} 
                    question="¿Qué documentos necesito llevar a mi primera consulta?"
                    answer="Por favor, trae tu identificación, tarjeta de seguro médico (si tienes), y cualquier registro médico relevante."
                />
                <AccordionItem 
                    active={activeKeys[3]} 
                    toggleAccordion={() => toggleAccordion(3)} 
                    question="¿Aceptan seguros médicos? ¿Cuáles?"
                    answer="Sí, aceptamos varios seguros médicos. Por favor, contáctanos para verificar si aceptamos tu seguro específico."
                />
                <AccordionItem 
                    active={activeKeys[4]} 
                    toggleAccordion={() => toggleAccordion(4)} 
                    question="¿Cuál es la política de cancelación de citas?"
                    answer="Agradecemos un aviso de al menos 24 horas antes de cancelar una cita para que podamos programar a otro paciente en ese horario."
                />
                <AccordionItem 
                    active={activeKeys[5]} 
                    toggleAccordion={() => toggleAccordion(5)} 
                    question="¿Qué tipos de tratamientos y servicios ofrecen?"
                    answer="Ofrecemos una amplia gama de tratamientos médicos, incluyendo exámenes de rutina, consultas de especialistas, vacunas, y más."
                />
                <AccordionItem 
                    active={activeKeys[7]} 
                    toggleAccordion={() => toggleAccordion(7)} 
                    question="¿Cómo puedo obtener una receta médica?"
                    answer="Puedes obtener una receta médica durante tu consulta con nuestro médico o solicitándola a través de nuestro portal en línea."
                />
                <AccordionItem 
                    active={activeKeys[8]} 
                    toggleAccordion={() => toggleAccordion(8)} 
                    question="¿Realizan pruebas de laboratorio en el consultorio?"
                    answer="Sí, realizamos algunas pruebas de laboratorio en el consultorio. Para pruebas más especializadas, colaboramos con laboratorios externos."
                />
                <AccordionItem 
                    active={activeKeys[9]} 
                    toggleAccordion={() => toggleAccordion(9)} 
                    question="¿Cómo puedo acceder a mis resultados médicos?"
                    answer="Puedes acceder a tus resultados médicos a través de nuestro portal en línea o llamando a nuestro consultorio y solicitándolos."
                />
                <AccordionItem 
                    active={activeKeys[10]} 
                    toggleAccordion={() => toggleAccordion(10)} 
                    question="¿Qué debo hacer en caso de una emergencia médica?"
                    answer="En caso de una emergencia médica, llama al número de emergencias de tu área o dirígete al hospital más cercano. Si es posible, contáctanos después para que podamos seguir tu caso."
                />

            </div>
        
          

        </Container>


    );
}
export default Main;
