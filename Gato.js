


class Gato{
    //Estados o Caracteristicas o Campos
    #nombre = "def nombre";
    #anios = 0;
    #peso = 0.0;
    #aniosParaJubilar;
    #estaDieta;
    #llegoAcompaniado;
    #colorOjos;
    #colorPelaje;
    #esHuranio = false;

    /**
     * Inicializa los estados del objeto
     * @param {String} nombre nuevo
     * @param {Number} anios nuevo
     * @param {Number} peso nuevo
     * @param {Boolean} esHuranio nuevo 
     */
    constructor(nombre, anios, peso, esHuranio){
        this.#nombre = nombre;
        this.#anios = this.verificarSiEdadEsValida(anios);
        this.#peso = peso;
        this.#esHuranio = esHuranio;
    }

    /**
     * Verifica si la edad esta en un rango aceptable de 0 y 31
     * Si es verificado devuelve los anios recibidos
     * Si no es verificado devuelve 0
     * @param {Number} anios recibidos
     */
    verificarSiEdadEsValida(anios){
        let aniosDevolver = -1;
        if ( (anios >= 0) && (anios <= 31)  ) {
            aniosDevolver = anios;
        }
        return aniosDevolver;
    }

    //SETTER
    setNombre(nombre){
        this.#nombre = nombre;
    }

    getNombre(){
        return this.#nombre;
    }

    setAnios(anios){
        this.#anios = anios;
    }

    getAnios(){
        return this.#anios;
    }

    setPeso(peso){
        this.#peso = peso;
    }

    getPeso(){
        return this.#peso;
    }

    setEsHuranio(esHuranio){
        this.#esHuranio = esHuranio;
    }

    getEsHuranio(){
        return this.#esHuranio;
    }
    
}


module.exports = Gato;