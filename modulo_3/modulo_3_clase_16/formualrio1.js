"use strict";

function nom_check() {
    var nom = document.getElementById("nom");
    if (nom.value.split(/\s+/g).length!=2) {
        nom.setCustomValidity("Se pide el nombre y el apellido");
        nom.reportValidity();
    } else {
        nom.setCustomValidity("");
    }
}

function telefono_check() {
    var telefono = document.getElementById("telefono");

    telefono.setCustomValidity("");

    if (telefono.value.length != 12) {
        telefono.setCustomValidity("el teléfono debe tener 12 caracteres");
        telefono.reportValidity();
        // verificacion.appendChild(document.createTextNode("El teléfono debe tener 12 caracteres"))
    }

    if (!telefono.value.startsWith("+")) {
        telefono.setCustomValidity("El teléfono debe comenzar con +");
        telefono.reportValidity();
        // verificacion.appendChild(document.createTextNode("El teléfono debe comenzar con '+'"))
    }
}

function validar() {

    // var verificacion = document.getElementById("verificacion");
    var resultado = false;

    // verificacion.innerHTML = "";
    // nom.setCustomValidity("");
    // telefono.setCustomValidity("");

    // if (nom.value.split(/\s+/g).length!=2) {
    //     nom.setCustomValidity("Se pide el nombre y el apellido");
    //     nom.reportValidity();
    //     // verificacion.appendChild(document.createTextNode("Se pide el nombre y el apellido"))
    //     resultado = false;
    // }

    // if (telefono.value.length != 12) {
    //     telefono.setCustomValidity("el teléfono debe tener 12 caracteres");
    //     nom.reportValidity();
    //     // verificacion.appendChild(document.createTextNode("El teléfono debe tener 12 caracteres"))
    //     resultado = false;
    // }

    // if (!telefono.value.startsWith("+")) {
    //     telefono.setCustomValidity("El teléfono debe comenzar con +");
    //     nom.reportValidity();
    //     // verificacion.appendChild(document.createTextNode("El teléfono debe comenzar con '+'"))
    //     resultado = false;

    // }

       
    return resultado;
}