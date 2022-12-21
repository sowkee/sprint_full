import React from 'react';

function FormProductos() {
    //id, nombre, descripcion, categoria, precioVenta, precioCompra, proveedor, stockMinimo
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
                <label htlmFor="categoria" className='form-label'>Categoria</label>
                <input id="categoria" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="precioVenta" className='form-label'>Precio de venta</label>
                <input id="precioVenta" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="precioCompra" className='form-label'>Precio de compra</label>
                <input id="precioCompra" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="proveedor" className='form-label'>Proveedor</label>
                <input id="proveedor" className='form-control'/>
            </div>
            <div className='mb-3'>
                <label htlmFor="stockMinimo" className='form-label'>Stock minimo</label>
                <input id="stockMinimo" className='form-control'/>
            </div>                                  
        </form>
    );
}

export default FormProductos;