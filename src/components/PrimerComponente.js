import React from 'react'
import '../estilos/PrimerComponente.css';

function Componentes(props) {
  return (
    <div className='contenedor-informacion'>
      <div className='imagen-informacion'>
      <img src={require(`../img/${props.imagen}.jpg`)}  alt={`imagen de ${props.imagen}`}  id='imagenes'/>
      </div>
      <div className='contenedor-texto'>
        <p className='titulo'><strong>{props.nComponente}</strong> </p>
        <p className='texto'>{props.texto}</p>
      </div>
    </div>
  )
}

export function PrimerComponente() {
  return(
    <div>
      <Componentes
      imagen='tesla'
      nComponente ='Tesla Model 3'
      texto='El Model 3 de tracción trasera tiene una autonomía de 491 km*
             El Model 3 Performance tiene una autonomía de 547 km* El Model 3 Long Range tiene una
             autonomía de 614 km*.
             Que Tesla considera que un coche eléctrico medio tiene una vida útil de aproximadamente
             322.000 kilómetros, o 200.000 millas, por lo que sus baterías seguirán rindiendo a pleno
             rendimiento hasta el último día' />
      <Componentes
      imagen='riviantruck'
      nComponente ='Rivian Truck'
      texto='Con la ayuda de un supercargador, genera un total de 702 caballos de potencia y 881
             Nm de par. Según su ficha técnica es capaz de acelerar de 0 a 60 millas por hora en
             apenas 4,43 segundos. Fundada por el CEO y graduado del MIT RJ Scaringe, la empresa
             de VEs, Rivian, ha estado operando silenciosamente durante casi una década.' />
      <Componentes
      imagen='Mach-E'
      nComponente ='Ford Mustang Mach-E'
      texto='El Mustang Mach-E es el primero de la nueva generación de vehículos eléctricos 
      de Ford: un SUV deportivo que combina un diseño único, tecnología de punta y 
      prestaciones increíbles.
      ¿Cuánto corre el Mustang Mach-E?
      Desempeño de la Mustang eléctrica
      Con ello, su aceleración de 0 a 100 km/h lo logra en 3.6 segundos.
      Su batería es de 91 kWh, por lo que alcanza una autonomía de hasta 402 km con una carga completa.
      Además, su tracción es eAWD (Tracción Eléctrica en las cuatro ruedas).' />
  </div>
  )
}


