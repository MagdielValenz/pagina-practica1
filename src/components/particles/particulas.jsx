import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

function Particulas() {
    const particlesInit = async (main) => {
        console.log(main);


        await loadFull(main);
    };

    const particlesLoaded = (container) => {
        console.log(container);
    };
  return (
    <Particles
    id='tsparticles'
    init={particlesInit}
    Loaded={particlesLoaded}

    options={{
        background: {
            color: {
                value: "#000",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
                onClick: {
                    enable: false,
                    mode: "push",
                },
                onHover: {
                    enable: false,
                    mode: "repulse",
                },
                resize: true,
            },
            modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.4,
                },
            },
        },
        particles: {
            color: {
                value: "#FF2F03",
            },
            links: {
                color: "#DC2F0A",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 1,
            },
            collisions: {
                enable: false,
            },
            move: {
                directions: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 5,
                straight: false,
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                value: 80,
            },
            opacity: {
                value: 0.5,
            },
            shape: {
                type: "circle",
            },
            size: {
                value: { min: 1, max: 5 },
            },
        },
        detectRetina: true,
    }}
/>
);
};

export default Particulas;
