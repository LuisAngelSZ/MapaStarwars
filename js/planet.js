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
        `;
    })
    } else {
        planetInfo.innerHTML = '<p>No se especificó un planeta.</p>';
    }
});