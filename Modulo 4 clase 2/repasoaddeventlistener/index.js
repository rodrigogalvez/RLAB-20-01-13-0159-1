"use strict";


// patrón de diseño JS: Module.
(function () {

    let global = "hola"; 
    
    function enviarformulario() {
        console.log("enviarformulario")
        return false;
    }

    function botonenviarclick() {
        console.log("botonenviarclick")
    }

    function otrobotonclick() {
        console.log("otrobotonclick")
        console.log(global);
    }

    document.getElementById("formulario").addEventListener("submit", enviarformulario);
    document.getElementById("botonenviar").addEventListener("click", botonenviarclick);
    document.getElementById("botonnormal").addEventListener("click", otrobotonclick);
})();

