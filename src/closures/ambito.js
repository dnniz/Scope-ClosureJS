//segun el ambito lexico nuestro closure puede recordar el valor de las variables dentro de el
const contador = (i) => {
    let cont = i;
    const incrementar = () => {
        console.log(cont++);
    }
    return incrementar;
}

//ejecuto la funcion desde una variable que crea un scope
const miCuenta = contador(1);
miCuenta();
miCuenta();
miCuenta();

//creo un nuevo scope asignando contador a otra variable
const nuevaCuenta = contador(10);
nuevaCuenta();
nuevaCuenta();
nuevaCuenta();