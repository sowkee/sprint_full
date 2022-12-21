import React from 'react';

function TableProductos({ id, nombre, descripcion, categoria, precioVenta, precioCompra, proveedor, stockMinimo}) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripcion</th>
                    <th>Categoria</th>
                    <th>Precio de Venta</th>
                    <th>Precio de Compra</th>
                    <th>proveedor</th>
                    <th>Stock minimo</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>{id}</td>
                    <td>{nombre}</td>
                    <td>{descripcion}</td>
                    <td>{categoria}</td>
                    <td>{precioVenta}</td>
                    <td>{precioCompra}</td>
                    <td>{proveedor}</td>
                    <td>{stockMinimo}</td>
                    <td style={{cursor:"pointer"}}><span class="material-symbols-outlined">
                        delete
                    </span></td>
                </tr>

            </tbody>
        </table>
    );
}

export default TableProductos;