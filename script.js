// Theme toggle functionality
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark');
    themeToggle.textContent = body.classList.contains('dark') ? '☀️' : '🌙';
    localStorage.setItem('theme', body.classList.contains('dark') ? 'dark' : 'light');
});

// Check for saved theme preference on load
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme);
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
}

// Weather functionality
const API_KEY = '6b93abad6f4cef3cb1bb997fb23cbfd3';
const MELBOURNE_LAT = -37.8136;
const MELBOURNE_LON = 144.9631;

async function getWeather() {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${MELBOURNE_LAT}&lon=${MELBOURNE_LON}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
            throw new Error('Weather data not available');
        }

        const data = await response.json();
        updateWeatherUI(data);
    } catch (error) {
        showError(error.message);
    }
}

function updateWeatherUI(data) {
    const loading = document.getElementById('loading');
    const error = document.getElementById('error');
    const content = document.getElementById('weather-content');
    const recommendation = document.getElementById('recommendation');
    const weatherInfo = document.getElementById('weather-info');
    const weatherDetails = document.getElementById('weather-details');

    // Hide loading and error, show content
    loading.style.display = 'none';
    error.style.display = 'none';
    content.style.display = 'block';

    // Determine if brolly is needed
    const needsBrolly = 
        data.weather[0].main === 'Rain' || 
        data.weather[0].main === 'Drizzle' ||
        data.weather[0].main === 'Thunderstorm' ||
        (data.clouds && data.clouds.all > 85);

    // Update recommendation
    recommendation.innerHTML = needsBrolly 
        ? "Grab your brolly, mate! ☔" 
        : "No brolly needed today! 🌞";

    // Update weather info
    weatherInfo.textContent = `Current conditions: ${data.weather[0].description}`;

    // Update weather details
    weatherDetails.innerHTML = `
        <p>Temperature: ${Math.round(data.main.temp)}°C</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind: ${Math.round(data.wind.speed * 3.6)} km/h</p>
        ${data.clouds ? `<p>Cloud cover: ${data.clouds.all}%</p>` : ''}
    `;
}

function showError(message) {
    document.getElementById('loading').style.display = 'none';
    document.getElementById('weather-content').style.display = 'none';
    const error = document.getElementById('error');
    error.style.display = 'block';
    error.textContent = `Oops! ${message}. Try again later.`;
}

// Initial weather check
getWeather();

// Update weather every 10 minutes
setInterval(getWeather, 600000);
