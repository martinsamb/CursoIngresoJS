/*
Un numero perfecto es un numero natural que es igual a la suma de sus divisores propios 
positivos. Dicho de otra forma, un numero perfecto es aquel que es amigo de si mismo.
Asi , 6 es un numero perfecto porque sus divisores propios son 1,2,3 y 6 = 1+2+3.
Los siguientes numeros perfectos son 28, 498, 8128
*/
function mostrar()
{
	var numeroIngresado;
	var numeroAnterior;
	var acumulador=0;
	var recorrido;

	numeroIngresado = prompt("ingrese numero");
	numeroIngresado = parseInt(numeroIngresado);

	for(recorrido=numeroIngresado-1;recorrido>1;numeroAnterior--)
	{
		for(numeroAnterior=recorrido-1;numeroAnterior>1;numeroAnterior--)
		{
			if(numeroIngresado % numeroAnterior == 0 )
			{
				acumulador = acumulador + numeroAnterior;
			}

		}
		
	}
	if(acumulador = numeroIngresado)
	{
		console.log("se perfecto" + numeroIngresado);
	}

}