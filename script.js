document.getElementById('locationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const location = document.getElementById('location').value;
    const apiKey = '848610b769ef890614798b6b0b971080';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Location not found');
            }
            return response.json();
        })
        .then(data => {
            document.getElementById('weather-location').textContent = data.name;
            document.getElementById('weather-temp').textContent = data.main.temp;
            document.getElementById('weather-condition').textContent = data.weather[0].description;
            document.getElementById('weather-humidity').textContent = data.main.humidity;
            document.getElementById('weather-wind').textContent = data.wind.speed;
            document.getElementById('weatherInfo').style.display = 'block';
        })
        .catch(error => {
            alert(error.message);
        });
});