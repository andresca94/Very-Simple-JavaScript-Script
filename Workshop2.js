
function viajeAlColegio(personaje, BOLSO) {

    let historia = '';

    historia += `
    El joven ${personaje}, salió de su casa a las 7am para abordar el bus que lo llevaría hacia el colegio...`

    historia += `Cuando ${personaje} llegó a la estación, se dirigió a la señorita de la tiquetera y le preguntó --¿El bus que va hacia el colegio ya salió? `

    const elBusYaPaso = true // Respuesta de la señorita
    if (elBusYaPaso) {
        historia += "A lo que ella respondió que sí."

        historia += `${personaje}, evidentemente decepcionado, recordó que aún tenía mucho tiempo, así que decidió hacer un poco de ejercicio, por lo que se iría caminando. Emprendió entonces rumbo al sur por:`

        for (let i = 1; i <= 3; i++) {
            historia += `${i}, `;
        }

        historia += 'Cuadras, para luego girar a la derecha y continuar caminando por: '

        let cuadra = 1;
        let noEstaEnElColegio = true;
        while (noEstaEnElColegio) {
            historia += `${cuadra}, `
            if (cuadra == 5) {
                historia += `Cuadras más. Finalmente, luego de 30 minutos de caminata, ${personaje} llega a su destino.`

                noEstaEnElColegio = false;
            }
            cuadra++;
        }
    }else {
        historia += "A lo que ella respondió que no"

        historia += `${personaje} aborda el bus unos minutos después y llega a su destino.`
    }

    historia += `Una vez en el colegio, ${personaje} se dirigió a su salón de clases y sacó de su bolso uno de sus ${BOLSO.cuadernos} cuadernos para la clase de artes. Posteriormente, ${personaje} sacó sus lápices de colores`

    let listaColor = BOLSO.colores

    for(let color of listaColor ){
      historia += color + ", "
    }

  	historia += `para pintar uno de sus dibujos. Finalmente a las 10 am ${personaje} sale al recreo a `
    if (BOLSO.tiene_desayuno=== false) {
        historia += "comprar su desayuno y continuar con sus trabajos estudiantiles."
    } else {
        historia += "desayunar y continuar con sus trabajos estudiantiles."
    }

    return historia;
}

console.log(viajeAlColegio())
