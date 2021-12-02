import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React from "react";

import logo from './duocunaLogo.png';
import userImg from './userImg.png';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button, Accordion } from 'react-bootstrap';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/menuCliente" element={<Menu />} />
        <Route path="/formNewHijo" element={<FormNewHijo />} />
        <Route path="/formNewUsuario" element={<FormNewUsuario />} />
        <Route path="/cuidadores" element={<Cuidadores />} />
      </Routes>
    </Router>
  );
}

const Login = () => {
  return (

    <div className="App inicio">
      <div className="images">
        <img src={logo} alt="logo" id="logoDuocuna" />
        <img src={userImg} alt="user image" />
      </div>
      <Form className="centrar">
        <Form.Group className="mb-3 izq" controlId="formBasicEmail">
          <Form.Label className="blanco">Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted">
            Para mayor seguridad, no comparta sus credenciales.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 izq" controlId="formBasicPassword">
          <Form.Label className="blanco">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit" >
          <a className="blanco" href="./menuCliente"> Entrar </a>
        </Button>
      </Form>
      <div className="amarillo">
        <br />
        Aún no tienes DuoCuenta?
        <br />
        <a className="amarillo" href="./FormNewUsuario"> Registrate Aquí </a>
      </div>

    </div>
  )
}

const Menu = () => {
  return (

    <div className="App">
      <div className="navBar">
        <img src={logo} alt="logo" id="logoDuocuna" />
      </div>
      <h1 className="titulos" >NIÑOS REGISTRADOS</h1>
      <Accordion defaultActiveKey="0" className="accordionMargin">
        <Accordion.Item eventKey="0">
          <Accordion.Header><div className="amarillo">Manuel Díaz</div></Accordion.Header>
          <Accordion.Body className="data">
            <p>Nombre: Manuel Alejandro Díaz Saavedra</p>
            <p>Edad: 8</p>
            <p>Meidcamentos: Ninguno</p>
            <p>Alergias: Ninguna</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><div className="amarillo">Mauricio Gimimimi</div></Accordion.Header>
          <Accordion.Body className="data">
            <p>Nombre: Mauricio Cristiando Gimimimi Ferrera</p>
            <p>Edad: 7</p>
            <p>Meidcamentos: Clonazepam</p>
            <p>Alergias: Aines</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div className="grupoBotones">
        <Button className="buttonNuevoHijo" size="lg" href="./formNewHijo">
          +
        </Button>

        <Button className="buttonSalir" size="lg" href="./">
          Cerrar Sesión
        </Button>
      </div>


    </div>
  );
}

const FormNewHijo = () => {
  return (
    <div className="App">
      <div className="navBar">
        <img src={logo} alt="logo" id="logoDuocuna" />
      </div>
      <h1 className="titulos" >REGISTRAR HIJO</h1>

      <Form className="centrar formMargin">
        <Form.Group className="mb-3 izq" controlId="formBasicEmail">
          <Form.Label className="amarillo">Nombre</Form.Label>
          <Form.Control type="email" placeholder="Nombre Completo" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 izq" controlId="formBasicPassword">
          <Form.Label className="amarillo">Edad</Form.Label>
          <Form.Control type="number" placeholder="Edad" />
        </Form.Group>

        <Form.Group className="mb-3 izq" controlId="formBasicPassword">
          <Form.Label className="amarillo">Medicamentos</Form.Label>
          <Form.Control type="text" placeholder="Medicamentos" />
        </Form.Group>

        <Form.Group className="mb-3 izq" controlId="formBasicPassword">
          <Form.Label className="amarillo">Alergias</Form.Label>
          <Form.Control type="text" placeholder="Alergias" />
        </Form.Group>

        <Form.Group controlId="formFileMultiple" className="mb-3 izq">
          <Form.Label className="amarillo">Recetas medicas</Form.Label>
          <Form.Control type="file" multiple />
        </Form.Group>

        <Button variant="primary" type="submit" >
          <a className="blanco" href="./menuCliente"> Agregar </a>
        </Button>
      </Form>


    </div>

  )
}

const FormNewUsuario = () => {
  return (
    <div className="App">
      <div className="navBar">
        <img src={logo} alt="logo" id="logoDuocuna" />
      </div>
      <h1 className="titulos" >REGISTRAR USUARIO</h1>

      <Form className="centrar formMargin">
        <Form.Group className="mb-3 izq" controlId="formBasicEmail">
          <Form.Label className="amarillo">Rut</Form.Label>
          <Form.Control type="email" placeholder="Nombre Completo" />
          <Form.Text className="text-muted">
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3 izq" controlId="formBasicPassword">
          <Form.Label className="amarillo">Correo</Form.Label>
          <Form.Control type="email" placeholder="Correo" />
        </Form.Group>

        <Form.Group className="mb-3 izq" controlId="formBasicPassword">
          <Form.Label className="amarillo">Contraseña</Form.Label>
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Form.Group className="mb-3 izq" controlId="formBasicPassword">
          <Form.Label className="amarillo">Telefono</Form.Label>
          <Form.Control type="number" placeholder="Telefono" />
        </Form.Group>

        <Button variant="primary" type="submit" className="buttonRegistrar" >
          <a className="blanco" href="./"> Registrarme </a>
        </Button>
      </Form>


    </div>

  )
}

const Cuidadores = () => {
  return (

    <div className="App">
      <div className="navBar">
        <img src={logo} alt="logo" id="logoDuocuna" />
      </div>
      <h1 className="titulos" >NIÑOS REGISTRADOS</h1>

      <Accordion defaultActiveKey="0" className="accordionMargin">
        <Accordion.Item eventKey="0">
          <Accordion.Header><div className="amarillo">Manuel Díaz</div></Accordion.Header>
          <Accordion.Body className="data">
            <p>Nombre: Manuel Alejandro Díaz Saavedra</p>
            <p>Edad: 8</p>
            <p>Meidcamentos: Ninguno</p>
            <p>Alergias: Ninguna</p>
            <p>Contacto: +56 9 4271 4842</p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><div className="amarillo">Mauricio Gimimimi</div></Accordion.Header>
          <Accordion.Body className="data">
            <p>Nombre: Mauricio Cristiando Gimimimi Ferrera</p>
            <p>Edad: 7</p>
            <p>Meidcamentos: Clonazepam</p>
            <p>Alergias: Aines</p>
            <p>Contacto: +56 9 3424 7457</p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default App;

