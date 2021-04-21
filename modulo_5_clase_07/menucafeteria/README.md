# menucafeteria

Demostración para crear un CRUD y publicar en Firebase.

## Para regenerar carpeta node_mdules
```
npm install
```

## Para probar la aplicación
```
npm run serve
```

## Preparar para publicar
Esto crea la carpeta dist/
```
npm run build
```

## Publicar en Firebase

1) Tiene que haber creado la carpeta dist/
2) Ir a la consola de Firebase
3) Seleccionar Hosting
4) Click en comenzar
5) Instalar herramientas de Firebase (se hace una sola vez en la vida)
```
npm install -g firebase-tools
```
6) Ingresar a Firebase con la herramienta:
```
firebase login --interactive
```
7) Inicializar el Firebase, elegir Hosting con las flechas y la barra espaciadora. La carpeta publica por defecto es public, debe ser dist.
```
firebase init
```
9) Volver a generar la carpeta dist/
```
npm run build
```
10) Finalmente desplegar
```
firebase deploy
```

## Más información en
Ver [publicar VueJS en Firebase](https://www.youtube.com/watch?v=UkkKbVRN548)
Nota: el vídeo está desactualizado.