document.getElementById("location-form").addEventListener("submit", function(event) {
    event.preventDefault();
    getWeather();
});

function getWeather() {
    const apiKey = "925929de36ba3e16a735531f35c2430a"; // Replace with your OpenWeatherMap API key
    const locationInput = document.getElementById("location-input");
    const location = locationInput.value.trim();
    
    if (!location) {
        document.getElementById("weather-data").innerHTML = `<p>Please enter a city name</p>`;
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weather-data").innerHTML = `<p>Error: City not found</p>`;
            } else {
                const weatherInfo = `
                    <h2>${data.name}, ${data.sys.country}</h2>
                    <p>Temperature: ${data.main.temp}°C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById("weather-data").innerHTML = weatherInfo;
            }
            // ✅ Clear input field after submission
            locationInput.value = "";
        })
        .catch(error => {
            document.getElementById("weather-data").innerHTML = `<p>Error fetching data</p>`;
            locationInput.value = ""; // ✅ Clear input field even if there's an error
        });
}