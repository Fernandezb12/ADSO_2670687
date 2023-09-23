// Actividad 1. 
/*
let edad = parseInt(prompt("Ingresa tu edad: "));

if (edad < 18) {
  alert("Eres menor de edad.");
} else {
  alert("Eres mayor de edad.");
} */


// Actividad 2 
/*
let cali1 = prompt("Ingresa la primera calificación: ");
let cali2 = prompt("Ingresa la segunda calificación: ");
let cali3 = prompt("Ingresa la tercera calificación: ");

let promedio = (cali1 + cali2 + cali3) / 3;

if (promedio > 6) {
  alert("El estudiante aprobó el curso con un promedio de " + promedio);
} else {
  alert("El estudiante no aprobó el curso con un promedio de " + promedio);
} */

// Actividad 3
/*
llet a = parseFloat(prompt("Ingresa el primer número: "));
let b = parseFloat(prompt("Ingresa el segundo número: "));

if (a > b) {
  alert("a es mayor que b.");
} else if (a < b) {
  alert("a es menor que b.");
} else {
  alert("a es igual que b.");
}
 */

// Actividad 4
/*
let nums = [];

for (let i = 0; i < 5; i++) {
  nums.push(parseFloat(prompt("Ingresa un número: ")));
}

nums.sort((a, b) => a - b);

alert("Números ordenados de manera ascendente:");
for (let num of nums) {
  alert(num);
}
*/

//Actividad 5
/*
llet peso = parseFloat(prompt("Ingresa tu peso: "));

if (peso <= 40) {
  alert("Persona baja de peso.");
} else if (peso >= 41) {
  if (peso <= 70) {
    alert("Persona con peso promedio.");
  } else {
    alert("Persona con sobrepeso.");
  }
} else {
  alert("Persona con sobrepeso.");
}
 */

// Actividad 6
/*
let dia = parseInt(prompt("Ingresa un número entre 1 y 7: "));

if (dia < 1) {
  alert("Escribiste un número fuera del rango. Escribe un número entre 1 y 7.");
} else if (dia > 7) {
  alert("Escribiste un número fuera del rango. Escribe un número entre 1 y 7.");
} else {
  switch (dia) {
    case 1:
      alert("Día 1: lunes");
      break;
    case 2:
      alert("Día 2: martes");
      break;
    case 3:
      alert("Día 3: miércoles");
      break;
    case 4:
      alert("Día 4: jueves");
      break;
    case 5:
      alert("Día 5: viernes");
      break;
    case 6:
      alert("Día 6: sábado");
      break;
    case 7:
      alert("Día 7: domingo");
      break;
  }
}
 */


// Actividad 7
/*
let compra = parseFloat(prompt("Ingresa el valor de tu compra: "));

let desc;

if (compra >= 1000) {
  desc = 0.2 * compra;
} else {
  desc = 0.05 * compra;
}

let total = compra - desc;

alert("El total a pagar es de " + total + " pesos.");
*/

// Actividad 8
/*
llet horas = parseInt(prompt("Ingresa las horas trabajadas: "));

let salario;

if (horas <= 40) {
  salario = horas * 16000;
} else {
  salario = 40 * 16000 + (horas - 40) * 20000;
}

alert("El salario semanal es de " + salario + " pesos.");
*/

// Actividad 9
/* 
let nombre1 = prompt("Ingresa el nombre de la primera persona: ");
let edad1 = parseInt(prompt("Ingresa la edad de la primera persona: "));
let nombre2 = prompt("Ingresa el nombre de la segunda persona: ");
let edad2 = parseInt(prompt("Ingresa la edad de la segunda persona: "));

if (edad1 > edad2) {
  alert("La persona con más edad es " + nombre1 + " con " + edad1 + " años.");
} else {
  alert("La persona con más edad es " + nombre2 + " con " + edad2 + " años.");
}
*/

// Actividad 10
/*
let precioCamisa = parseFloat(prompt("Ingresa el precio de la camisa: "));
let cantidadCamisas = parseInt(prompt("Ingresa la cantidad de camisas compradas: "));

let totalSinDescuento = cantidadCamisas * precioCamisa;
let descuento;

if (cantidadCamisas >= 3) {
  descuento = 0.2 * totalSinDescuento;
} else {
  descuento = 0.1 * totalSinDescuento;
}

let totalPagar = totalSinDescuento - descuento;

alert("El total a pagar es de " + totalPagar + " pesos.");
*/

// Actividad 11
/*
let n1 = parseInt(prompt("Ingresa el primer número: "));
let n2 = parseInt(prompt("Ingresa el segundo número: "));

if (n1 == n2) {
  alert("Los números son iguales y su producto es " + n1 * n2);
} else if (n1 > n2) {
  alert("El primer número es mayor y su diferencia es " + (n1 - n2));
} else {
  alert("El segundo número es mayor y su suma es " + (n1 + n2));
}
*/

// Actividad 12
/*
let num1 = prompt("Ingresa el primer número: ");
let num2 = prompt("Ingresa el segundo número: ");
let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicación, división): ");

num1 = parseInt(num1);
num2 = parseInt(num2);

switch (operacion) {
  case "suma":

  result = num1 + num2;
    break;
  case "resta":

    result = num1 - num2;
    break;
} */