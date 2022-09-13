const Usuario = require("./");


const unUsuario = new Usuario();
const otroUsuario = new Usuario();

unUsuario.setSaldo(50);
console.log(  unUsuario.getSaldo()  );

otroUsuario.setSaldo(100);
console.log(  otroUsuario.getSaldo()  );



/* unUsuario.setNombre("Erick");
console.log(  unUsuario.getNombre()  ); */

// saldo = 100
// como maximo se puede cargar 100 por intento
/* unUsuario.setSaldo(1000000000000000);

// cuanto saldo tengo ?
console.log(  unUsuario.getSaldo()  ); */


