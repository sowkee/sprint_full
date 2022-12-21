import React, { Fragment, useState, useEffect } from 'react';
import Navbar from './componentes/Navbar';
import TabList from './componentes/Tablist';
import TableUsuarios from './componentes/TableUsuarios';
import TableProductos from './componentes/TableProductos';
import TableProveedor from './componentes/TableProveedor';
import FormUsuarios from './componentes/FormUsuarios';
import FormProductos from './componentes/FormProductos';
import FormProveedor from './componentes/FormProveedor';
import axios from 'axios';





function App() {


  const [datos, setDatos] = useState([]);

  useEffect(() => {
    const usuario = ["admin", "cajero", "cliente", "producto", "proveedor", "vendedor"];
    async function fetchData() {

      const response = await axios.get(`http://localhost:9000/api/${usuario}`);
      setDatos(response.datos);
    }



    fetchData(usuario[0]);
    fetchData(usuario[1]);
    fetchData(usuario[2]);
    fetchData(usuario[3]);
    fetchData(usuario[4]);
    fetchData(usuario[5]);
  }, [])


  return (
    <Fragment>
      <Navbar brand="Tienda G23" />
      <div className='container'>
        <div className='row'>
          <div className='col-10'>

            <TabList>

              <div label="Admins">
                <TableUsuarios
                  id="1"
                  nombre="prueba"
                  apellido="prueba"
                  telefono="prueba "
                  edad="prueba "
                  direccion="prueba"
                  email="prueba "
                  numDocumento="prueba"
                  tipoDocumento="prueba"

                />

                <div className='col-5'>
                  <FormUsuarios />

                </div>
              </div>

              <div label="Cajeros">
                <TableUsuarios
                  id="1"
                  nombre="prueba"
                  apellido="prueba"
                  telefono="prueba "
                  edad="prueba "
                  direccion="prueba"
                  email="prueba "
                  numDocumento="prueba"
                  tipoDocumento="prueba" />

                <div className='col-5'>
                  <FormUsuarios />

                </div>
              </div>

              <div label="Clientes">
                <TableUsuarios
                  id="1"
                  nombre="prueba"
                  apellido="prueba"
                  telefono="prueba "
                  edad="prueba "
                  direccion="prueba"
                  email="prueba "
                  numDocumento="prueba"
                  tipoDocumento="prueba" />

                <div className='col-5'>
                  <FormUsuarios />

                </div>
              </div>

              <div label="Productos">
                <TableProductos
                  id="1"
                  nombre="prueba"
                  descripcion="prueba"
                  categoria="prueba"
                  precioVenta="prueba"
                  precioCompra="prueba"
                  proveedor="prueba"
                  stockMinimo="prueba"
                />

                <div className='col-5'>
                  <FormProductos />
                </div>
              </div>

              <div label="Proveedores">
                <TableProveedor
                  id="1"
                  empresa="prueba"
                  nitEmpresa="prueba"
                  producto="prueba"
                  cantidad="prueba"
                  total="prueba"
                  contacto="prueba"
                />

                <div className='col-5'>
                  <FormProveedor />
                </div>
              </div>

              <div label="Vendedores">
                <TableUsuarios
                  id="1"
                  nombre="prueba"
                  apellido="prueba"
                  telefono="prueba "
                  edad="prueba "
                  direccion="prueba"
                  email="prueba "
                  numDocumento="prueba"
                  tipoDocumento="prueba" />

                <div className='col-5'>
                  <FormUsuarios />
                </div>
              </div>

            </TabList>

          </div>


        </div>
      </div>

    </Fragment>
  );

}

export default App;
