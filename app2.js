const Gato = require("./Gato");



const unGato = new Gato("toffee", 3, 2.4, true);

console.log( unGato.getNombre()  );
console.log( unGato.getAnios()  );


//No es la idea!!! a pesar de que cumple
// con el encapsulamiento
/* unGato.setNombre("toffee");
unGato.setAnios(3);
unGato.setPeso(1.5); */

//No es la idea!!!
/* unGato.anios = 3;
unGato.colorOjos = "celeste";
unGato.colorPelaje = ["blanco", "negro"];
unGato.estaDieta = false;
unGato.esHuranio = true;
unGato.llegoAcompaniado = false; */
