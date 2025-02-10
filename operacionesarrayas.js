function operacionesConArrays() {
    let numeros = [];

    // Solicitar al usuario que ingrese 5 números
    for (let i = 0; i < 5; i++) {
        let numero = parseFloat(prompt(`Introduce el número ${i + 1}:`));
        numeros.push(numero);
    }

    // Calcular la suma de los números
    const suma = numeros.reduce((acc, num) => acc + num, 0);

    // Calcular el promedio
    const promedio = suma / numeros.length;

    // Encontrar el número mayor y el número menor
    const numeroMayor = Math.max(...numeros);
    const numeroMenor = Math.min(...numeros);

    // Mostrar los resultados
    console.log(`Los números ingresados son: ${numeros}`);
    console.log(`La suma es: ${suma}`);
    console.log(`El promedio es: ${promedio}`);
    console.log(`El número mayor es: ${numeroMayor}`);
    console.log(`El número menor es: ${numeroMenor}`);
}

// Llamar a la función para ejecutar el programa
operacionesConArrays();
