import React from "react";
import '../estilos/Input.css'

function Input({name, placeHolder, inputTipe }){
    return(
        <div>
            <input id={name} type={inputTipe} placeholder={placeHolder}></input>
        </div>
    );
}

export default Input;