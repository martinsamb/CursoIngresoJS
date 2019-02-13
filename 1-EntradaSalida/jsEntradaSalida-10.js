/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingreseImporte;
	var darResultado;
	var aumento;

	ingreseImporte = importe.value;
	ingreseImporte = parseInt(ingreseImporte);

	darResultado = ingreseImporte*1.1;

	document.getElementById('resultado').value = darResultado;

}
