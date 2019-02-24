function mostrar()
{
	var sexo;
	var promedio;
	var nota;
	var numero;
	var acumulador;
	var contador = 0;
	var notaMasBaja;
	var sexoNotaBaja;
	var contadorVarones=0;

	isNaN();

	while(contador<5)
	{
		contador++;

		numero=prompt("ingrese nota entre 0 y 10");
		numero=parseInt(numero);
		while(isNaN(numero) || numero < 0 || numero > 10)
		{
			numero = prompt("error,reingrese un número entre 0 y 10.");
			numero=parseInt(numero);
		}

		sexo = prompt("ingrese f ò m");
		while(!isNaN(numero) || sexo!='f' && sexo!== 'm')
			{
				sexo = prompt("error,reingrese un sexo valido f ó m .");
			}
		
	
		if(contador  == 1)
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
		if( sexo == "m" && numero >= 6)
		{
			contadorVarones = contadorVarones+1;
		}

	acumulador = acumulador+numero;
	
	}

	promedio = acumulador/5;
	alert("El promedio de las notas totales es"+ promedio);
	alert("la nota mas baja es" + notaMasBaja+ " y el sexo de esta persona es"+ sexoNotaBaja);
	alert("la cantida de varones aprobados es"+ contadorVarones);

}
