// Definir la clase Producto
class Producto {
    // Constructor para inicializar las propiedades
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }

    // Método para agregar unidades al inventario
    agregarUnidades(cantidadAgregar) {
        this.cantidad += cantidadAgregar;
        console.log(`${cantidadAgregar} unidades de ${this.nombre} han sido agregadas al inventario.`);
    }

    // Método para quitar unidades del inventario
    quitarUnidades(cantidadQuitar) {
        if (cantidadQuitar <= this.cantidad) {
            this.cantidad -= cantidadQuitar;
            console.log(`${cantidadQuitar} unidades de ${this.nombre} han sido quitadas del inventario.`);
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}. Solo quedan ${this.cantidad} unidades.`);
        }
    }

    // Método para mostrar el estado actual del inventario
    mostrarInventario() {
        console.log(`Inventario de ${this.nombre}: ${this.cantidad} unidades disponibles.`);
    }
}

// Crear una instancia de la clase Producto
const producto1 = new Producto("Camiseta", 20, 50);

// Mostrar el inventario inicial
producto1.mostrarInventario();

// Agregar unidades
producto1.agregarUnidades(30);

// Mostrar el inventario después de agregar unidades
producto1.mostrarInventario();

// Quitar unidades
producto1.quitarUnidades(20);

// Mostrar el inventario después de quitar unidades
producto1.mostrarInventario();

// Intentar quitar más unidades de las disponibles
producto1.quitarUnidades(100);
