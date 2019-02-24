/*
Solo Switch
Cada habitacionde un hotel tiene un precio, hay promociones segun el tipo de pago
si es con tarjeta visa 10%, si es por paypal 15%, por mercadoPago un 10%, efectivo
20% cualquier otro medio solo un 5%
Si compraste el paquete "todoIncluido" y pagas con paypal se te suma un 10% al descuento.
Si pagas en efectivo, tenes opciones, el paquete "soloDesayunos" te suma un 10% al descuento,
si el paquete es "todoIncluido" te suma un 15% y para el resto de los paquetes no tiene descuento
adicional.
*/

function mostrar()
{
var precio;
var descuento;
var medioDePago;
var paquete;

precio = prompt("Indique precio habitacion");
medioDePago = prompt("Ingrese medio de pago");
paquete = prompt("Indique paquete");

precio = parseInt(precio);

//promocion = precio*desc;
	switch(medioDePago)
	{
		case "Visa":
		case "mercadoPago":
			descuento = 0.9;
			break;
		case "paypal":
			switch(paquete)
			{
				case "todoIncluido":
				descuento = 0.75;
			default:
				descuento = 0.85
			}
			break;
		case "efectivo":
			switch(paquete)
			{
				case "soloDesayunos":
					descuento = 0.7;
					break;
				case "todoIncluido":
					descuento =0.65:
			}
		

	}


}