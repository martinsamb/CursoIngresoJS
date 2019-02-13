/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var ingreseSueldo;
	var ingreseResultado;


	ingreseSueldo = sueldo.value;
	//ingreseResultado = resultado.value;

	ingreseSueldo = parseInt(ingreseSueldo);
	//ingreseResultado = parseInt(ingreseResultado

	ingreseResultado = ingreseSueldo*1.1;

	document.getElementById('resultado').value = ingreseResultado;
	
}
