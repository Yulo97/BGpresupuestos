import './App.css';
import Boton from "./componentes/Boton.js"
import Input from "./componentes/Input"

import { useState } from "react";

function App() {

  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");


  const iniciarSesion = e => {

    e.preventDefault();

    setUserName(document.getElementById("inputName").value);
    setUserPass(document.getElementById("inputPass").value);
    
    iniciarSesion2();
  }

  const iniciarSesion2 = () => {
    alert('User: ' + userName + " // Pass: " + userPass);
  }

  const crearUsuario = () => {
    console.log("creando usuario")
  }

  return (
    <div className="App">
      <div className='contenedorTitular'>
        <h2>Black Gestion</h2>
        <h1>Presupuestos</h1> 
      </div> 

      <Input name="inputName" inputTipe="email" placeHolder="Email"/>
      <Input name="inputPass" inputTipe="password" placeHolder="Contraseña"/>

      <div className='contenedorBtnSesion'>
        <Boton tipoBtn="inicioSesion" texto="Iniciar Sesion" functionClick={iniciarSesion}/>
        <Boton tipoBtn="nuevaCuenta" texto="Crear Usuario" functionClick={crearUsuario}/>
      </div>

      <Boton tipoBtn="inicioSesion" texto="Login whith Google" functionClick={iniciarSesion}/>

    </div>
  );
}

export default App;
