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
 	var cantidadLamparas;
 	var precioLampara;
 	var marcaLampara;
 	var precioImpuesto;
 	var precioFinal;

 	cantidadLamparas = Cantidad.value;
 	marcaLampara = Marca.value;

 	cantidadLamparas = parseInt(cantidadLamparas);

 	if (cantidadLamparas > 5)
 	{
 		precioLampara = 35*0.5*cantidadLamparas;
		document.getElementById('precioDescuento').value = precioLampara;

 	}else
 	{
 		if(cantidadLamparas == 5)
 		{
 			if(marcaLampara == "ArgentinaLuz")
 			{
 				precioLampara = 35*0.6*cantidadLamparas;
				document.getElementById('precioDescuento').value = precioLampara;
 			}else
 			{
 				precioLampara = 35*0.7*cantidadLamparas;
				document.getElementById('precioDescuento').value = precioLampara;
 			}
 		}
 	}
 	if(cantidadLamparas == 4)
 	{
 		if(marcaLampara == "ArgentinaLuz" || marcaLampara == “FelipeLamparas” )
 		{
 			precioLampara = 35*0.75*cantidadLamparas;
			document.getElementById('precioDescuento').value = precioLampara;
 		}
 		else
 		{
 			precioLampara = 35*0.8*cantidadLamparas;
			document.getElementById('precioDescuento').value = precioLampara;
 		}
 	}
 	if(cantidadLamparas == 3)
 	{
 		if(marcaLampara == "ArgentinaLuz")
 		{
 			precioLampara = 35*0.85*cantidadLamparas;
			document.getElementById('precioDescuento').value = precioLampara;
 		}
 		else
 		{
	 		if(marcaLampara == “FelipeLamparas”)
	 		{
	 			precioLampara = 35*0.9*cantidadLamparas;
				document.getElementById('precioDescuento').value = precioLampara;	
	 		}
	 		else
 			{
 				precioLampara = 35*0.95*cantidadLamparas;
				document.getElementById('precioDescuento').value = precioLampara;	
 			}

 		}
 		else
 		{
			if(precioLampara > 120)
	 		{
	 			precioImpuesto = precioLampara*0.1*cantidadLamparas;
	 			precioFinal = precioLampara + precioImpuesto;
	 			alert( "IIBB Usted pago "+ precioFinal + " , siendo " + precioImpuesto + " el impuesto que se pagó.");
	 		}
	 	}	

 				

}
