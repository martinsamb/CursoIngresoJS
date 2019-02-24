function mostrar()
{
//declaro variable
var numeroIng
var numeroMayor;
var valor;
var desc;
var mensaje;
var suma;
 
//ingreso numero
numeroIng = prompt("Ingrese un numero");
//parseInt numero ingresado
numeroIng = parseInt(numeroIng);

switch(numeroIng)
{
	case "20":
	case "50":
	case "10":
	case 30:
		suma = 20+50+10+30;
		{
			if(suma > 100)
			{
				desc = 0.1;
			}
		}
		break;
	case 15:
	case 20:
	case 14:
	case 7:
		suma = 15+20+14+7;
		{
			if(suma > 50)
			{
				desc = 0.05;
			}
		}
		break;
	case 10:
		suma = 10+10+10+10;
			desc = 1.15;
	default:

}

alert(mensaje);




}	

