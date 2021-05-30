"use strict";

function validar() {

    let nombre = document.getElementById("nombre");
    let mensaje = document.getElementById("mensaje");

    mensaje.innerHTML = "";

    // TODO: terminar el ejercicio con color

    if (nombre.value == "") {
        mensaje.appendChild(
            document.createTextNode("El nombre está vacío")
        )
    } else {
        mensaje.appendChild(
            document.createTextNode("El nombre es " + nombre.value)
        )
    }

    return false;
}
