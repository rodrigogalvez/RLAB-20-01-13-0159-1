// 7.	Un programa que determine el promedio de sueldos de una empresa. Se debe solicitar la cantidad de empleados y luego ingresar el sueldo de cada uno de ellos.

var cantidad=prompt("Cantidad de empleados");
cantidad = parseInt(cantidad);
var suma = 0;
var sueldo = 0;
var i=1;
while (i<=cantidad) 
{
    sueldo=prompt("Sueldo empleado "+i);
    sueldo=parseInt(sueldo);
    document.write("Sueldo empleado "+i+" es "+sueldo );
    suma+=sueldo;
    i++;
}
var promedio = suma/cantidad;
document.write("Sueldo promedio "+promedio);