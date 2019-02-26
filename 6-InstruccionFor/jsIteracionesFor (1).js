function mostrar()
{
	var numeroUno;
	var suma = 0 ;
	var contadorUno = 0;
	var contadorDos = 0;
	var contadorTres = 0;
	var contadorCuatro = 0;
	var contadorCinco = 0;
	var contadorSeis = 0;
	var contadorSiete = 0;
	var contadorOcho = 0;
	var contadorNueve = 0;
	var contadorDiez = 0;

	
	for(contador = 0; contador<1000;contador++)
	{
		numeroUno = Math.floor((Math.random() * 10) + 1);
		console.log(numeroUno);

			switch (numeroUno)
			{
				case 1:
					contadorUno++;
					break;
				case 2:
					contadorDos++;
					break;
				case 3:
					contadorTres++;
					break;
				case 4:
					contadorCuatro++;
					break;
				case 5:
					contadorCinco++;
					break;
				case 6:
					contadorSeis++;
					break;
				case 7:
					procen = contadorSiete*100/contador;
					if(procen>6)
					{
						contador--;
						continue;
					}
					contadorSiete++;
					break;
				case 8:
					contadorOcho++;
					break;
				case 9:
					contadorNueve++;
					break;
				case 10:
					contadorDiez++;
					break;

			}
		
	}
			document.write(" El contadorUno " + contadorUno + " veces  % "+ contadorUno*100/contador);
			document.write("<br>"+"contadorDos " + contadorDos + " veces % " + contadorDos*100/contador);
			document.write("<br>"+"contadorTres " + contadorTres + " veces % " + contadorTres*100/contador);
			document.write("<br>"+"contadorCuatro " + contadorCuatro + " veces % " + contadorCuatro*100/contador);
			document.write("<br>"+"contadorCinco " + contadorCinco + " veces % " + contadorCinco*100/contador);
			document.write("<br>"+"contadorSeis " + contadorSeis + " veces % " + contadorSeis*100/contador);
			document.write("<br>"+"contadorSiete " + contadorSiete + " veces % " + contadorSiete*100/contador);
			document.write("<br>"+"contadorOcho " + contadorOcho + " veces % " + contadorOcho*100/contador);
			document.write("<br>"+"contadorNueve " + contadorNueve + " veces % " + contadorNueve*100/contador);
			document.write("<br>"+"contadorDiez " + contadorDiez + " veces % " + contadorDiez*100/contador);
			console.log(contador);
			suma = contadorUno+contadorDos+contadorTres+contadorCuatro+contadorCinco+contadorSeis+contadorSiete
			+contadorOcho+contadorNueve+contadorDiez;
			console.log(suma);

			 var palabra;

			 palabra = "luz azul";
			 console.log(palabra[0]);

			 for(var i = 0; i < palabra.length; i++)
			 {
			 	palabra[i]
			 }

}