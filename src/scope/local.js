//creamos una funcion u elemento de control para el scope local
const scopeLocal = () => {
    const HOLA = 'Hola Mundo';
    console.log(HOLA);
}

scopeLocal();
//intentamos llamarla desde afuera de la funcion
//console.log(HOLA);

let scope = 'Soy global';

const functionScope = () => {
    let scope = 'Ahora soy local';
    //dentro del ambito lexico las variables pueden ser accedidas en los bloques hijo desde el bloque padre
    const obtenerValor = () => {
        return scope;
    }
    console.log(obtenerValor());
}

functionScope();
console.log(scope); //la variable global no es reasignada en el ambito local
