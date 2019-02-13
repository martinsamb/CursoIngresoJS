/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var datoAncho;
	var datoLargo;
	var datoRadio;
	var alambreRectangulo;
	var alambreCirculo;

	datoAncho = Ancho.value;
	datoLargo = Largo.value;
	datoRadio = Radio.value;


	datoAncho = parseInt(datoAncho);
	datoLargo = parseInt(datoLargo);
	datoRadio = parseInt(datoRadio);

	alambreRectangulo = 6*(datoAncho+datoLargo);

	alert(alambreRectangulo);
}
function Circulo () 
{
	var datoAncho;
	var datoLargo;
	var datoRadio;
	var alambreRectangulo;
	var alambreCirculo;

	datoAncho = Ancho.value;
	datoLargo = Largo.value;
	datoRadio = Radio.value;

	datoAncho = parseInt(datoAncho);
	datoLargo = parseInt(datoLargo);
	datoRadio = parseInt(datoRadio);
	
	alambreCirculo = 6*Math.PI*datoRadio;

	alert("El alambre necesario es:" + alambreCirculo);
}	

function Materiales () 
{
	var datoAncho;
	var datoLargo;
	var superficieRectangulo;
	var bolsaCemento;
	var bolsaCal;

	datoAncho = Ancho.value;
	datoLargo = Largo.value;


	datoAncho = parseInt(datoAncho);
	datoLargo = parseInt(datoLargo);

	superficieRectangulo = datoLargo*datoLargo;
	bolsaCemento = superficieRectangulo*2;
	bolsaCal = superficieRectangulo*3;

	alert ("Se necesitan: " + bolsaCemento + " bolsas de cemento. Y  "+ bolsaCal+" bolsa de cal");
} 