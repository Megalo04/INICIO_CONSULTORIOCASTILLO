import React from 'react';

const Reservar = () => {
    return (
        <div className="container">
            <div className="contenedor">
                <h1>Agendar Cita</h1>
                <div className="columna">
                    <div className="seccion">
                        <label htmlFor="nombre">Nombres y Apellidos Completos:</label>
                        <input type="text" id="nombre" name="nombre" className="form-control" placeholder="Escribe aquí" />
                    </div>
                    <div className="seccion">
                        <label htmlFor="tipoDocumento">Tipo de Documento:</label>
                        <div className="tipo-documento">
                            <input type="radio" id="dni" name="tipoDocumento" value="dni" defaultChecked />
                            <label htmlFor="dni">DNI</label>

                            <input type="radio" id="ce" name="tipoDocumento" value="ce" />
                            <label htmlFor="ce">CE</label>

                            <input type="radio" id="pasaporte" name="tipoDocumento" value="pasaporte" />
                            <label htmlFor="pasaporte">Pasaporte</label>
                        </div>
                    </div>
                    <div className="seccion">
                        <label htmlFor="numeroDocumento">Número de Documento:</label>
                        <input type="number" id="numeroDocumento" name="numeroDocumento" className="form-control" placeholder="Escribe aquí" />
                    </div>
                </div>
                <div className="columna">
                    <div className="seccion">
                        <label htmlFor="fecha">Seleccionar Fecha Proxima:</label>
                        <input type="date" id="fecha" name="fecha" className="form-control" />
                    </div>
                    <div className="seccion">
                        <label htmlFor="hora">Horario Disponible:</label>
                        <select id="hora" name="hora" className="form-control">
                            <option value="">Seleccionar hora</option>
                            <option value="02:00">02:00</option>
                            <option value="03:00">03:00</option>
                            <option value="04:00">04:00</option>
                            <option value="05:00">05:00</option>
                            <option value="06:00">06:00</option>
                        </select>
                    </div>
                </div>
                <div className="modal fade" id="ventanaEmergente" tabIndex="-1" role="dialog" aria-labelledby="ventanaEmergenteLabel" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">CANCELAR</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">CONFIRMAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reservar;
