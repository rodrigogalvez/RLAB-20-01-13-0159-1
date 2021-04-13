"use strict";



// Carga una imagen que podría demorar en aparecer.
function cargarImagen(estado, direccion) {
    estado.appendChild(document.createTextNode(`Cargando imagen ${direccion}...`));
    estado.appendChild(document.createElement("br"));

    return new Promise((todobien,algomal)=>{
        let img = document.getElementById("elementoImagen");
        img.onload=()=>{
            estado.appendChild(document.createTextNode(`Imagen ${direccion} cargada OK.`));
            estado.appendChild(document.createElement("br"));
            todobien(direccion);
        };
        img.onerror=()=>{
            estado.appendChild(document.createTextNode(`No se pudo cargar la imagen ${direccion}.`))
            estado.appendChild(document.createElement("br"));
            algomal(direccion);
        };
        img.src=direccion;
    });
}

function cargarImagenClick() {
    let url = document.getElementById("direccionImagen");
    let estado = document.getElementById("estadoImagen");
    cargarImagen(estado, url.value)
        .then((direccon)=>{
            console.log("Todo bien");
        })
        .catch((direccion)=>{
            console.log("Error con la imagen "+direccion)
        });
}