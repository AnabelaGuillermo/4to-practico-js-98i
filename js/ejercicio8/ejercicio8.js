"Use strict";

/* Crea una clase llamada "Persona" que tenga las propiedades "nombre", "edad" y "profesión",
y los métodos "saludar" y "despedirse". Luego, crea dos objetos de la clase "Persona"
con diferentes valores para sus propiedades y llama a sus métodos "saludar" y "despedirse".
*/

class Persona {
  constructor(nombre, edad, profesion) {
    this.nombre = nombre;
    this.edad = edad;
    this.profesion = profesion;
  }

  saludar() {
    console.log(
      `¡Hola! Mi nombre es ${this.nombre}, tengo ${this.edad} años y soy ${this.profesion}.`
    );
  }

  despedirse() {
    console.log(`Fue un gusto conocerte. ¡Adiós!`);
  }
}

const pedro = new Persona("Pedro", 30, "maestro");
const macarena = new Persona("Macarena", 32, "programadora");

pedro.saludar();
pedro.despedirse();

macarena.saludar();
macarena.despedirse();
