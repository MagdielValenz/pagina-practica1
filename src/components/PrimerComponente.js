import React from 'react'
import '../estilos/PrimerComponente.css';

function Componentes(props) {
  return (
    <div className='contenedor-informacion'>
      <div className='imagen-informacion'>
      <img src={require(`../img/${props.imagen}.jpg`)}  alt={`imagen de ${props.imagen}`}  id='imagenes'/>
      </div>
      <div className='contenedor-texto'>
        <p className='titulo'>Mi <strong>{props.nComponente}</strong> componente </p>
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
      nComponente ='Primer'
      texto='Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos' />
      <Componentes
      imagen='riviantruck'
      nComponente ='Segundo'
      texto='Este es un Texto asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos' />
      <Componentes
      imagen='Mach-E'
      nComponente ='Tercer'
      texto='Este es un Texto asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos,Este es un texto de prueba asi que podriamos que somos amigos' />
  </div>
  )
}


