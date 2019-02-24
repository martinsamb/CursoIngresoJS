function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var respuesta='si';

	while(respuesta =='si')
	{
		numero = prompt("ingrese numero");
		numero = parseInt(numero);
		contador = contador+1;//sintaxis suma un literal
		respuesta = prompt("Ingrese si para continuar");

		if( numero > 0)
		{
			positivo = positivo+numero;	
		}
		else
		{
			negativo = negativo*numero;
		}
	}


document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN