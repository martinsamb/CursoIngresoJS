function mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;
var mensaje = "";

switch(mesDelAño){

 	case "Enero":
 	case "Febrero":
 	case "Marzo":
 	case "Abril":
 	case "Mayo":
 	case "Junio":
 		mensaje = "Falta para el invierno.";
 		break;
 	case "Julio":
 	case "Agosto":
 		mensaje =  "Abrigate que hace frio.";
 		break;
 	default:
 		mensaje ="Ya pasamos el frio, ahora calor!!!.";

}

alert (mensaje);	





}//FIN DE LA FUNCIÓN