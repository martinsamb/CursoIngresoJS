/*Debemos mostrar dos números Random  del 1 al 10 
y una de las cuatro operaciones básicas (suma, resta,
 división o multiplicación) para realizar entre estos
 dos números, estas operaciones también serán Random.
 En el cuadro de texto resultado el jugador debe ingresar
 el resultado de la operación y presionar el botón Aceptar.
se debe informar si el resultado es el correcto o no.
*/
var respuesta;
function comenzar()
{
	var operandoUno;
	var operandoDos;
	var operador;
	var operadoSigno;

	operandoUno = Math.floor((Math.random() * 10) + 1);
	operandoDos = Math.floor((Math.random() * 10) + 1);
	operador = Math.floor((Math.random() * 4) + 1);

	if(operador == 1)
	{
		respuesta = operandoUno+operandoDos;
		operadoSigno = "+";
	}else
	{
		if(operador == 2)
		{
			respuesta = operandoUno-operandoDos;
			operadoSigno = "-";
		}else
		{
			if(operador == 3)
			{
				respuesta = operandoUno*operandoDos;
				operadoSigno = "*";
			}else
			{
				operadoSigno = "/";
				respuesta = operandoUno/operandoDos;

			}
		}
	}
	PrimerNumero.value = operandoUno;
	Operador.value = operadoSigno;
	SegundoNumero.value = operandoDos;


}//FIN DE LA FUNCIÓN
function Responder()
{
	
	var respuestaDelUsuario;
	respuestaDelUsuario = Respuesta.value;
	respuestaDelUsuario = parseInt(respuestaDelUsuario);
	if(respuestaDelUsuario == respuesta)
	{
		alert("bien");
	}else
	{
		alert("mal");
	}

}//FIN DE LA FUNCIÓN
