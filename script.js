//++++++++++++ Operacion suma +++++++++++

// Se obtienen la respuesta del boton Suma
// y el ID de la respuesta la cual esta vacia.
let botonSuma = document.getElementById("suma");
let respuestaS = document.getElementById("respuesta");

// Se manda la respuesta cuando se hace click en el boton suma,
// utilizando la función suma
botonSuma.addEventListener("click",suma);

/**
 * n1: primer valor de entrada 
 * n2: segundo valor de entrada
 * sumaR: variable que guarda el resultado
 * al final respuesta.innerHTML manda a la pantalla el valor de la
 * respuesta.
 */
function suma(){
    let n1 = parseFloat(document.getElementById("numA").value);
    let n2 = parseFloat(document.getElementById("numB").value);
    let sumaR = (a,b) => a+b;
    respuestaS.innerHTML = sumaR(n1,n2);
}

//++++++++++++ Operacion resta +++++++++++

// Se obtienen la respuesta del boton resta
// y el ID de la respuesta la cual esta vacia.
let botonResta = document.getElementById("resta");
let respuestaR = document.getElementById("respuesta");

// Se manda la respuesta cuando se hace click en el boton resta,
// utilizando la función resta
botonResta.addEventListener("click",resta);

/**
 * n1: primer valor de entrada 
 * n2: segundo valor de entrada
 * restaR: variable que guarda el resultado
 * al final respuesta.innerHTML manda a la pantalla el valor de la
 * respuesta.
 */
function resta(){
    let n1 = parseFloat(document.getElementById("numA").value);
    let n2 = parseFloat(document.getElementById("numB").value);
    let restaR = (a,b) => a-b;
    respuestaR.innerHTML = restaR(n1,n2);
}

//++++++++++++ Operacion multiplicación +++++++++++

// Se obtienen la respuesta del boton multiplicación
// y el ID de la respuesta la cual esta vacia.
let botonMulti = document.getElementById("multiplicacion");
let respuestaM = document.getElementById("respuesta");

// Se manda la respuesta cuando se hace click en el boton resta,
// utilizando la función multiplicacion cada que se hace click.
botonMulti.addEventListener("click",multiplicacion);

/**
 * n1: primer valor de entrada 
 * n2: segundo valor de entrada
 * restaR: variable que guarda el resultado
 * al final respuesta.innerHTML manda a la pantalla el valor de la
 * respuesta.
 */
function multiplicacion(){
    let n1 = parseFloat(document.getElementById("numA").value);
    let n2 = parseFloat(document.getElementById("numB").value);
    let multiR = (a,b) => a*b;
    respuestaM.innerHTML = multiR(n1,n2);
}

//++++++++++++ Operacion división +++++++++++

// Se obtienen la respuesta del boton división
// y el ID de la respuesta la cual esta vacia.
let botonDivision = document.getElementById("division");
let respuestaD = document.getElementById("respuesta");

// Se manda la respuesta cuando se hace click en el boton division,
// utilizando la función division cada que se hace click.
botonDivision.addEventListener("click",division);

/**
 * n1: primer valor de entrada 
 * n2: segundo valor de entrada
 * restaR: variable que guarda el resultado
 * al final respuesta.innerHTML manda a la pantalla el valor de la
 * respuesta.
 */
function division(){
    let n1 = parseFloat(document.getElementById("numA").value);
    let n2 = parseFloat(document.getElementById("numB").value);
    let divisionR = (a,b) => a/b;
    respuestaD.innerHTML = divisionR(n1,n2);
}