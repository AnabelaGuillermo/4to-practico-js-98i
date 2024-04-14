"Use strict";

/* Escribe una clase que permita crear distintos objetos “rectángulos”,
con las propiedades de alto y ancho, mas los métodos necesarios para modificar
y mostrar sus propiedades, calcular el perímetro y el área.
*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }

  perimetro() {
    const perimetro = 2 * this.alto + 2 * this.ancho;
    console.log(`El perímetro del rectángulo es ${perimetro}`);
  }

  area() {
    const area = this.alto * this.ancho;
    console.log(`El área del rectángulo es ${area}`);
  }
}

const alto = Number(prompt("Ingrese el alto del rectángulo:"));
const ancho = Number(prompt("Ingrese el ancho del rectángulo:"));

const miRectangulo = new Rectangulo(alto, ancho);
miRectangulo.perimetro();
miRectangulo.area();
