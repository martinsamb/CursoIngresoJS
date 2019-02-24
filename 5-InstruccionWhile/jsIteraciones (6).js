function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;

	while(contador<5)
	{
		numero = prompt("ingrese un numero");
		numero = parseInt(numero);
		contador = contador+1;
		acumulador = acumulador+numero;

	}





document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN