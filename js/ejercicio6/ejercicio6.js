"Use strict";

/* Crear una clase Libro que contenga al menos las siguientes propiedades:
ISBN
Título
Autor
Número de páginas

Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
*/

class Libro {
  constructor(isbn, titulo, autor, numPag) {
    this._isbn = isbn;
    this._titulo = titulo;
    this._autor = autor;
    this._numPag = numPag;
  }

  get isbn() {
    return this._isbn;
  }

  set isbn(newIsbn) {
    this._isbn = newIsbn;
  }

  get titulo() {
    return this._titulo;
  }

  set titulo(newTitulo) {
    this._titulo = newTitulo;
  }

  get autor() {
    return this._autor;
  }

  set autor(newAutor) {
    this._autor = newAutor;
  }

  get numPag() {
    return this._numPag;
  }

  set numPag(newNumPag) {
    this._numPag = newNumPag;
  }

  mostrarLibro() {
    console.log(
      `El libro ${this._titulo} con ISBN ${this._isbn} creado por el autor ${this._autor}, tiene ${this._numPag} páginas.`
    );
  }
}

const principito = new Libro(
  9783140464079,
  "El Principito",
  "Antoine de Saint-Exupéry",
  128
);
const quienQueso = new Libro(
  9780399240164,
  "¿Quién se ha llevado mi queso?",
  "Spencer Johnson",
  106
);

principito.mostrarLibro();
quienQueso.mostrarLibro();

if (principito.numPag > quienQueso.numPag) {
  console.log(
    `El libro "El Principito" tiene más páginas que el libro "¿Quién se ha llevado mi queso?"`
  );
} else if (quienQueso.numPag > principito.numPag) {
  console.log(
    `El libro "¿Quién se ha llevado mi queso?" tiene más páginas que el libro "El Principito"`
  );
} else {
  console.log("Ambos libros tienen la misma cantidad de páginas.");
}
