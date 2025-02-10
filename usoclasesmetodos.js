// Definir la clase Coche
class Coche {
    // Constructor para inicializar las propiedades
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    // Método para encender el coche
    encender() {
        console.log(`${this.marca} ${this.modelo} ${this.año} está encendido.`);
    }
}

// Crear una instancia de la clase Coche
const miCoche = new Coche("Toyota", "Corolla", 2020);

// Llamar al método encender de la instancia creada
miCoche.encender();
