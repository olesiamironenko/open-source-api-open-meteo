let pageHeader = document.getElementById("pageHeader");
console.log(pageHeader);
pageHeader.innerHTML = "Fetch API";

fetch('https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2024-04-24&end_date=2024-05-08&hourly=temperature_2m', {
    mode: 'no-cors',
    method: 'GET'
})

    .then(response => {
    if (!response.ok) {
        throw new Error('Request failed');
    }
    return response.text(); 
    })

    .then(data => {
        const openMeteoAPI = JSON.parse(data);
        console.log(openMeteoAPI); 
    })

  .catch(error => {
    console.error('An error occurred:', error);
  });
