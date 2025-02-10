function calcularAreaYPerimetro() {
    // Solicitar al usuario el ancho y alto del rectángulo
    const ancho = parseFloat(prompt("Introduce el ancho del rectángulo:"));
    const alto = parseFloat(prompt("Introduce el alto del rectángulo:"));
    
    // Calcular el área y el perímetro
    const area = ancho * alto;
    const perimetro = 2 * (ancho + alto);
    
    // Mostrar los resultados
    console.log(`El área del rectángulo es: ${area}`);
    console.log(`El perímetro del rectángulo es: ${perimetro}`);
}

// Llamar a la función para ejecutar el programa
calcularAreaYPerimetro();
