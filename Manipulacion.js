function saludarUsuario() {
    // Solicitar al usuario su nombre y apellido
    const nombre = prompt("Introduce tu nombre:");
    const apellido = prompt("Introduce tu apellido:");
    
    // Concatenar el nombre y el apellido, y convertirlo a mayúsculas
    const nombreCompleto = `${nombre} ${apellido}`.toUpperCase();
    
    // Mostrar el mensaje de bienvenida
    console.log(`¡Bienvenido, ${nombreCompleto}!`);
}

// Llamar a la función para ejecutar el programa
saludarUsuario();
