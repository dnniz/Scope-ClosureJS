//el ciclo esta generando un closure al ser un bloque iterativo, pero solo si usamos let y no var para declarar i ya que con var i se mostrara con el ultimo valor en todas las iteraciones
const ciclos = () => {
    for(let i = 1; i <= 10; i++){
        setTimeout(() => {
            console.log(i)
        },1000)
    }
}

ciclos();