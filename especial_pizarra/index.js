"use strict";
// https://developer.mozilla.org/es/docs/Web/API/CanvasRenderingContext2D

let lienzo = document.querySelector("canvas.lienzo");
let dibujando = false;
let x=0;
let y=0;

let contexto=lienzo.getContext("2d");

function iniciar(event) {
    dibujando= true;
    x=event.offsetX;
    y=event.offsetY;
}

function terminar(event) {
    dibujando = false;
}

function rayar(event) {

    if (dibujando) {

        contexto.beginPath();
        contexto.lineWidth = 10;
        contexto.lineCap = "round";
        contexto.lineJoin = "round";
        contexto.strokeStyle = "#990000";
        contexto.fillStyle = "#990000"; 
        contexto.moveTo(x,y);
        contexto.lineTo(event.offsetX,event.offsetY);
        contexto.stroke();

        x=event.offsetX;
        y=event.offsetY;
    }
}

lienzo.addEventListener("mousedown",iniciar);
lienzo.addEventListener("mouseup",terminar);
lienzo.addEventListener("mousemove",rayar);