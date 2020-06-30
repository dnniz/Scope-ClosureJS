//Ejemplo 1 el hoisting de js al compilar el codigo eleva la declaracion de la variable por sobre la asignacion, por lo que no genera error.
a = 2;
var a;
console.log(a);

//Ejemplo 2, el hoisting js solo lo utiliza para las declaracion pero no aplica para las asignaciones o accesos a la variable, por eso si genera error
console.log(b);
var b = 2;

//Ejemplo 3, en el caso de las funciones, el hoisting permite que se la funcion se cargue primero en memoria y luego sea ejecutada por mas que nosotros pongamos mal el orden.
nombrePerro('Luke');

function nombrePerro(nombre) {
    console.log(nombre);
}