class Usuario{
    #id = 0;
    #dni = 0;
    #contrasenia = "def contrasenia";
    #email = "def email";
    #saldo = 0;
    #nombre = "def nombre";
    #numeroCelular = 0;

    //Getter y Setter

    /**
     * Actualiza el estado #nombre
     * @param {String} nombre nuevo 
     */
    setNombre(nombre){
        this.#nombre = nombre;
    }
    /**
     * Devuelve el valor de #nombre
     */
    getNombre(){
        return this.#nombre;
    }

    /**
     * Actualiza el #saldo
     * como maximo 100
     * @param {Number} nuevoSaldo para el Usuario
     */
    setSaldo(nuevoSaldo){
        if(nuevoSaldo <= 100){
            this.#saldo = nuevoSaldo;
        }else{
            console.log("Error - Maximo de saldo 100");
        }
    }

    getSaldo(){
        return this.#saldo;
    }

}

module.exports = Usuario;