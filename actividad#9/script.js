// Clase Nodo para representar cada elemento en la pila
class Nodo {
    constructor(data) {
        this.data = data; // Almacena el valor del nodo
        this.next = null; // Apuntador al siguiente nodo
    }
}

// Clase Pila para manejar la estructura de pila
class Pila {
    constructor() {
        this.top = null; // Apuntador al nodo superior de la pila
    }

    // Método para agregar un elemento a la pila
    push(data) {
        const newNode = new Nodo(data);
        newNode.next = this.top; // El nuevo nodo apunta al nodo anterior superior
        this.top = newNode; // Actualizar el nodo superior
    }

    // Método para reemplazar un valor viejo por uno nuevo, reemplaza solo la primera ocurrencia
    replace(oldValue, newValue) {
        let current = this.top;
        let replaced = false; // Flag para verificar si se ha realizado un reemplazo

        while (current) {
            if (current.data === oldValue && !replaced) {
                current.data = newValue; // Reemplazar el valor viejo por el nuevo
                replaced = true; // Marcar como reemplazado
            }
            current = current.next; // Avanzar al siguiente nodo
        }
    }

    // Método para obtener todos los elementos de la pila como un array
    toArray() {
        const elements = [];
        let current = this.top;
        while (current) {
            elements.push(current.data);
            current = current.next;
        }
        return elements; // Retorna un array con los elementos de la pila
    }
}

// Crear una instancia de Pila
const pila = new Pila();

// Event listener para el formulario de agregar números
document.getElementById('addNumberForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const numberInput = document.getElementById('numberInput');
    const number = parseFloat(numberInput.value); // Obtener el número ingresado (permitir decimales)
    pila.push(number); // Agregar el número a la pila
    numberInput.value = ''; // Limpiar el campo de entrada
});

// Event listener para el formulario de reemplazo
document.getElementById('valueForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const oldValue = parseFloat(document.getElementById('oldValue').value); // Valor viejo
    const newValue = parseFloat(document.getElementById('newValue').value); // Valor nuevo
    pila.replace(oldValue, newValue); // Reemplazar el valor viejo por el nuevo
});

// Event listener para mostrar la pila
document.getElementById('showButton').addEventListener('click', () => {
    const stackList = document.getElementById('stackList');
    stackList.innerHTML = ''; // Limpiar la lista anterior
    const elements = pila.toArray(); // Obtener los elementos de la pila
    elements.forEach((element) => {
        const li = document.createElement('li');
        li.textContent = element; // Mostrar cada elemento en la lista
        stackList.appendChild(li); // Añadir el elemento a la lista HTML
    });
});
