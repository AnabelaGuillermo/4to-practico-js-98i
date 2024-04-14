"Use strict";

/* Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos,
el cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores de los
tres objetos instanciados.
*/

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo;
    this.nombre = nombre;
    this.precio = precio;
  }

  imprimeDatos() {
    document.write(
      `Código: ${this.codigo}, Nombre: ${this.nombre}, Precio: ${this.precio} <br>`
    );
  }
}

const producto1 = new Producto("001", "Producto 1", 10);
const producto2 = new Producto("002", "Producto 2", 20);
const producto3 = new Producto("003", "Producto 3", 30);

const productos = [producto1, producto2, producto3];

productos.forEach(function (Producto) {
  Producto.imprimeDatos();
});
