function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroResultado;

	numeroUno = prompt("Ingrese numero");
	numeroDos = prompt("Ingrese otro numero");

	numeroUno = parseInt(numeroUno);
	numeroDos = parseInt(numeroDos);

	if( numeroUno > numeroDos)
	{
		numeroResultado = numeroUno/numeroDos;
		alert( "El resultado es:" + numeroResultado);
	}else 
	{
		if(numeroUno == numeroDos)
		{
			alert("El resultado es: " + numeroUno + numeroDos);
		}else
		{
			numeroResultado = numeroUno+numeroDos;
			alert("El resultado es: " + numeroResultado);	
		}
	}
	if(numeroResultado < 50)
	{
		alert("la suma es"+ numeroResultado+" y es menor a 50");
	}
}
