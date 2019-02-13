/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var precioProducto1;
	var precioProducto2;
	var precioProducto3;
	var suma;

	precioProducto1 = PrecioUno.value;
	precioProducto2 = PrecioDos.value;
	precioProducto3 = PrecioTres.value;

	precioProducto1 = parseInt(precioProducto1);
	precioProducto2 = parseInt(precioProducto2);
	precioProducto3 = parseInt(precioProducto3);

	suma = precioProducto1+precioProducto2+precioProducto3;

	alert("La suma de tres numeros es: " + suma);
	
}
function Promedio () 
{
	var precioProducto1;
	var precioProducto2;
	var precioProducto3;
	var promedio;

	precioProducto1 = PrecioUno.value;
	precioProducto2 = PrecioDos.value;
	precioProducto3 = PrecioTres.value;

	precioProducto1 = parseInt(precioProducto1);
	precioProducto2 = parseInt(precioProducto2);
	precioProducto3 = parseInt(precioProducto3);

	promedio = (precioProducto1+precioProducto2+precioProducto3)/3;

	alert("El promedio de tres numeros es: " + promedio);	
}
function PrecioFinal () 
{
	var precioProducto1;
	var precioProducto2;
	var precioProducto3;
	var precioFinal;

	precioProducto1 = PrecioUno.value;
	precioProducto2 = PrecioDos.value;
	precioProducto3 = PrecioTres.value;

	precioProducto1 = parseInt(precioProducto1);
	precioProducto2 = parseInt(precioProducto2);
	precioProducto3 = parseInt(precioProducto3);

	precioFinal = (precioProducto1+precioProducto2+precioProducto3)*1.21;

	alert("El precioFinal de tres numeros es: " + precioFinal);	
}