"Use strict";

/* Crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de aviones,
esta clase deberá contener el método agregarAvion, el cual recibirá un objeto de tipo Avión,
además de un método buscarAvion el cual recibirá el nombre de un avión y devolverá información
en caso de encontrarlo, si no lo encontró indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista de pasajeros.
Los aviones tienen el método abordar el cual permite que un pasajero suba al avión solo
si hay capacidad disponible en el mismo, caso contrario mostrar un mensaje que indique que el avión
está lleno.

Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3 objetos aviones
con diferentes destinos. Agregar los 3 aviones al aeropuerto, buscar un avión y usar el método abordar.
*/

class Avion {
  constructor(nombre, capacidad, destino) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.destino = destino;
    this.listaPasajeros = [];
  }

  abordar(pasajero) {
    if (this.listaPasajeros.length < this.capacidad) {
      this.listaPasajeros.push(pasajero);
      console.log(`Pasajero ${pasajero} abordado en el avión ${this.nombre}.`);
    } else {
      console.log(`¡El avión ${this.nombre} está lleno!`);
    }
  }
}

class Aeropuerto {
  constructor(nombreAeropuerto) {
    this.nombreAeropuerto = nombreAeropuerto;
    this.listaAviones = [];
  }

  agregarAvion(avion) {
    this.listaAviones.push(avion);
    console.log(
      `${avion.nombre} agregado al aeropuerto ${this.nombreAeropuerto}.`
    );
  }

  buscarAvion(nombreAvion) {
    const avionEncontrado = this.listaAviones.find(
      (avion) => avion.nombre === nombreAvion
    );
    if (avionEncontrado) {
      console.log(`Información del avión ${avionEncontrado.nombre}:`);
      console.log(avionEncontrado);
    } else {
      console.log(
        `El avión ${nombreAvion} no fue encontrado en el aeropuerto ${this.nombreAeropuerto}.`
      );
    }
  }
}

const aeropuertoInternacional = new Aeropuerto("Aeropuerto Internacional");

const avion1 = new Avion("Avión 1", 100, "Nueva York");
const avion2 = new Avion("Avión 2", 150, "Londres");
const avion3 = new Avion("Avión 3", 200, "Tokio");

aeropuertoInternacional.agregarAvion(avion1);
aeropuertoInternacional.agregarAvion(avion2);
aeropuertoInternacional.agregarAvion(avion3);

aeropuertoInternacional.buscarAvion("Avión 2");

avion2.abordar("Pasajero 1");
avion2.abordar("Pasajero 2");
