function lanzarDado() {
    // Generar un número aleatorio entre 1 y 6
    const resultado = Math.floor(Math.random() * 6) + 1;

    // Mostrar el resultado en la consola
    console.log(`El resultado del lanzamiento del dado es: ${resultado}`);
}

// Llamar a la función para simular el lanzamiento
lanzarDado();
