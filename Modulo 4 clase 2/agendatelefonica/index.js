"use strict";

class Contacto {
    constructor(nombre, telefono) {
        this.nombre = nombre;
        this.telefono = telefono
    }
    toString() {
        return "Nombre: " + this.nombre + ", Teléfono: " + this.telefono;
    }
}

class Agenda {
    constructor() {
        this.contactos = [];
    }
    agregar(contacto) {
        this.contactos.push(contacto);
    }
    mostrarTodo() {
        // this.contactos.forEach(mostrarUno);
        // function mostrarUno(contacto) {
        //     console.log(contacto.toString());
        // }
        this.contactos.forEach((contacto) => console.log(contacto.toString()));
    }
    mostrarDiv(div, contactos) { // <-- contactos es un parámetro opcional
        // let THIS = this; <-- no es necesario porque la función flecha mantiene el this.
        div.innerHTML = "";
        if (!contactos) { // <-- si contactos viene vacío o no se indica, se asume que son todos los contactos de la agenda los que serán mostrados.
            contactos = this.contactos;
        }

        contactos.forEach((contacto) => {
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(contacto.toString()));
            let b = document.createElement('button');
            b.innerText = "X";
            b.addEventListener('click', () => {
                // THIS.removerPorNombre(contacto.nombre); <-- no es necesario por que la función flecha no pierte del this.
                this.removerPorNombre(contacto.nombre);
                p.remove();
            })
            p.appendChild(b);
            div.appendChild(p);
        });
    }
    removerPorNombre(nombre) {
        let index = this.contactos.findIndex((contacto) => contacto.nombre == nombre);
        if (index > -1) {
            this.contactos.splice(index, 1);
        }
    }
    buscarPorNombre(nombreparcial) {
        return this.contactos.filter((contacto) => contacto.nombre.includes(nombreparcial));
    }
    buscarPorTelefono(telefonoparcial) {
        return this.contactos.filter((contacto) => contacto.telefono.includes(telefonoparcial));
    }
}

// Crear agenda principal
let agenda = new Agenda();
// Agregar contactos de ejempo.
agenda.agregar(new Contacto("Rodrigo Galvez","67876"));
agenda.agregar(new Contacto("Rodrigo Carrasco","98300"));
agenda.agregar(new Contacto("Alex Carrasco","78900"));

function agregarClick() {
    let todoOK = true; // asume que está todo ok
    errores.innerHTML = "";

    if (nombre.value.length == 0) {
        errores.innerHTML += "El nombre no puede estar vacío.<br>";
        todoOK = false; // no está ok
    }

    if (telefono.value.length < 3) {
        errores.innerHTML += "El teléfono debe tener al menos tres números.<br>";
        todoOK = false; // no está ok.
    }

    if (todoOK) // si está todo ok se agrega el contacto.
        agenda.agregar(new Contacto(nombre.value, telefono.value))
    else // sino, muestra este mensaje.
        errores.innerHTML += "El contacto no fue agregado.<br>"
}

function mostrarClick() {
    agenda.mostrarDiv(contactos);
}

// mostrardiv tiene dos parámetros. El segundo es el resultado de la búsqueda por nombre.
function buscarNombreClick() {
    agenda.mostrarDiv(contactos, agenda.buscarPorNombre(busquedanombre.value));
}

// mostrardiv tiene dos parámetros. El segundo es el resultado de la búsqueda por teléfono.
function buscarTelefonoClick() {
    agenda.mostrarDiv(contactos, agenda.buscarPorTelefono(busquedatelefono.value));
}