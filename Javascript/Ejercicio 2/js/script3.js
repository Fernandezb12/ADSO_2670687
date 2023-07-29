/*Ejercicio 1 - Una tienda ofrece un 25% de descuento por cada compra. Un cliente desea
saber cuánto deberá pagar por su compra

let montoTT = prompt("ingrese el monto total de la compra");
let desc = 25/100;
let montoPG = parseInt(montoTT) - parseInt(montoTT*desc);
alert("El monto a pagar con el descuento aplicado es: $"+montoPG+ "COP");*/

/*Ejercicio 2 - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual

let capital = prompt("Ingrese el monto de capital a invertir:");
let interesM = 2/100;
let montoF = parseInt(capital*interesM)
alert("El monto final después de un mes con el interés aplicado es: $" +montoF+ "COP");*/

/* Ejercicio 3 -- Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final

let cparcial = prompt("Ingrese la calificación del primer parcial:");
let examf = prompt("Ingrese la calificación del examen final:");
let trabfinal = prompt("Ingrese la calificación del trabajo final:");

const porcenparcial = 55/100;
const porcexamen = 30/100;
const porctrabfinal = 15/100;
let prom = (cparcial + examf + trabfinal) /3;
let califinal = (cparcial * porcenparcial) + (examf * porcexamen) + (trabfinal * porctrabfinal);

alert("La calificación final en la materia de Algoritmos es: " +califinal); */

/* Ejercicio 4 --  El dueño de una tienda compra un artículo a un precio determinado. Obtener el 
precio en que lo debe vender para obtener una ganancia del 30%. 

let articulo = prompt("Ingrese el precio del articulo:");
const porcG = 30/100;
let ganancia = (articulo * porcG);
let pventa = (articulo + ganancia);
alert("El precio de venta para obtener una ganancia del 30% es: $" +pventa)*/

/* Ejercicio 5 -- Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera. 

let diskm = prompt("Ingrese la distancia recorrida en Kilometros:")
let tiempd = prompt("Ingrese el tiempo de duración en minutos:") 
const costoPorKm = 15000;
const costoptiem = 2000;

let costoDistancia = diskm * costoPorKm;
let costoTiempo = tiempd * costoptiem;
let montoAPagar = costoDistancia + costoTiempo;

alert("El monto a pagar por la carrera es: $" +montoAPagar)*/

/* Ejercicio 6 -- Realizara un programa en el cual se van a leer tres números y determinar el 
cuadrado de cada uno de ellos.
let n1 = prompt("Ingrese el primer número:");
let n2 = prompt("Ingrese el segundo número:");
let n3 = prompt("Ingrese el tercer número:");

let cuad1 = n1 ** 2;
let cuad2 = n2 ** 2;
let cuad3 = n3 ** 2;

alert("El cuadrado del primer número es: " + cuad1 + "\nEl cuadrado del segundo número es: " + cuad2+ "\nEl cuadrado del tercer número es: " + cuad3); */

/* Ejercicio 7 -- En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El 
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área            | Porcentaje del presupuesto 
Ginecología     | 40% 
Traumatología   | 30% 
Pediatría       | 30% 
let presuTotal = prompt("Ingrese el presupuesto anual total del hospital:");

let presuGine = presuTotal * 40/100;
let presuTraum= presuTotal * 30/100;
let presuPedia = presuTotal * 30/100;

alert("Presupuesto asignado a Ginecología: $" +presuGine+
    "\nPresupuesto asignado a Traumatología: $" +presuTraum+
    "\nPresupuesto asignado a Pediatría: $" +presuPedia);*/

/* Ejercicio 8 -- El dueño de una tienda compra un artículo a un precio determinado. Obtener el 
precio en que lo debe vender para obtener una ganancia del 30%. EJERCICIO REPETIDO al ejercicio 4*/

/* Ejercio 9 -- Tres personas deciden invertir su dinero para fundar una empresa. Cada una de 
ellas invierte una cantidad distinta. Obtener el porcentaje que cada quien invierte 
con respecto a la cantidad total invertida. */

let nomb1 = prompt("Ingrese el Nombre del primer inversionista:");
let inverP1 = prompt("Ingrese la cantidad invertida por la persona 1:");
let nomb2 = prompt("Ingrese el Nombre del segundo inversionista:");
let inverp2 = prompt("Ingrese la cantidad invertida por la persona 2:");
let nomb3 = prompt("Ingrese el Nombre del tercer inversionista:");
let inverp3 = prompt("Ingrese la cantidad invertida por la persona 3:");

let totalInv = InverP1 + inverp2 + inverp3;

let porcenInver1 = (inverP1 / totalInv) * 100;
let porcenInver2 = (inverp2 / totalInv) * 100;
let porcenInver3 = (inverp3 / totalInv) * 100;

alert("El porcentaje de inversión de "+nomb1+ "es de "+inverP1+"%"+
    "\nPorcentaje de inversion de " +nomb2+ "es de "+inverp2+"%"+
    "\nPorcentaje de inversion de " +nomb3+ "es de "+inverp3);







