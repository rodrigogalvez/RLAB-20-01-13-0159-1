# Boostrap CSS Navbar Toggler sin JavaScript

Es posible crear un botón para mostrar la barra de navegación sin usar JS. Considere el siguiente ejemplo de la página de Boostrap:

```html
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
```
Puede ver el [ejemplo original](https://getbootstrap.com/docs/4.0/components/navbar/#nav)

Es una barra de navegación responsiva: cuando se abre en pantallas pequeñas aparece un botón tipo hamburguesa para mostrar el menú con un click. Ese botón requiere JavaScript para funcionar y reacciona cambiando la visibilidad de un elemento con ```id```.

Es posible cambiar el botón y prescindir del JavaScript reemplazando el código siguiente:

```html
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
        ...
    </div>
```

Por este otro código:

```html
    <input type="checkbox" class="navbar-toggler navbar-toggler-icon" data-toggle="collapse">
    <div class="collapse navbar-collapse">
        ...
    </div>
```
El primer cambio evidente es el reemplazo del ```button``` por un ```input type="checkbox"```. Esto permite controlar vía CSS la visibilidad del ```div.navbar-collapse```. Notar que el código de reemplazo ya no necesita el ```id``` para el ```div.navbar-collapse```.

Además, agregar un poco de código en CSS:

```css
input[type="checkbox"][data-toggle="collapse"] {
    appearance: none;
}

input[type="checkbox"][data-toggle="collapse"]:checked+.collapse {
    display: block;
}
```

Este código quita la apariencia del ```input type="checkbox"``` que tenga el atributo ```data-toggle="collapse"``` para que se vea el ícono tipo hamburguesa de Bootstrap. Además para el mismo tipo de ```input```, si está marcado (```:checked```), hace visible al siguiente hermano con clase ```.collapse```.

Con estos cambios, el menú es mostrado o no mostrado sin usar JavaScript.


