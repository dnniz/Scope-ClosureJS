//Un closure define un nuevo scope dentro de otro el cual no puede ser sobreescrito por el de afuera y permite conservar el valor de las variables

//ejemplo sin closure
const monedero = (monedas) => {
    //por falta del closure monedasGuardadas se inicializa a 0 cada que llamamos la funcion
    let monedasGuardadas = 0;
    monedasGuardadas += monedas;
    console.log(`$${monedasGuardadas}`);
}

monedero(5);
monedero(10);

console.log('----------------------------------------------------------');

//ejemplo con closure
const monederoClosure = () =>{
    let monedasGuardadas = 0;
    //creo otra funcion para crear un scope interno
    const cuentaMonedas = (monedas) => {
        monedasGuardadas += monedas;
        console.log(`$${monedasGuardadas}`);
    }
    return cuentaMonedas;
}

let miMonedero = monederoClosure();

miMonedero(5);
miMonedero(10);
miMonedero(20);