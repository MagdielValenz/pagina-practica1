
import './App.css';
import { PrimerComponente } from './components/PrimerComponente';
import { Contador } from './components/contador';
// import Carroussel from './components/carrousel';
import './scripts/materialize/css/materialize.min.css';
import M from 'materialize-css';
import { useEffect } from 'react';
import tesla from './img/tesla.jpg';
import rivian from './img/riviantruck.jpg';
import Mach from './img/Mach-E.jpg';
import Particulas from './components/particles/particulas';


document.addEventListener('DOMContentLoaded', () => {
  const elementosCarousel = document.querySelectorAll('.carousel');
  M.Carousel.init(elementosCarousel, {
    duration: 150,
    dist: 0,
    shift: 5,
    padding: 5,
    numVisible: 1
  });
});

function App() {
  useEffect(() => {
    M.AutoInit();
  }, []);

  return (
    <div className="App">
      <div className='container'>
        <div className='row'>
          <div className='col s12'>
            <h1 className='center-align titulo' id='Titulo-Principal'>¿Cual es tu Auto Electrico Favorito?</h1>
            <div className='carousel center-align' id='carousel-align'>
              <div className='carousel-item' id='carousel'>
                <img src={tesla} alt='Tesla' />
              </div>
              <div className='carousel-item' id='carousel'>
                <img src={rivian} alt='Rivian' />
              </div>
              <div className='carousel-item' id='carousel'>
                <img src={Mach} alt='Mach-E' />
              </div>
              <div className='carousel-item' id='carousel'>
                <img src={Mach} alt='Mach-E' />
              </div>
              <div className='carousel-item' id='carousel'>
                <img src={Mach} alt='Mach-E' />
              </div>
            </div>
          </div>
        </div>
      </div>

        <PrimerComponente className="contenedor-P" />

      <div className='Botones'>
        <Contador className='Contador' />
      </div>
      <div id='b-ground'>
        <Particulas id='background'/>
      </div>
    </div>
  );
}

export default App;
