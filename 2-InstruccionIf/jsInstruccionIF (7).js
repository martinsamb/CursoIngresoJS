function mostrar()
{
//tomo la edad  
var laEdad;
var EstadoCivilIngresado;

laEdad = edad.value;
EstadoCivilIngresado = estadoCivil.value;

laEdad = parseInt(laEdad);

if(laEdad > 18)
	{
		

	}else
		if(EstadoCivilIngresado == "Soltero")
		{
			alert('Es muy pequeño para NO ser soltero.');	
		}

}//FIN DE LA FUNCIÓN