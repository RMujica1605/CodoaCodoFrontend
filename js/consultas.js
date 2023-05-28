
  const form = document.getElementById('buscar');
  const input = document.getElementById('ingresa');
  const resultsContainer = document.getElementById('resultados');

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const google = input.value;
    search(google);
  });

function search(google) {
    const apiKey = 'AIzaSyCf70fDIaTj4hSaBC2x0yjKydQFOOAH0-A'; 
    const searchEngineId = 'b61999904129446b4'; 

    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${searchEngineId}&q=${google}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        displayResults(data);
      })
      .catch(error => {
        console.error('Error al realizar la búsqueda:', error);
      });
  }

  function displayResults(data) {
    resultsContainer.innerHTML = ''; 

    if (data.items && data.items.length > 0) {
      data.items.forEach(item => {
        const title = item.title;
        const link = item.link;

        const resultElement = document.createElement('div');
        resultElement.innerHTML = `<a href="${link}">${title}</a>`;

        resultsContainer.appendChild(resultElement);
      });
    } else {
      resultsContainer.innerHTML = 'No se encontraron resultados.';
    }
  }
