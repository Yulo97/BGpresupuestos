import React from "react";
import "../estilos/Boton.css"

function Boton({texto, functionClick, tipoBtn}) {
 return(
   <div>
    <button className={tipoBtn} onClick={functionClick}>{texto}</button>
   </div>
 );
}

export default Boton;