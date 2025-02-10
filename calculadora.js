// Solicitar los números al usuario
let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));

// Realizar las operaciones básicas
let suma = num1 + num2;
let resta = num1 - num2;
let multiplicacion = num1 * num2;
let division = (num2 !== 0) ? (num1 / num2) : "No se puede dividir entre cero";

// Mostrar los resultados en la consola
console.log("Resultados:");
console.log("Suma: " + suma);
console.log("Resta: " + resta);
console.log("Multiplicación: " + multiplicacion);
console.log("División: " + division);
