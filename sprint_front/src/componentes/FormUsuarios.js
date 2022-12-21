import React from 'react';

function FormUsuarios() {
    //id, nombre, apellido, telefono, edad, direccion, email, numDocumento, tipoDocumento
    return (
        <form>
            <div className='mb-3'>
                <label htlmFor="id" className='form-label'>id</label>
                <input id="id" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="nombre" className='form-label'>Nombre</label>
                <input id="nombre" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="apellido" className='form-label'>Apellido</label>
                <input id="apellido" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="telefono" className='form-label'>Telefono</label>
                <input id="telefono" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="edad" className='form-label'>Edad</label>
                <input id="edad" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="direccion" className='form-label'>Direccion</label>
                <input id="direccion" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="email" className='form-label'>Email</label>
                <input id="email" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="numDocumento" className='form-label'>Numero de documento</label>
                <input id="numDocumento" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="tipoDocumento" className='form-label'>Tipo de documento</label>
                <input id="tipoDocumento" className='form-control'/>
            </div>
            
        </form>
    );
}

export default FormUsuarios;