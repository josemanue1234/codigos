// Función para convertir Watts a Caballos de Fuerza (HP)
function wattsToHP(watts) {
    return watts / 745.7; // 1 HP = 745.7 Watts
}

// Función para convertir Caballos de Fuerza (HP) a Watts
function hpToWatts(hp) {
    return hp * 745.7; // 1 HP = 745.7 Watts
}

// Función que pide al usuario la conversión
function convertir() {
    // Preguntar al usuario qué tipo de conversión quiere hacer
    let tipoConversion = prompt("¿Quieres convertir? \nEscribe '1' para convertir de Watts a HP \nEscribe '2' para convertir de HP a Watts");

    // Si el usuario elige '1' (Watts a HP)
    if (tipoConversion === "1") {
        let watts = parseFloat(prompt("Introduce el valor en Watts:"));
        let resultadoHP = wattsToHP(watts);
        console.log(`${watts} Watts son igual a ${resultadoHP.toFixed(2)} Caballos de Fuerza (HP).`);
    }
    // Si el usuario elige '2' (HP a Watts)
    else if (tipoConversion === "2") {
        let hp = parseFloat(prompt("Introduce el valor en Caballos de Fuerza (HP):"));
        let resultadoWatts = hpToWatts(hp);
        console.log(`${hp} Caballos de Fuerza (HP) son igual a ${resultadoWatts.toFixed(2)} Watts.`);
    }
    // Si el usuario ingresa una opción incorrecta
    else {
        console.log("Opción no válida. Por favor, ingresa '1' o '2'.");
    }
}

// Ejecutar la función para hacer la conversión
convertir();
