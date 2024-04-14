"Use strict"

/* Crea un objeto llamado auto que tenga algunas características como el color, marca, modelo
y si está encendido o apagado. Crea los métodos necesarios para permitir encender y apagar el auto.

Output:



objeto.encender();
objeto.apadar()
auto encendido
El auto se apagó

*/

const auto = {
    color: "rojo",
    marca: "ford",
    modelo: "falcon",
    encendido: false,

    encender: function() {
        this.encendido = true;
        console.log("Auto encendido");
    },

    apagar: function() {
        this.encendido = false;
        console.log("El auto se apagó");
    }
};

auto.encender();
auto.apagar();