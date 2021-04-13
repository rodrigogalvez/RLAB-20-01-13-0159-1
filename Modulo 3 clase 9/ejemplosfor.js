"use strict";

// detalles sobre los arreglos

function arregloconfori() {
    var amigos = ["pedro", "juan", "diego"];
    for (var i=0; i<amigos.length; i++) {
        console.log(amigos[i]);
    }
}

function arregloconforof() {
    var amigos = ["pedro", "juan", "diego"];
    for (var amigo of amigos) {
        console.log(amigo);
    }
}

function arregloconforeach() {
    var amigos = ["pedro", "juan", "diego"];
    function mostrar(amigo) {
        console.log(amigo);
    }
    amigos.forEach(mostrar);
}

function casoespecialllaves() {
    var amigos = {
        "pedro": { edad: 25},
        "juan" : { edad: 35},
        "diego": { edad: 37}
    }
    for (var amigo in amigos) {
        console.log("El amigo "+amigo+" tiene "+ amigos[amigo].edad + " años de edad.");
    }
    console.log(amigos[0]); // da undefined porque nadie se lama 0.
    console.log(amigos["pedro"]); // da lo contiene el objeto "pedro"
}

arregloconfori();
arregloconforof();
arregloconforeach();
casoespecialllaves();