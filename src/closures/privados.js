//un closure permite la creacion de variables que no son accesibles, solo podemos trabajar con ellas a traves de los metodos que definamos en el return
const persona = () => {
    let grabaNombre = "Nombre";
    return {
        getNombre: () => {
            return grabaNombre;
        },
        setName: (name) => {
            grabaNombre = name;
        }
    }
}

nuevaPersona = persona();
console.log(nuevaPersona.getNombre());
nuevaPersona.setName("Mauricio");
console.log(nuevaPersona.getNombre());