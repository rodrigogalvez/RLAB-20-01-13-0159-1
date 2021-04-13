"use strict";

let parrafo1 = document.getElementsByClassName("parrafo1");
let parrafo2 = document.getElementsByClassName("parrafo2");
let parrafo3 = document.getElementsByClassName("parrafo3");
let parrafo4 = document.getElementsByClassName("parrafo4");

let parrafos = document.getElementsByClassName("parrafo");

var parrafo;

console.log(parrafo1.length);

for (parrafo of parrafo1) {
    parrafo.addEventListener("click", digaSI);
}

for (parrafo of parrafo2) {
    parrafo.addEventListener("click", digaAVECES);
}

for (parrafo of parrafo3) {
    parrafo.addEventListener("click", digaGracias);
}

for (parrafo of parrafo4) {
    parrafo.addEventListener("click", digaHorario);
}

for (parrafo of parrafos) {
    parrafo.addEventListener("mouseover", mouseOver);
}


function digaSI() {
    alert("SI");
}

function digaAVECES() {
    alert("A veces");
}

function digaGracias() {
    alert("Gracias");
}

function digaHorario() {
    alert("El horario es de 08:30 a 13:45");
}

function mouseOver(evento) {
    let mensaje = document.getElementsByClassName("mensajes")[0];

    mensaje.innerHTML="";
    mensaje.appendChild(document.createTextNode("Parado donde dice "+evento.target.innerText));
}