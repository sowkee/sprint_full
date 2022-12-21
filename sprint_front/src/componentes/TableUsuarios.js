import React from 'react';

function TableUsuarios({ id, nombre, apellido, telefono, edad, direccion, email, numDocumento, tipoDocumento }) {
    return (
        <table className='table'>
            <thead>
                <tr style={{textAlign:"center"}}>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Telefono</th>
                    <th>Edad</th>
                    <th>Direccion</th>
                    <th>Email</th>
                    <th>Numero de documento</th>
                    <th>Tipo de documento</th>
                    <th>Borrar</th>
                </tr>
            </thead>
            <tbody>

                <tr style={{textAlign:"center"}}>
                    <td>{id}</td>
                    <td>{nombre}</td>
                    <td>{apellido}</td>
                    <td>{telefono}</td>
                    <td>{edad}</td>
                    <td>{direccion}</td>
                    <td>{email}</td>
                    <td>{numDocumento}</td>
                    <td>{tipoDocumento}</td>
                    <td style={{cursor:"pointer"}}><span className="material-symbols-outlined">
                        delete
                    </span></td>
                </tr>

            </tbody>
        </table>
    );
}

export default TableUsuarios;