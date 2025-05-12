document.addEventListener('DOMContentLoaded', () => {
    const planetId = new URLSearchParams(window.location.search).get('id');
    const planetInfo = document.getElementById('planet-info');  // Para cambiar info
    const planetName = document.getElementById('planet-name')  // Para cambiar el nombre
    const planetImage = document.getElementById('planet-img');  // Para cambiar el planeta
    const bodyElement = document.getElementById('planet-body'); // Para cambiar el fondo

    if (planetId) {
        planetInfo.innerHTML = '<p>Cargando información del planeta...</p>';
        fetch(`https://www.swapi.tech/api/planets/${planetId}`)
        .then(response => response.json())
        .then(data => {
            const planet = data.result.properties;
            
            // Actualizar el nombre del planeta
            planetName.innerText = planet.name;
                        // Mostrar información del planeta
            planetInfo.innerHTML = `
            <h1>${planet.name}</h1>
            <p><strong>Clima:</strong> ${planet.climate}</p>
            <p><strong>Terreno:</strong> ${planet.terrain}</p>
            <p><strong>Población:</strong> ${planet.population}</p>
            <p><strong>Gravedad:</strong> ${planet.gravity}</p>
            <p><strong>Diámetro:</strong> ${planet.diameter} km</p>
            <p><strong>Periodo de rotación:</strong> ${planet.rotation_period} horas</p>
            <p><strong>Periodo orbital:</strong> ${planet.orbital_period} días</p>
            <p><strong>Agua superficial:</strong> ${planet.surface_water}%</p>
        `;
            
            // Cambiar imagen del planeta y fondo según el nombre
            switch(planet.name.toLowerCase()) {
                case 'alderaan':
                    planetImage.src = '../../media/planetas/a.png';
                    planetImage.alt = "Alderaan";
                    bodyElement.className = "planeta alderaan-bg"; // Cambiar fondo
                    break;
                case 'tatooine':
                    planetImage.src = '../../media/planetas/tatooine.png';
                    planetImage.alt = "Tatooine";
                    bodyElement.className = "planeta tatooine-bg"; // Cambiar fondo
                    break;
                case 'hoth':
                    planetImage.src = '../../media/planetas/hoth.png';
                    planetImage.alt = "Hoth";
                    bodyElement.className = "planeta hoth-bg"; // Cambiar fondo
                    break;
                case 'dagobah':
                    planetImage.src = '../../media/planetas/dagobah.png';
                    planetImage.alt = "Dagobah";
                    bodyElement.className = "planeta dagobah-bg"; // Cambiar fondo
                    break;
                case 'bespin':
                    planetImage.src = '../media/planetas/bespin.gif';
                    planetImage.alt = "Bespin";
                    bodyElement.className = "planeta bespin-bg"; // Cambiar fondo
                    break;    
                // Agrega más planetas si es necesario
                default:
                    planetImage.src = '../../media/planetas/default.png'; // Imagen por defecto si no se encuentra el planeta
                    planetImage.alt = "Planeta Desconocido";
                    bodyElement.className = "planeta default-bg"; // Fondo por defecto
            }

    })
    } else {
        planetInfo.innerHTML = '<p>No se especificó un planeta.</p>';
    }
});