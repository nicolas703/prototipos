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
          <a href="./menuCliente"> Entrar </a>
        </Button>
      </Form>

    </div>
  )
}

const Menu = () => {
  return (

    <div className="App">
      <div className="navBar">
        <img src={logo} alt="logo" id="logoDuocuna" />
      </div>

      <Accordion defaultActiveKey="0" className="accordionMargin">
        <Accordion.Item eventKey="0">
          <Accordion.Header><div className="amarillo">Manuel Díaz</div></Accordion.Header>
          <Accordion.Body>
            Mi hijo uno
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header><div className="amarillo">Mauricio Gimimimi</div></Accordion.Header>
          <Accordion.Body>
            Mijo 2
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      
      <Button clasName="buttonNuevoHijo" size="lg">
        +
      </Button>

    </div>
  );
}

export default App;

