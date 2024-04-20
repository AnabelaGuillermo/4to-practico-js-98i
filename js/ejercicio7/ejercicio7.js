/* Nos piden realizar una agenda telefónica de contactos.

Un contacto está definido por un nombre y un teléfono. Se considera que un contacto es igual
a otro cuando sus nombres son iguales.

Una agenda de contactos está formada por un conjunto de contactos. Se podrá crear de dos formas,
indicando nosotros el tamaño o con un tamaño por defecto (10).

Los métodos de la agenda serán los siguientes:

aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda no puede
almacenar más contactos indicar por pantalla.
existeContacto(Contacto): indica si el contacto pasado existe o no.
listarContactos(): Lista toda la agenda
buscarContacto(nombre): busca un contacto por su nombre y muestra su teléfono.
eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se ha eliminado o no por pantalla
agendaLlena(): indica si la agenda está llena.
huecosLibres(): indica cuántos contactos más podemos ingresar.

Crea un menú con opciones que serán seleccionadas por el usuario usando un prompt,
las salidas de las operaciones seleccionadas por el usuario se pueden mostrar en pantalla y  por consola.
*/

function Contacto(nombre, telefono) {
  this.nombre = nombre;
  this.telefono = telefono;
}

function Agenda(tamano) {
  this.contactos = [];
  this.tamanoMaximo = tamano || 10;

  this.aniadirContacto = function (contacto) {
    if (this.contactos.length < this.tamanoMaximo) {
      this.contactos.push(contacto);
      console.log(`Contacto ${contacto.nombre} añadido a la agenda.`);
    } else {
      console.log("La agenda está llena, no se puede añadir más contactos.");
    }
  };

  this.existeContacto = function (contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === contacto.nombre) {
        return true;
      }
    }
    return false;
  };

  this.listarContactos = function () {
    console.log("Lista de contactos:");
    for (let i = 0; i < this.contactos.length; i++) {
      console.log(`${this.contactos[i].nombre} : ${this.contactos[i].telefono}`);
    }
  };

  this.buscarContacto = function (nombre) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === nombre) {
        console.log(`Teléfono de ${this.contactos[i].nombre}: ${this.contactos[i].telefono}`);
        return;
      }
    }
    console.log(`No se encontró ningún contacto con el nombre ${nombre}.`);
  };

  this.eliminarContacto = function (contacto) {
    for (let i = 0; i < this.contactos.length; i++) {
      if (this.contactos[i].nombre === contacto.nombre) {
        this.contactos.splice(i, 1);
        console.log(`Contacto ${contacto.nombre} eliminado de la agenda.`);
        return;
      }
    }
    console.log(`El contacto ${contacto.nombre} no existe en la agenda.`);
  };

  this.agendaLlena = function () {
    return this.contactos.length >= this.tamanoMaximo;
  };

  this.huecosLibres = function () {
    return this.tamanoMaximo - this.contactos.length;
  };
}

const agenda = new Agenda();

while (true) {
  const opcion = prompt(
    "Seleccione una opción:\n1. Añadir contacto\n2. Comprobar si existe un contacto\n3. Listar contactos\n4. Buscar contacto por nombre\n5. Eliminar contacto\n6. Ver si la agenda está llena\n7. Ver cuántos huecos libres hay\n8. Salir"
  );

  switch (opcion) {
    case "1":
      let nombre = prompt("Introduzca el nombre del contacto:");
      let telefono = prompt("Introduzca el teléfono del contacto:");
      agenda.aniadirContacto(new Contacto(nombre, telefono));
      break;
    case "2":
      let nombreBuscar = prompt("Introduzca el nombre del contacto a buscar:");
      console.log(agenda.existeContacto(new Contacto(nombreBuscar)));
      break;
    case "3":
      agenda.listarContactos();
      break;
    case "4":
      let nombreBuscarTelefono = prompt(
        "Introduzca el nombre del contacto a buscar:"
      );
      agenda.buscarContacto(nombreBuscarTelefono);
      break;
    case "5":
      let nombreEliminar = prompt(
        "Introduzca el nombre del contacto a eliminar:"
      );
      agenda.eliminarContacto(new Contacto(nombreEliminar));
      break;
    case "6":
      console.log(
        agenda.agendaLlena()
          ? "La agenda está llena."
          : "La agenda no está llena."
      );
      break;
    case "7":
      console.log(`Huecos libres en la agenda: ${agenda.huecosLibres()}`);
      break;
    case "8":
      console.log("Saliendo del programa.");
      process.exit(0);
    default:
      console.log("Opción inválida.");
  }
}
