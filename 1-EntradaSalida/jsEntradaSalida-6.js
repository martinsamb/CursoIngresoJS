/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var primerNumero;
	var segundoNumero;
	var suma;	

	primerNumero = numeroUno.value;
	segundoNumero = numeroDos.value;


	//alert(primerNumero+segundoNumero);

	primerNumero = parseInt(primerNumero);//transformo en entero
	segundoNumero = parseInt(segundoNumero);

	suma = primerNumero+segundoNumero;

	alert("La suma es = " + suma);
}

