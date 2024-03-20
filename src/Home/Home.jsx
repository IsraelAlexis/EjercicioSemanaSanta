import { semanaSanta } from "../utils/semanaSantaBD"

export function Home() {

    // zona analisi de datos
    let resultado=semanaSanta.filter(function(diaSanto){
        return(diaSanto.costoEvento<=15000)
    })

    console.log(resultado)

    return(
        <>
        <h1>Programacion parroquia Semana Santa</h1>
        </>
    )
}