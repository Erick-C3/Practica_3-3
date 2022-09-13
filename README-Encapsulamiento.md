# Encapsulamiento

-  ### Que es encapsulamiento ? 
    1. Un mecanismo para restringir el acceso directo a algunos de los componentes del objeto
    1. Un mecanismo de agrupación de datos con métodos que operan sobre esos datos
-  ### Por que encapsulamiento ?
    1. Seguridad - Acceso controlado
    1. Ocultar la implementación y `exponer el comportamiento`
    1. Bajo acoplamiento - Modificar la implementacion en cualquier momento
- ### Tipos de encapsulamiento:
    1. Public: puede accederse fuera y dentro de la clase/objeto, por defecto todo es publico
    1. Protected: solo se puede acceder mediante la clase o subclases 
    1. Private: solo se puede acceder dentro de la clase ``(proximamente)``
- ### Cuando usar private?
    - Como regla general, primero hacer que todos los métodos/estados de clase sean privados de forma predeterminada.
- ### Cuando usar public?
    - Hacer público un método cada vez que el objeto necesita usar ese método para interactuar con otros objetos.
    - Los estados deben ser privados(``private``) o protegidos(``protected``), solo bajo razones especificas usar el encapsulamiento publico(``public``)

<br>

-  ### Syntaxis del encapsulamiento private:
    - `#` antes de cada nombre para indicar que el encapsulamiento es `privado`
    - ejemplo: ```#nombre``` (un estado)
        - Este estado o comportamiento ahora solo puede accederse _dentro de la clase_
    - para poder acceder al estado fuera de la clase es necesario usar:
        1. Getters: comportamiento que devuelve el valor del estado adjunto al nombre
            - `getNombre()` devuelve el valor del estado `nombre`
        1. Setters: comportamiento que asigna un nuevo valor a un estado
            - `setNombre()` asigna un nuevo valor al estado `nombre`