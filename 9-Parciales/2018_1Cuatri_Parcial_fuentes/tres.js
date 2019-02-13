function mostrar()
{
	var precioInicial;
	var descuento;
	var precioFinal;

	precioInicial = prompt("Ingrese precio");
	descuento = prompt("Ingrese descuento");

	precioInicial = parseInt(precioInicial);
	descuente = parseInt(descuento);

	precioFinal = precioInicial-precioInicial*descuento/100;

	document.getElementById('elPrecioFinal').value = precioFinal;

}
