import React from 'react';

function FormProveedor() {
    //id, empresa, nitEmpresa, producto, cantidad, total, contacto
    return (
        <form>
            <div className='mb-3'>
                <label htlmFor="id" className='form-label'>ID</label>
                <input id="id" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="empresa" className='form-label'>Empresa</label>
                <input id="empresa" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="nitEmpresa" className='form-label'>Nit</label>
                <input id="nitEmpresa" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="producto" className='form-label'>Producto</label>
                <input id="producto" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="cantidad" className='form-label'>Cantidad</label>
                <input id="edcantidadad" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="total" className='form-label'>Total</label>
                <input id="total" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="contacto" className='form-label'>Contacto</label>
                <input id="contacto" className='form-control'/>
            </div>
            
            
        </form>
    );
}

export default FormProveedor;