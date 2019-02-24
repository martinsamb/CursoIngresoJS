function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var numero;

	while( respuesta == 'si')
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		contador = contador+1;
		acumulador = acumulador+numero;
		respuesta = prompt("Ingrese SI para terminar");
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN