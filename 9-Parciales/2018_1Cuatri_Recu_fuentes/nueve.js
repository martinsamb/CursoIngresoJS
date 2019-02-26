/*
Bienvenidos. 
Realizar el algoritmo que permita ingresar el nombre de un animal del zoológico, 
el peso el cual debe ser entre 1 y 1000 y 
la temperatura del hábitat (entre -30 y 30) hasta que el usuario quiera e informar 
al terminar el ingreso por document.write: 
a) La cantidad de temperaturas pares. 
b) El nombre y temperatura del animal más pesado 
c) La cantidad de animales que viven a menos de 0 grados. 
d) El promedio del peso de todos los animales.	
f) El peso máximo y el mínimo de todos los animales cuyas temperaturas sean bajo cero.
*/

function mostrar()
{
	//defino variable
	var nombre;
	var peso;
	var temperatura;
	var respuesta = "";
	var masPesado;
	var menosPesado;
	var nombreMasPesado;
	var nombreMenosPesado;
	var temperaturaMaxima;
	var temperaturaMinima;
	var promedio;

	//defino contadores
	suma = 0;
	contador = 0;
	cantidadTemperaturasPares = 0;
	cantidadTemperaturasImpares = 0;
	cantidadAnimalesMenosCero= 0;

	//Inicio
	while(respuesta !== "no")
	{
		//Ingreso nombre
		nombre = prompt("Ingrese nombre");

		//ingreso peso
		peso = prompt("Ingrese peso");
		peso = parseInt(peso);

		//valido peso
		while(peso < 0 || isNaN(peso))
		{
			peso = prompt("Vuelva a ingresar peso");
			peso = parseInt(peso);
		}

		//ingreso temperatura
		temperatura = prompt("Ingrese temperatura");
		temperatura = parseInt(temperatura);

		//valido temperatura
		while(temperatura < -30 || temperatura > 30 || isNaN(temperatura))
		{
			temperatura = prompt("Reingrese temperatura");
			temperatura = parseInt(temperatura);	
		}
		//cantidad de temperaturas pares e impares
		if(temperatura % 2 == 0 || temperatura != 0)
		{
			cantidadTemperaturasPares++;
		}
		else
		{
			if(temperatura != 0)
			{
				cantidadTemperaturasImpares++;
			}
		}
		//animal mas pesado, menos pesado, temperatura maxima y minima
		if(contador == 1)
		{
			masPesado = peso;
			nombreMasPesado = nombre;
			menosPesado = peso;
			nombreMenosPesado = nombre;
			temperaturaMaxima = temperatura;
			temperaturaMinima = temperatura;
		}
		else
		{
			if(peso > masPesado)
			{
				masPesado = peso;
				nombreMasPesado = nombre;
			}
			if(peso < menosPesado)
			{
				menosPesado = peso;
				nombreMenosPesado = nombre;
			}
		}
		if(temperatura > temperaturaMaxima)
		{
			temperaturaMaxima = temperatura;
		}
		if(temperatura < temperaturaMinima)
		{
			temperaturaMinima = temperatura;
		}
		//cantidad de temperatura bajo cero
		if(temperatura < 0)
		{
			cantidadAnimalesMenosCero++;
		}
		//suma de peso

		suma = suma + peso;

		respuesta = prompt("Desea continuar, Enter para seguidor y NO para cortar");
	}

	promedio = suma/contador;

	//nuestro datos

	document.write("La cantidad de temperaturas pares ingresadas es: " + cantidadTemperaturasPares);
	document.write("<br>" + "La cantidad de temperaturas impares ingresadas es: " + cantidadTemperaturasImpares);
	document.write("<br>" + "El nombre del animal mas pesado es: " + nombreMasPesado);
	document.write("<br>" + "El nombre del animal menos pesado es: " + nombreMenosPesado);
	document.write("<br>" + "La cantidad de animales con habitats menores a cero grados es: " + cantidadAnimalesMenosCero);
	document.write("<br>" + "El promedio de los pesos de los animales es: " + promedio);
	document.write("<br>" + "La temperatura maxima es: " + temperaturaMaxima);
	document.write("<br>" + "La temperatura minima es: " + temperaturaMinima);

}
