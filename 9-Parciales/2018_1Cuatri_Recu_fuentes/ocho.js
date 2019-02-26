function mostrar()
{
	//defino variables
	var letra;
	var numero;
	var promedio;
	var numeroMaximo;
	var letraMaxima;
	var numeroMinimo;
	var letraMinima;
	var respuesta="";

	//defino e inicio contadores
	var cantidadNegativos = 0;
	var cantidadPositivos = 0;
	var cantidadPares = 0;
	var cantidadImpares = 0;
	var cantidadCeros = 0;
	var sumaNegativo = 0;
	var sumaPositivo = 0;
	var contador = 0;

	//valido respuesta
	while(respuesta !== "no")
	{
		//toma la letra
		letra = prompt("Ingreso una letra");

		//valido letra
		while(!isNaN(letra))
		{
			letra = prompt("Reingrese la letra");	
		}
		//tomo numero
		numero = prompt("Ingrese un numero entre -100 y 100");
		numero = parseInt(numero);

		//valido numero
		while(numero < -100 || numero>100 || isNaN(numero))
		{
			numero = prompt("Reingrese un numero entre -100 y 100");
		}
		//cuento 
		contador++;

		//a-b-cantidad de pares y impares
		if(numero !==0)
		{
			cantidadImpares++;
		}
		else
		{
			cantidadPares++;
		}
		//suma y cantidad de negativos
		if(numero<0)
		{
			cantidadNegativos++;
			sumaNegativo = sumaNegativo+numero;
		}
		else
		{
			cantidadPositivos++;
			sumaPositivo = sumaPositivo+ numero;
		}
		//c-cantidad numeros 0
		if(numero == 0)
		{
			cantidadCeros++;
		}
		//encuentro su numero maximo y su letra
		if(contador == 1)
		{
			numeroMaximo = numero;
			letraMaxima = letra;
		}
		else
		{
			if(numero>numeroMaximo)
			{
				numero = numeroMaximo;
				letra = letraMaxima;
			}
		}
		//Encuentro minimo
		if(contador == 1)
		{
			numeroMinimo = numero;
			letraMinima = letra;
		}
		else
		{
			if(numero>numeroMinimo)
			{
				numeroMinimo = numero;
				letraMinima = letra;
			}
		}


		respuesta = prompt("Desea continua");
	}
	//calculo promedio numeros positivos
	promedio = sumaPositivo/cantidadPositivos;

	//Muestros datos
	//1-Cantidad de numeros pares
	document.write("La cantidad de numeros pares es: "+ cantidadPares);
	//2- Cantidad de num impares
	document.write("La cantidas de numeros impares es: "+ cantidadImpares);
	//3- La cantidad de ceros:
	document.write("La cantidad de ceros: "+ cantidadCeros);
	//4-Promedio , numeros pos.
	document.write("El promedio de numeroPositivos es: "+ numeroPositivos);
	//5-Suma negativos
	document.write("La suma de negativos es: "+ sumaNegativo);
	//6- Numero y letra maximo y minimo
	document.write("La letra maxima es"+ letraMaxima + " y el numero maximo "+ numeroMaximo);
	document.write("La letra minima es"+letraMinima+" y el numero minimo es: "+ numeroMinimo);

}
