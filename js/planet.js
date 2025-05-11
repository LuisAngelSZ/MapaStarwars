document.addEventListener('DOMContentLoaded', () => {
    // Obtén el nombre del planeta desde la URL
    const planetName = new URLSearchParams(window.location.search).get('name');
    const planetInfo = document.getElementById('planet-info');

    if (planetName) {
        // Hace la solicitud a la API de Star Wars (SWAPI)
        fetch(`https://swapi.dev/api/planets/?search=${planetName}`)
            .then(response => response.json())
            .then(data => {
                const planet = data.results[0]; // Obtiene el primer resultado
                if (planet) {
                    // Muestra la información del planeta
                    planetInfo.innerHTML = `
                        <h1>${planet.name}</h1>
                        <p><strong>Clima:</strong> ${planet.climate}</p>
                        <p><strong>Terreno:</strong> ${planet.terrain}</p>
                        <p><strong>Población:</strong> ${planet.population}</p>
                    `;
                } else {
                    planetInfo.innerHTML = `<p>No se encontró información para ${planetName}.</p>`;
                }
            })
            .catch(error => {
                planetInfo.innerHTML = `<p>Error al obtener los datos: ${error.message}</p>`;
            });
    } else {
        planetInfo.innerHTML = '<p>No se especificó un planeta.</p>';
    }
});