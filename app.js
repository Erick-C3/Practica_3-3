const Usuario = require("./Usuario");

/*
    unUsuario quiero que tenga 40 de saldo
    y se llama pepito
*/

const unUsuario = new Usuario(40, "pepito");
const otroUsuario = new Usuario();



console.log(  unUsuario.getSaldo()  );
unUsuario.setSaldo(50);
console.log(  unUsuario.getSaldo()  );

/* otroUsuario.setSaldo(100);
console.log(  otroUsuario.getSaldo()  ); */

/* console.log(  unUsuario.getNombre()  );
unUsuario.setNombre("Erick");
console.log(  unUsuario.getNombre()  ); */

// saldo = 100
// como maximo se puede cargar 100 por intento
/* unUsuario.setSaldo(1000000000000000);

// cuanto saldo tengo ?
console.log(  unUsuario.getSaldo()  ); */


