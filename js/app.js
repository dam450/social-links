/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

const particlesLineColor = getComputedStyle(document.body).getPropertyValue('--particles-line'); 
console.log(particlesLineColor)

function configParticle(dark = true) {

  const config = `
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "${dark ? '#22f' : '#f22'}"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "${dark ? '#222' : '#ddd'}",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 180,
          "line_linked": {
            "opacity": 0.8
          }
        },
        "bubble": {
          "distance": 133.99274002972194,
          "size": 20.301930307533627,
          "duration": 0.7308694910712106,
          "opacity": 1,
          "speed": 3
        },
        "repulse": {
          "distance": 87.91208791208791,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  }
  `
  return  obj = JSON.parse(config)

  
} 


particlesJS('particles-js', configParticle() );

const DARK_THEME = 'dark-blue';
const LIGHT_THEME = 'light-blue';

function toggleThemeMode() {
  if (document.body.classList.contains(LIGHT_THEME)) {
    document.body.classList.replace(LIGHT_THEME, DARK_THEME)
    localStorage.setItem("theme", DARK_THEME);
    particlesJS('particles-js', configParticle(false) );
  } else {
    document.body.classList.replace(DARK_THEME, LIGHT_THEME)
    localStorage.setItem("theme", LIGHT_THEME);
    particlesJS('particles-js', configParticle(true) );
  }
}

(function loadThemeModeOption() {
  const savedTheme = localStorage.getItem("theme")
  const activeTheme = document.body.classList.value
  
  if (activeTheme === savedTheme) return
  
  toggleThemeMode()
})();


document.querySelector('p.username')
  .addEventListener("click", toggleThemeMode)

