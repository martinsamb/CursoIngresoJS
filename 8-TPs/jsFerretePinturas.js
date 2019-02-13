/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperaturaF;
	var temperaturaC;

	temperaturaF = Temperatura.value;

	temperaturaF = parseInt(temperaturaF);

	temperaturaC = (temperaturaF-32)*5/9;

	alert("Temperatura en Fahrenheit " + temperaturaF +" Son: " + temperaturaC + " centígrados");
}

function CentigradosFahrenheit () 
{
	var temperaturaF;
	var temperaturaC;

	temperaturaC = Temperatura.value;

	temperaturaC = parseInt(temperaturaC);

	temperaturaF = temperaturaC*9/5+32;

	alert("Temperatura en centígrados " + temperaturaC +" Son: " + temperaturaF + " fahrenheit");	
}
