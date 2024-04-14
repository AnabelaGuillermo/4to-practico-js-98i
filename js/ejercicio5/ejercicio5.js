"Use strict";

/* Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura, año de nacimiento.
Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar  son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué generación pertenece la persona
creada y cual es el rasgo característico de esta generación.
Para realizar este método tener en cuenta la siguiente tabla de generaciones:
*/

class Persona {
  constructor(nombre, edad, dni, sexo, peso, altura, añoNacimiento) {
    this.nombre = nombre;
    this.edad = edad;
    this.dni = dni;
    this.sexo = sexo;
    this.peso = peso;
    this.altura = altura;
    this.añoNacimiento = añoNacimiento;
  }

  esMayorDeEdad() {
    return this.edad >= 18;
  }

  mostrarDatos() {
    return `Nombre: ${this.nombre}<br>
                Edad: ${this.edad}<br>
                DNI: ${this.dni}<br>
                Sexo: ${this.sexo}<br>
                Peso: ${this.peso}<br>
                Altura: ${this.altura}<br>
                Año de Nacimiento: ${this.añoNacimiento}<br>`;
  }

  generaDNI() {
    this.dni = Math.floor(Math.random() * 90000000) + 10000000;
  }

  mostrarGeneracion() {
    if (this.añoNacimiento >= 1994 && this.añoNacimiento <= 2010) {
      document.write(
        "Eres de la generación Z.<br>Rasgo característico: Irreverencia."
      );
    } else if (this.añoNacimiento >= 1981 && this.añoNacimiento <= 1993) {
      document.write(
        "Eres de la generación Y.<br>Rasgo característico: Frustración."
      );
    } else if (this.añoNacimiento >= 1969 && this.añoNacimiento <= 1980) {
      document.write(
        "Eres de la generación X.<br>Rasgo característico: Obsesión por el éxito."
      );
    } else if (this.añoNacimiento >= 1949 && this.añoNacimiento <= 1968) {
      document.write(
        "Eres de la generación Baby Boom.<br>Rasgo característico: Ambición."
      );
    } else if (this.añoNacimiento >= 1930 && this.añoNacimiento <= 1948) {
      document.write(
        "Eres de la generación Silent.<br>Rasgo característico: Austeridad."
      );
    } else {
      document.write("Ingresa un año válido.");
    }
  }
}

const nombre = prompt("Ingresa tu nombre");
const edad = parseFloat(prompt("Ingresa tu edad"));
const sexo = prompt("Ingresa tu sexo");
const peso = parseFloat(prompt("Ingresa tu peso"));
const altura = parseFloat(prompt("Ingresa tu altura"));
const añoNacimiento = parseFloat(prompt("Ingresa tu año de nacimiento"));

const persona = new Persona(
  nombre,
  edad,
  undefined,
  sexo,
  peso,
  altura,
  añoNacimiento
);

persona.generaDNI();
document.write(persona.mostrarDatos());
document.write(
  `¿Es mayor de edad? ${persona.esMayorDeEdad() ? "Sí" : "No"}<br>`
);
persona.mostrarGeneracion();
