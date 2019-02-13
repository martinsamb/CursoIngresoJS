function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 

	var numeroUno;
	var numeroDos;

	numeroUno = Math.random()*10;

	numeroDos = Math.floor(numeroUno);

	//alert(numeroDos);

	if( numeroDos == 9 || numeroDos == 10)
	{
		alert("Excelente");
	}else
		if(numeroDos > 4)
		{
			alert ("Aprobo");
		}else
			{
				alert("Vamos, la proxima se puede");	
			}
		
	

}//FIN DE LA FUNCIÓN