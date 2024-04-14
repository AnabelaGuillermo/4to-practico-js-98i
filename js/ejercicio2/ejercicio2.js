"Use strict";

/* Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar
la descripción del estado de la cuenta.
*/

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (ingreso) {
    this.saldo += ingreso;
  },

  extraer: function (extraccion) {
    if (extraccion <= this.saldo) {
      this.saldo -= extraccion;
    } else {
      console.log("No tiene suficiente saldo para realizar esta operación.");
    }
  },

  informar: function () {
    console.log(`Su saldo actual es de $${this.saldo}`);
  },
};

const ingreso = Number(prompt("Ingrese la cantidad a depositar:"));
const extraccion = Number(prompt("Ingrese la cantidad a retirar:"));

cuenta.ingresar(ingreso);
cuenta.extraer(extraccion);
cuenta.informar();
