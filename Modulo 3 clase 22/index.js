"use strict";

// Clase Producto: permite describir un producto con código y nombre.
// El constructor requiere dos parámetros: código y nombre.
// El método toString() convierte el producto en cadena de texto.
class Producto {
    constructor(codigo, nombre) {
        this.codigo = codigo;
        this.nombre = nombre;
    }
    toString() {
        return this.codigo + " - " + this.nombre;
    }
}

// Ejemplo con el método antiguo para crear un canasto.
// El canasteo es un arreglo que llenamos con los productos que estamos creando.

// let canasto=[];
// function agregarCanasto(producto) {
//     canasto.push(producto);
// }

// function mostrarProductos() {
//     canasto.forEach(mostrarUno);

//     function mostrarUno(producto) {
//         console.log(producto.toString());
//     }
// }

// agregarCanasto( new Producto(1,"Manzanas"));
// agregarCanasto( new Producto(2,"Peras"));
// agregarCanasto( new Producto(3,"Plátanos"));

// mostrarProductos();

// Este es el ejemplo mejorado con POO.
// la clase Canasto contiene los productos en un arreglo.
// Para agregar productos al canasto se usa el método agregar()
// Para mostrar en consoloa, el método mostrarTodo()
// Para mostrar en un DIV, el método mostrarDiv()

class Canasto {
    constructor() {
        this.productos = [];
    }
    agregar(producto) {
        this.productos.push(producto);
    }
    mostrarTodo() {
        this.productos.forEach(mostrarUno);
        function mostrarUno(producto) {
            console.log(producto.toString());
        }
    }
    mostrarDiv(div) {
        let THIS = this;
        div.innerHTML = "";
        this.productos.forEach(mostrarUno);
        function mostrarUno(producto) {
            // importante: como el nombre del producto lo ingresa el usuario,
            // se debe usar createTextNode para evitar que nos hackeen la página.

            // Crear elemento P que contiene el texto del producto más el botón de eliminar.
            let p = document.createElement('p');
            p.appendChild(document.createTextNode(producto.toString()));
            // Crear elemento BUTTON que permite eleminiar el producto.
            let b = document.createElement('button');
            b.innerText="X";
            // Asociar la función borrar al evento CLICK del botón.
            b.addEventListener('click',borrar)
            // Agregar el botón al párrafo.
            p.appendChild(b);

            // agregar el párrafo al DIV.
            div.appendChild(p);

            // Esta función borra el producto cuando se presiona el botón con la X.
            // Se aprovecha del scope porque está declarada dentro de otra función, dentro del método mostrarDiv()
            function borrar() {
                THIS.removerCodigo(producto.codigo);
                // Solo las variables THIS, producto y p sobreviven en el scope de borrar().
                // Si descomenta la línea siguiente, entonces b también sobrevive.
                // b.remove();
                p.remove();
            }

        }
    }
    removerCodigo(codigo) {
        // this.productos arreglo con productos.
        // function coincideCodigo(producto) {
        //     return producto.codigo == codigo;
        // }
        // let index=this.productos.findIndex(coincideCodigo);
        let index=this.productos.findIndex((producto)=>producto.codigo==codigo);
        if (index>-1) {
            this.productos.splice(index,1);
        }
    }
}


// Crear una instancia de un canasto. La variable que contiene la referencia a la instacia se llama canasto.
let canasto = new Canasto();

// Agregarmos algunos productos de manera predeterminada.
canasto.agregar(new Producto(1,"Manzanas"));
canasto.agregar(new Producto(2,"Peras"));
canasto.agregar(new Producto(3,"Plátanos"));
// Mostramos en consola.
canasto.mostrarTodo();

// Este es el método del botón "Agregar". 
function agregarClick() {
    // Notar que el input text del código se llama id="codigo". Entonces lo puedo usar directamente en el JavaScript. No es necesario hacer document.getElementById() en este caso.
    // Pasa lo mismo con el input text del nombre, que se llama id="nombre".
    canasto.agregar(new Producto(parseInt(codigo.value),nombre.value))
}

// Este es el método del botón "Mostrar productos".
function mostrarClick() {
    // el DIV con nombre id="productos", también lo puedo usar directamente en el JavaScript.
    canasto.mostrarDiv(productos);
}





// var miauto = { marca: 'Honda'};
// var otroauto = { marca: 'Honda'};

// if (miauto==otroauto) {
//     console.log("Son iguales")
// } else {
//     console.log("Son distintos")
// }