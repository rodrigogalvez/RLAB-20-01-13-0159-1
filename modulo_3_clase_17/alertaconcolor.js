"use strict";

// Borrar mensajes anteriores.
// Elimina el contendio del elemento llamado mensaje.
function borrarMensajes() {
    let mensaje = document.getElementById("mensaje");
    mensaje.innerHTML="";
}

// Agrega nuevos mensajes con color.
// Crea un nuevo elemento P, le agrega el texto del mensaje y le cambia el color.
// Finalmente, agrega este elemento P al div de los mensajes.
function nuevoMensaje(textoMensaje, colorMensaje) {
    let mensaje = document.getElementById("mensaje");
    let nuevoMensaje = document.createElement("p");
    nuevoMensaje.appendChild(
        document.createTextNode(textoMensaje)
    )
    nuevoMensaje.style.color=colorMensaje;
    mensaje.appendChild(nuevoMensaje);
}

// Importante: usar con cuidado innerHTML, porque puede recibir código malicioso, inyección de código.
// mensaje.innerHTML="El nombre es " + nombre.value; <-- esto se puede hackear!!

// Verifica que el formulario cumple con las reglas de negocio:
//   1) el nombre no debe estar vacío.
//   2) la edad debe ser entre 18 y 99 años.
// Borra los mensajes previos, confirma que hay texto en el recuadro nombre y agrega un mensaje en colo verde. Si no es sí (recuadro nombre está vacío), agrega un mensaje en color rojo.
// Confirma que hay texto en el recuadro edad, y luego si esta edad está entre 18 y 99. Si es así, agrega un mensaje en color verde. Si no es así, agrega un mensaje en color rojo.
function validar() {

    let nombre = document.getElementById("nombre");
    let edad = document.getElementById("edad2");

    borrarMensajes();
    
    if (nombre.value == "") {
        nuevoMensaje("El nombre está vacío", "red");
    } else {
        nuevoMensaje("El nombre es " + nombre.value, "green");
    }

    if (edad.value=="") {
        nuevoMensaje("La edad está vacía", "red");
    } else {
        let edadnumero= parseInt(edad.value);
        if (edadnumero>=18&&edadnumero<=99) {
            nuevoMensaje("La edad es "+ edad.value, "green");
        } else {
            nuevoMensaje("La edad debe estar entre 18 y 99 años", "red");
        }
    }
    return false;
}
