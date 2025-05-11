document.addEventListener('DOMContentLoaded', () => {
    const planetId = new URLSearchParams(window.location.search).get('id');
    const planetInfo = document.getElementById('planet-info');

    if (planetId) {
        planetInfo.innerHTML = '<p>Cargando información del planeta...</p>';
        fetch(`https://www.swapi.tech/api/planets/${planetId}`)
    .then(response => response.json())
    .then(data => {
        const planet = data.result.properties;
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
    })
    } else {
        planetInfo.innerHTML = '<p>No se especificó un planeta.</p>';
    }
});