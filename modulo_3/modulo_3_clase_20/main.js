"use strict";

// Ejercicio básico de Set:
// let pouch = new Set();
// pouch.add('Manzanas');
// console.log(pouch.size);// >1

// pouch.add('Plátanos');
// console.log(pouch.size);// >2

// pouch.add('Peras');
// console.log(pouch.size);// >3

// pouch.add('Peras');
// console.log(pouch.size);// >3 la segunda Peras no seagrega.

// Clase persona:
class Persona {
    constructor(nombre, rut, edad) {
        this.nombre = nombre;
        this.rut = rut;
        this.edad = edad;
    }
    // Buena práctica: crear un método toString() para que el objeto salga con el foramto que más nos sirve.
    toString() {
        return `Nombre: ${this.nombre}, RUT: ${this.rut}, Edad: ${this.edad}`;
        // return "Nombre: " + this.nombre + ", RUT: "+ this.rut + ", Edad: "+ this.edad;
    }
}

// Clase Grupo: sirve para crear grupos, como un curso o grupo de afinidad.
class Grupo {
    constructor() {
        this.memoria=[];
    };
    // agrega una persona a la memoria.
    agregarPersona(persona) {
        this.memoria.push(persona);
    };
    // busca una persona por nombe exacto.
    buscarPorNombre(nombre) {
        // forma larga:
        // var result=[];
        // this.memoria.forEach((persona)=>{
        //     if (persona.nombre==nombre) {
        //         result.push(persona);
        //     }
        // })
        // return result;

        // forma corta (mejor): usa el método filter() de los arreglos para aplicar una función flecha donde compara el nombre ingresado como parámetro con el nombre de la persona (pesona.nombre).
        // filter() retorna un arreglo donde los elementos son tales que la función flecha dio verdadero para ese elemento.
        return this.memoria.filter((persona)=>persona.nombre==nombre);
    };
    buscarPorRut(rut) {
        // usa el método fitler() para aplicar una función flecha que compara el rut ingresado con el rut de la persona.
        return this.memoria.filter((persona)=>persona.rut==rut);
    };
    buscarPorEdad(edadMenor,edadMayor) {
        // usa el método filter() para aplicar una función flecha que compara si la edad de la persona está entre dos edades.
        return this.memoria.filter((persona)=>persona.edad>=edadMenor&&persona.edad<=edadMayor);
    };
    // crea un Set con los nombres de las personas sin repetir.
    nombreSinRepetir() {
        // forma larga:
        // var nombres=new Set();
        // this.memoria.forEach((persona)=>nombres.add(persona.nombre));
        // return nombres;
        // forma corta:
        return new Set(this.memoria.map((persona)=>persona.nombre));
    };
    // convierte el grupo en una cadena de texto con formato.
    toString() {
        // Forma larga:
        // var resultado="";
        // this.memoria.forEach(
        //     (persona)=> {
        //         resultado+=persona+"\n";
        //         // resultado+=persona.toString()+"\n";
        //     }
        // )
        // return resultado;

        // forma mediana:
        // return this.memoria.map((persona)=>persona.toString()).join("\n");

        // forma corta:
        return this.memoria.join("\n");
    }
}

// tres personas específicas para hacer pruebas.
let alex = new Persona("Alex","1-9", 25);
let hithamar = new Persona("Hithamar","2-9", 28);
let cristina = new Persona("Cristina","3-9", 22);

// crea un nuego grupo llamado grupoJavaScript:
let grupoJavaScript=new Grupo();

// agrego personas al grupo:
grupoJavaScript.agregarPersona(alex);
grupoJavaScript.agregarPersona(hithamar);
grupoJavaScript.agregarPersona(cristina);
grupoJavaScript.agregarPersona(new Persona("Rodrigo", "4-9",30));
grupoJavaScript.agregarPersona(new Persona("Juan", "5-9",35));
grupoJavaScript.agregarPersona(new Persona("Rodrigo", "6-9",45));
grupoJavaScript.agregarPersona(new Persona("Joaquin", "7-9",32));

// Demostraciones:
// Ejecuto diferentes consultas:
console.log("Buscar por nombre=Alex");
console.log(grupoJavaScript.buscarPorNombre("Alex"));
console.log("Buscar por nombre=Rodrigo");
console.log(grupoJavaScript.buscarPorNombre("Rodrigo"));
console.log("Buscar por rut=5-9");
console.log(grupoJavaScript.buscarPorRut("5-9"));
console.log("Buscar por edad entre 30 y 40 años");
console.log(grupoJavaScript.buscarPorEdad(30,40));
console.log("Listado de alumnos");
console.log(grupoJavaScript.toString());
console.log("Nombres sin repetir");
console.log(grupoJavaScript.nombreSinRepetir());

// Ejercicio nuevo repaso de Set y Array:
// 1) Agregar a la persona un nuevo atributo llamado correo.
// 2) Agregar un filtro al Grupo para buscar por correo con un dominio específico.
//    Sugerencia: usar el método include() de string.
// 3) Agregar un método al Grupo para obtener todos los dominios de los correos sin repetir.
//    Sugerencia: usar el método split() de string.
// Ayuda: 
//    https://www.w3schools.com/js/js_es6.asp información sobre ES6.
//    https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/String/includes método includes()
//    https://www.w3schools.com/jsref/jsref_split.asp método split()
// Nota: agrege algunas demostraciones.
