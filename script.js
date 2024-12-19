document.getElementById('locationForm').addEventListener('submit', function (e) {
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
            document.getElementById('weatherDisplay').style.display = 'flex';

            const condition = data.weather[0].main.toLowerCase();
            const humidity = data.main.humidity;
            let imageUrl = '';

            if (condition.includes('rain')) {
                imageUrl = 'images/rainy.jpg';
            } else if (condition.includes('cloud')) {
                imageUrl = 'images/cloudy.jpg';
            } else if (condition.includes('clear')) {
                imageUrl = humidity > 50 ? 'images/humid_clear.jpg' : 'images/sunny.jpg';
            } else {
                imageUrl = 'images/default.jpg';
            }

            const weatherImageBar = document.getElementById('weatherImageBar');
            const weatherImage = document.getElementById('weatherImage');
            weatherImage.src = imageUrl;
            weatherImage.alt = `${data.weather[0].description} weather`;
            weatherImageBar.style.display = 'block';

            const { lat, lon } = data.coord;
            const map = L.map('map').setView([lat, lon], 10);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© OpenStreetMap contributors'
            }).addTo(map);

            L.marker([lat, lon]).addTo(map).bindPopup(`${data.name}`).openPopup();
        })
        .catch(error => {
            alert(error.message);
        });
});
