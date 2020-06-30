//cualquier variable declarada de manera global puede ser accedida desde cualquier parte del codigo
var hola = 'Hola'; //declarar variables con var es peligroso por que permite definirla y reasignarla, con let no pasa eso.
var hola = 'Ciao';
let mundo = 'Mundo';
const completo = 'Hola Mundo';


const otraFuncion = () => {
    console.log(`${hola} ${mundo}`);
    console.log(completo);
}

otraFuncion();