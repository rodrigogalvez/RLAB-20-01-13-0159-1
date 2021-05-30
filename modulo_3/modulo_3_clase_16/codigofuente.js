"use strict";

function agregar() {
    var lista = document.getElementById("listaprincipal");
    
    var item = document.createElement("li");
    var hijonumero= lista.childElementCount + 1 ;
    var textoDelItem= document.createTextNode("Nuevo ítem "+ hijonumero+"!");

    var boton = document.createElement("button");
    var textoboton = document.createTextNode("Remover");
    boton.onclick = eliminar;
    boton.appendChild(textoboton);

    
    item.appendChild(textoDelItem);
    item.appendChild(boton);
    lista.appendChild(item);
    
}

function eliminar(evento) {
    evento.target.parentNode.remove();
}