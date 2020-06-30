//dentro de un mismo scope no se debe realizar la redeclaracion de variables por eso es importante usar let ya que no lo permite
const redeclaraciones = () => {
    //esto es redeclarar
    var x = 1;
    var x = 2; //lo permite

    let y = 1;
    let y = 2; //no lo permite

    //esto es reasignar
    var x = 1;
    x = 2; //correcto

    let y = 1;
    y = 2; //correcto

    console.log(x);
    console.log(y);
}