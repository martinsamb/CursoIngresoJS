function mostrar()
{
	var numero;
	var sexo;
	var contador=0;
	var promedio;
	var acumulador=0;
	var notaMasBaja;
	var sexoNotaBaja;
	var contadorVarones;

	while( contador < 5)
	{
		contador++;
		numero = prompt("Ingrese nota entre 0 y 10");
		numero = parseInt(numero);
		while(numero < 0 || numero > 10)
		{
			numero = prompt("Ingrese f ó m");
			numero = parseInt(numero);
		}
		sexo = prompt("Ingrese f o m");
		while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("error, reingrese un sexo válido, f ó m");
		}
		if(contador == 1)
		{
			notaMasBaja = numero;
			sexoNotaBaja = sexo;
		}
		else
		{
			if(numero<notaMasBaja)
			{
				notaMasBaja = numero;
				sexoNotaBaja = sexo;
			}
		}
		if(sexo == "m" && numero >= 6)
		{
			contadorVarones = contadorVarones + 1 ;
		}

		acumulador = acumulador + numero ;
	}

	promedio = acumulador / 5 ;

	alert("El promedio de las notas totales es: " + promedio);
	alert("La nota mas baja es: "+ notaMasBaja + "y el sexo de esa persona es: "+ sexoNotaBaja);
	alert("La cantidad de varones aprobado es: " + contadorVarones);
}
