"use strict";

function validar() {

    var nom = document.getElementById("nom");
    var verificacion = document.getElementById("verificacion");
    var telefono = document.getElementById("telefono");
    var resultado = true;

    verificacion.innerHTML = "";

    if (nom.value.split(/\s+/g).length!=2) {
        verificacion.appendChild(document.createTextNode("Se pide el nombre y el apellido"))
        resultado = false;
    }

    if (telefono.value.length != 12) {
        verificacion.appendChild(document.createTextNode("El teléfono debe tener 12 caracteres"))
        resultado = false;
    }

    if (!telefono.value.startsWith("+")) {
        verificacion.appendChild(document.createTextNode("El teléfono debe comenzar con '+'"))
        resultado = false;

    }

    return resultado;
}