"use strict";

//Mostrar una lista de palabras con JS Vanilla
let palabras = ["Gato", "Perro", "Elefante"];

function listanormal() {
    palabras.forEach(
        (palabra)=>{
            let nuevo = document.createElement("p");
            nuevo.innerText=palabra;
            document.getElementById("salida").appendChild(nuevo);
        }
    )
}
listanormal();

let app = new Vue({
    el: "#app",
    data:{
        palabras: ["Gato", "Perro", "Elefante"]
    }
})