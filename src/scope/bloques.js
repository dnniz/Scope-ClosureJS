//La declaracion de variables con var permite el acceso a ella dentro de todo el scope de la funcion lo cual es peligroso, se recomienda el uso de let que la restringe dentro del bloque hacia adentro.
const bloques = () => {
    if(true){
        var fruta1 = 'Manzana';
        let fruta2 = 'Sandia';
        const fruta3 = 'Pera';
    }

    console.log(fruta1);
    console.log(fruta2);
    console.log(fruta3);
}

bloques();