import logo from './duocunaLogo.png';
import userImg from './userImg.png';
import menuCliente from './menuCliente'

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Form, Button } from 'react-bootstrap';

const login = () =>{

    <div className="App inicio">
      <div className="images">
        <img src={logo} alt="logo" id="logoDuocuna"/>
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
}

export default login