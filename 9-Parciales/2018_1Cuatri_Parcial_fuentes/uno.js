
function mostrar()
{
	var datoAlto;
	var datoAncho;
	var perimetro

	datoAlto = prompt ("Ingrese alto");
	datoAncho = prompt ("Ingrese ancho");

	datoAlto = parseInt(datoAlto);
	datoAncho = parseInt(datoAncho);

	perimetro = 2*(datoAlto+datoAlto);
	alert ( "El perímetro es: " + perimetro); 
}
