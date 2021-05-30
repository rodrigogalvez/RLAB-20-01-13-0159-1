"use strict";

/*
4)	Realice una página que, mediante JavaScript sea capaz de mostrar el siguiente mensaje cada vez que se presione la tecla ñ en un input: “Solo el español tiene Ñ, de hecho la palabra español se escribe con Ñ, entonces ¿el abecedario español precede al idioma español?” 
*/

// let entradas = document.getElementsByClassName("entrada");
let entradas = document.getElementsByTagName("input");

let entrada;
for (entrada of entradas) {
    entrada.addEventListener('keypress',detectarEnie);
}

function detectarEnie(evento) {
    // console.log(evento);

    if (evento.key=="ñ"||evento.key=="Ñ") {
        console.log("Solo el español tiene Ñ, de hecho la palabra español se escribe con Ñ, entonces ¿el abecedario español precede al idioma español?");
    }
}