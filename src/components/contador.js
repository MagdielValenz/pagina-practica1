import { useState } from 'react';
import React from "react";
import '../estilos/contador.css'
import '../estilos/boton.css'

export function Contador(){
    const [numeClicks, setnumClicks] = useState(0);

    const Aumentar = () => {
        setnumClicks(numeClicks+1);
    }
    const Reiniciar = () => {
        setnumClicks(0);
    }
    
    return(
        <div className="contador">
            {numeClicks}
            <Boton texto='Click' tipoBoton={true} funcion={Aumentar}/>
            <Boton texto='Reinciar' tipoBoton={false} funcion={Reiniciar}/>
        </div>
    );
}

function Boton({texto, tipoBoton, funcion}){
    return(
        <div className='caja'>
            <button
            className={tipoBoton ? 'Aumento' : 'Reiniciar' }
            onClick={funcion}>
            {texto}
            </button>
        </div>
    )
}

