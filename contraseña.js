function validarContrasena() {
    // Solicitar al usuario que ingrese una contraseña
    const contrasena = prompt("Introduce tu contraseña:");

    // Validar la longitud de la contraseña
    if (contrasena.length < 8) {
        console.log("Error: La contraseña debe tener al menos 8 caracteres.");
    } else {
        console.log("¡Éxito! La contraseña es válida.");
    }
}

// Llamar a la función para ejecutar la validación
validarContrasena();
