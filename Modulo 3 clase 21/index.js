"use strict";

/*

    Acceder un elemento con JQuery: 
    $('div') -> todos los DIV
    $('#hm1') -> solo el elemnto con ID hm1
    $('div>div') -> todos los div que son hijos de otro div.

    Crear un elemento:
    p=$('<p>') -> crea un párrafo.
    d=$('<div>') -> esto crea un div.
    i=$('<input type="text">') -> input text.
    w=$('<input type="password">') -> crea un input password.
    b=$('<button>') -> crea un botón.
    b.click(()=>{ etc. }) -> asocia una función al evento click

    Agregar un elmento a otro:

    $('body').append(p) -> agrega el elemento P al final del body.
    $('#hm3').before(p) -> agrega el elemento p antes del elemento con id hm3
    $('#hm3').after(p) -> agrega el elemnto p después del elemnto con id hm3

    Para elminar un elmento: 
    $('div').remove() -> borra todos los divs.

    Torpedo: https://www.w3schools.com/jquery/jquery_dom_add.asp
 */

// Ejercicio:
// Construya un formulario que pida usuario y clave.
// agregue un botón con el texto login y clase btn btn-primary
// al presionar el botón, el formulario debe ser borrado y
// se debe agregar un párrafo que diga "acceso exitoso"
// Hagao todo esto con un body vacío, solo usando JQUERY.
$(()=>{
   var container = $('<div class="container">');
   var f = $('<form>');
   $('body').append(container);
   container.append(f);
   f.append($('<label>').html("usuario"));
   f.append($('<input type="text" class="form-control">'));
   f.append($('<label>').html("clave"));
   f.append($('<input type="password" class="form-control">'));
   var b = $('<button type="button">');
   f.append(b);
   b.html("login");
   b.addClass("btn btn-primary");
   b.click(() => {
      // f.remove();
      container.empty();
      /*
      Torpedo: ALERT
      <div class="alert alert-success" role="alert">
        A simple success alert—check it out!
      </div>
      */
      container.append(
         $('<div class="alert alert-success" role="alert">').text("Acceso exitoso")

      );
   })
});