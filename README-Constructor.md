# Constructor

- ### Que es un constructor ?
    - El método constructor es un metodo especial para crear e inicializar un objeto creado a partir de una clase.

<br>

- Sintaxis:
    - definir un comportamiento llamandolo `constructor` este sera llamado cuando un objeto de la clase sea inicializado con `new`
    - ```
        class UnaClase{
            constructor(){
                console.log("objeto creado");
            }
        }
        ```

        y

        ```
            const unObjeto = new UnaClase();
        ```
    - El constructor modifica la manera en la que el objeto se va a inicializar por lo que también es posible agregar `parametros` de entrada e inicializar los estados del objeto