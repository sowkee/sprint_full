import React from 'react';

function TableProveedor({ id, empresa, nitEmpresa, producto, cantidad, total, contacto}) {
    return (
        <table className='table' style={{marginLeft: ""}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Empresa</th>
                    <th>Nit</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Contacto</th>
                    <th>Borrar</th>
                    
                </tr>
            </thead>
            <tbody>

                <tr>
                    <td>{id}</td>
                    <td>{empresa}</td>
                    <td>{nitEmpresa}</td>
                    <td>{producto}</td>
                    <td>{cantidad}</td>
                    <td>{total}</td>
                    <td>{contacto}</td>                    
                    <td style={{cursor:"pointer"}}><span class="material-symbols-outlined">
                        delete
                    </span></td>
                </tr>

            </tbody>
        </table>
    );
}

export default TableProveedor;