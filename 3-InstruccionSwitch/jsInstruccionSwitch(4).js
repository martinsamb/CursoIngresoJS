function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = "";

switch(mesDelAño)
{
	case "Enero":
	case "Marzo":
	case "Mayo":
	case "Julio":
	case "Agosto":
	case "Octubre":
	case "Diciembre":
		mensaje ="si tiene 31 días.";
		break;
	case "Febrero":
		mensaje = "si tiene 28 días.";
		break;
	default:
		mensaje = "si tiene 30 días.";
}

alert (mensaje);
	
	



}//FIN DE LA FUNCIÓN