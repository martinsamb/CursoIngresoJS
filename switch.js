/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */

 function CalcularPrecio () 
{
 	var lamparas;
 	var precioLampara;
 	var marcaLampara;
 	var precioImpuesto;
 	var precioFinal;

 	//Tomo datos
 	cantidadLamparas = Cantidad.value;
 	marcaLampara = Marca.value;

 	lamparas = document.getElementById("Cantidad").value;
 	variedad = document.getElementById("Marca").value;

 	//ParseInt necesarios
 	cantidadLamparas = parseInt(lamparas);
 	precio = parseInt (precio);

 	precio = lamparas*35;

 	switch(lamparas)
 	{
 		case 5:
 				if(marcaLampara == "ArgentinaLuz")
	 		{
	 		
				desc = 0.6
	 		}else
	 		{
				desc = 0.7;
	 		}

 		break;
 		case 4:
 		switch(variedad)
 			{
 				case "ArgentinaLuz":
 				case "FelipeLamparas":
 					desc = 0.75;
 					break;
 				default:
 					desc = 0.8;
 					break;
 			}

 	}


 	if (cantidadLamparas >= 6)
 	{
 		desc = 0.5;

 	}else
 	{
 		if(cantidadLamparas == 5)
	 	{
	 		if(marcaLampara == "ArgentinaLuz")
	 		{
	 		
				desc = 0.6
	 		}else
	 		{
				desc = 0.7;
	 		}
	 	}
	 	else
	 	{
		 	if(cantidadLamparas == 4)
		 	{
		 		if(marcaLampara == "ArgentinaLuz" || marcaLampara =="FelipeLamparas")
		 		{

		 		}else
		 		{

		 		}
		 	}else
		 	{

		 	}
		 }
	 	if(cantidadLamparas == 3)
	 	{
	 		if(marcaLampara == "ArgentinaLuz" )
	 		{
	 			desc = 0.85;
	 		}
	 		else
	 		{
	 			if(marcaLampara == "FelipeLamparas")
	 			{
					desc = 0.9;	
	 			}
	 			else
	 			{
	 				desc = 0.95:
	 			}
	 		}
	 	}

 	}
 	

	if(precioLampara > 120)
	 	{
	 		precioImpuesto = precioLampara*0.1;
	 		precioFinal = precioLampara + precioImpuesto;
	 		alert( "IIBB Usted pago "+ precioFinal + " , siendo " + precioImpuesto + " el impuesto que se pagó.");
	 	}
	 		

 				

}
