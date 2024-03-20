import { semanaSanta } from "../utils/semanaSantaBD"

export function Home() {

    // zona analisi de datos
    let resultado=semanaSanta.filter(function(diaSanto){
        return(diaSanto.costoEvento<=15000)
    })

    let filtro=semanaSanta.filter(function(diaDos){
        return(diaDos.cantidadFeligreses<3500 && diaDos.costoEvento<35000 && diaDos==false )
    })
        

return(
        <>
        <section className="container">
            <div className="row">
                <div className="col-12 col-md-8">
                    <h3>Programacion Semana Mayor
                    </h3>
                    <hr />
                    {semanaSanta.map(function(dia){
                        return(
                            <h1>{dia.eventoPrincipal} costo: $ {dia.costoEvento}</h1>
                            
                        )
                    })}
                </div>
            </div>
        </section>

        </>
    )
}