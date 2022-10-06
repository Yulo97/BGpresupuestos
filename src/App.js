import './App.css';
import Boton from "./componentes/Boton.js"
import Input from "./componentes/Input"

function App() {

  const iniciarSesion = () => {
    console.log('inicaste sesion')
  }

  const crearUsuario = () => {
    console.log("creando usuario")
  }

  return (
    <div className="App">
      <h2>Black Gestion</h2>
      <h1>Presupuestos</h1> 

      <Input inputTipe="email" placeHolder="Email"/>
      <Input inputTipe="password" placeHolder="Contraseña"/>

      <div>
        <Boton tipoBtn="inicioSesion" texto="Iniciar Sesion" functionClick={iniciarSesion}/>
        <Boton tipoBtn="nuevaCuenta" texto="Crear Usuario" functionClick={crearUsuario}/>
      </div>

      <Boton tipoBtn="inicioSesion" texto="Login whith Google" functionClick={iniciarSesion}/>

    </div>
  );
}

export default App;
