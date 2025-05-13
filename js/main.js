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

// Efecto parallax
document.addEventListener('mousemove', function(e) {
  const bg = document.getElementById('galactic-bg');
  const x = (e.clientX / window.innerWidth - 0.5) * 20;
  const y = (e.clientY / window.innerHeight - 0.5) * 20;
  bg.style.transform = `translate(${x}px, ${y}px)`;
});

// Botón de inicio - fade
document.getElementById('start-button').addEventListener('click', function() {
  const startScreen = document.getElementById('start-screen');
  const mainMap = document.getElementById('main-map');

  startScreen.classList.add('fade-out');

  // Esperar a que termine el fadeOut para ocultar
  setTimeout(() => {
    startScreen.style.display = 'none';
    mainMap.classList.remove('hidden');
    mainMap.classList.add('fade-in');
  }, 1500);
});
