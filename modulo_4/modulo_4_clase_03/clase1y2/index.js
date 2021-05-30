"use strict";

var app = new Vue({ 
    el: "#app", 
    data: { saludo: "Hola Mundo" } 
});

var app2 = new Vue({ 
    el: "#app2", 
    data: { 
        emocion1: "desconfiado",
        emocion2: "impresionado",
        emocion3: "enamorado",
        emocion4: "aburrido"
     } 
});

var app3 = new Vue({ 
    el: "#app3", 
    data: { 
        emocion1: "desconfiado",
        emocion2: "impresionado",
        emocion3: "enamorado",
        emocion4: "aburrido",
        // colortexto: "black",
        estilocompleto: {
            color: "black",
            fontSize: "30px" //-> traduce a font-size: 30px
        },
        estaDestacado: true,
        advertenciaActivada: false,
        urlimagen: "https://miro.medium.com/max/700/1*FNghpM3llxbk9SFi9ymPug.jpeg"
     },
     mounted() {
        var corazon=["desconfiado","aburrido","impresionado","enamorado","apasionado","anonadado","extasiado","abrumado","enojado","feliz","dichoso","desconsolado"];
        var indice=Math.trunc(Math.random()*corazon.length);
        this.emocion1=corazon[indice];
        indice=Math.trunc(Math.random()*corazon.length);
        this.emocion2=corazon[indice];
        indice=Math.trunc(Math.random()*corazon.length);
        this.emocion3=corazon[indice];
        indice=Math.trunc(Math.random()*corazon.length);
        this.emocion4=corazon[indice];

        var color=["black","blue","green"];
        indice=Math.trunc(Math.random()*color.length);
        this.estilocompleto.color=color[indice];
        console.log("Color Actual", this.estilocompleto.color);
    }
});

