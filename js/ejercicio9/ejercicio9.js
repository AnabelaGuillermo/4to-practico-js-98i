"Use strict";

/* Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad",
y el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
que hereden de "Animal" y tengan su propio método "emitirSonido".
Finalmente, crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama
a sus métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
*/

class Animal {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }

  emitirSonido() {
    if (this.nombre === "Tobby") {
      console.log("Hago Guau.");
    } else if (this.nombre === "Chatrán") {
      console.log("Hago Miau.");
    }
  }
}

const tobby = new Animal("Tobby", 3);
const chatran = new Animal("Chatrán", 4);

console.log(`Soy ${tobby.nombre}, tengo ${tobby.edad} años.`);
tobby.emitirSonido();

console.log(`Soy ${chatran.nombre}, tengo ${chatran.edad} años.`);
chatran.emitirSonido();
