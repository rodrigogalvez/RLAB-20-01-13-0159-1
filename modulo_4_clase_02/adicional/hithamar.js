function agregar() {
    // var mensaje = '';
    var texto_nombre = document.getElementById('nom').value //aca obtenemos el nombre del producto
    var texto_valor = document.getElementById('valor').value //aca obtenemos el precio
    var texto_cant = document.getElementById('cant').value //aca obtenemos la cantidad

    let todoOK = true;

    if (texto_nombre == "") {
        var errorNombre = document.createElement('p');
        errorNombre.innerHTML = 'INGRESE UN PRODUCTO';
        document.getElementById("nombre1").appendChild(errorNombre);
        todoOK = false;
    }

    if (texto_valor == "" || isNaN(texto_valor)) {
        var errorvalor = document.createElement('p');

        errorvalor.innerHTML = 'INGRESE EL PRECIO';
        document.getElementById("nombre1").appendChild(errorvalor);
        todoOK = false;
    }

    if (texto_cant == "" || isNaN(texto_cant)) {
        var errorcant = document.createElement("p");

        errorcant.innerHTML = 'INGRESE LA CANTIDAD';
        document.getElementById("nombre1").appendChild(errorcant)
        todoOK = false;
    }


    //return true;

    if (todoOK) {
        var PROD = new Productos(texto_nombre, texto_valor, texto_cant)//CREAMOS UN OBJETO (CON CLASE) CON AMBOS DATOS

        //ingresa el arreglo con sus carga de entradas y vaciamos
        arreglo_productos.push(PROD)
        document.getElementById('nom').value = ''
        document.getElementById('valor').value = ''
        document.getElementById('cant').value = ''
    }
    return false //RETORNAMOS false PARA QUE NO SE REINICIE LA PÁGINA AL HACER SUBMIT
}