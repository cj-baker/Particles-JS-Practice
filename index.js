tsParticles.load("tsparticles", {
        fullScreen: {
          enable: false,
        },
        fpsLimit: 60,
        particles: {
          number: {
            value: 100,
          },
          links: {
            enable: true,
            distance: 50,
          },
          move: {
            enable: true,
            speed: 2,
            outModes: {
              default: "bounce",
            },
          },
          size: {
            value: 1,
          },
        },
});