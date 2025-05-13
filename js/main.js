// Redirigir al planeta correspondiente
function redirectToPlanet(planetId) {
    window.location.href = `html/planet.html?id=${planetId}`;
}

// Activar tooltips de Bootstrap al cargar el DOM
document.addEventListener('DOMContentLoaded', function () {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  tooltipTriggerList.map(function (el) {
    return new bootstrap.Tooltip(el);
  });
});

// Redirección personalizada por ID de planeta
function redirectToPlanet(id) {
  const planetPages = {
    1: "tatooine.html",
    2: "alderaan.html",
    3: "yavin.html",
    4: "hoth.html",
    5: "dagobah.html",
    6: "bespin.html",
    7: "endor.html",
    8: "naboo.html",
    9: "coruscant.html",
    10: "kamino.html"
  };
  const page = planetPages[id];
  if (page) {
    window.location.href = `.. /html/planet.html/${page}`;
  }
}

// Efecto parallax en el mapa galáctico y start
document.addEventListener('mousemove', function(e) {
  const bg = document.getElementById('galactic-bg');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  bg.style.transform = `translate(${x}px, ${y}px)`;
});

document.getElementById('start-button').addEventListener('click', function() {
document.getElementById('start-screen').style.display = 'none';
document.getElementById('main-map').classList.remove('hidden');
});

  // Desvanecer elementos
document.getElementById('start-button').addEventListener('click', function() {
document.getElementById('start-screen').classList.add('fade-out');
document.getElementById('main-map').classList.remove('hidden');
document.getElementById('main-map').classList.add('fade-in');
});
