function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = "";
switch(mesDelAño)
{
	case "Febrero":
		mensaje = " Este mes no tiene más de 29 días." ;
		break;
	default:
		mensaje = "Este mes tiene 30 o más días";

}


alert (mensaje);	

	
	


}//FIN DE LA FUNCIÓN