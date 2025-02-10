function adivinaElNumero() {
    // Generar un número aleatorio entre 1 y 100
    const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
    
    console.log("¡Bienvenido al juego de adivinanza!");
    console.log("He elegido un número entre 1 y 100, ¡intenta adivinarlo!");

    let intento;

    // Bucle que continúa hasta que el usuario adivine el número
    while (true) {
        // Solicitar al usuario que ingrese un número
        intento = parseInt(prompt("Introduce tu suposición:"));

        // Verificar si el intento es correcto
        if (intento < numeroAleatorio) {
            console.log("Más alto. ¡Sigue intentándolo!");
        } else if (intento > numeroAleatorio) {
            console.log("Más bajo. ¡Sigue intentándolo!");
        } else {
            console.log(`¡Felicidades! Has adivinado el número ${numeroAleatorio}.`);
            break;  // Terminar el bucle cuando se adivina el número
        }
    }
}

// Llamar a la función para iniciar el juego
adivinaElNumero();
