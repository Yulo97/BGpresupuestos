import React from "react";
import '../estilos/Input.css'

function Input({placeHolder, inputTipe }){
    return(
        <div>
            <input type={inputTipe} placeholder={placeHolder}></input>
        </div>
    );
}

export default Input;