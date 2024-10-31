// Clase Pila para manejar los números en un arreglo
class Pila {
    constructor() {
        this.items = []; // Array para almacenar los números
    }

    // Método para agregar un número a la pila
    push(data) {
        this.items.push(data); // Añadir el número al final del arreglo
    }

    // Método para eliminar el número superior de la pila
    pop() {
        return this.items.pop(); // Retornar y eliminar el último número del arreglo
    }

    // Método para verificar si la pila está vacía
    isEmpty() {
        return this.items.length === 0; // Retorna verdadero si el arreglo está vacío
    }

    // Método para obtener todos los elementos de la pila
    getItems() {
        return this.items; // Retorna todos los elementos en el arreglo
    }
}

// Clase SumaPilas para manejar la lógica de suma de números grandes
class SumaPilas {
    constructor() {
        this.pila = new Pila(); // Instanciar la pila
    }

    // Método para agregar un número a la pila
    agregarNumero(numero) {
        this.pila.push(numero); // Agregar el número a la pila
        this.mostrarNumeros(); // Mostrar los números actuales en la pila
    }

    // Método para mostrar los números en la lista HTML
    mostrarNumeros() {
        const numberList = document.getElementById('numberList');
        numberList.innerHTML = ''; // Limpiar la lista anterior
        this.pila.getItems().forEach((numero) => {
            const li = document.createElement('li');
            li.textContent = numero; // Añadir cada número a la lista
            numberList.appendChild(li);
        });
    }

    // Método para sumar los números en la pila
    sumarNumeros() {
        let suma = 0; // Inicializamos la suma como 0
        const tempStack = new Pila(); // Pila temporal para almacenar números mientras sumamos

        while (!this.pila.isEmpty()) {
            const numero = parseFloat(this.pila.pop()); // Obtener el número superior de la pila y convertirlo a número
            suma += numero; // Sumar el número actual al resultado
            tempStack.push(numero); // Guardar el número en la pila temporal
        }

        // Regresar los números a la pila original
        while (!tempStack.isEmpty()) {
            this.pila.push(tempStack.pop());
        }

        return suma.toString(); // Retornar la suma como string
    }

    // Método para manejar la suma y mostrar el resultado
    calcularResultado() {
        const resultado = this.sumarNumeros(); // Sumar los números en la pila
        document.getElementById('result').textContent = `Resultado: ${resultado}`; // Mostrar el resultado
    }
}

// Instanciar la clase SumaPilas
const sumaPilas = new SumaPilas();

// Event listener para el formulario de números
document.getElementById('numberForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío del formulario
    const numberInput = document.getElementById('numberInput');
    sumaPilas.agregarNumero(numberInput.value); // Agregar el número a la pila
    numberInput.value = ''; // Limpiar el campo de entrada
});

// Event listener para el botón de suma
document.getElementById('sumButton').addEventListener('click', () => {
    sumaPilas.calcularResultado(); // Calcular y mostrar el resultado
});
