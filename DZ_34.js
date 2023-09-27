


const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";

const temperatureElement = document.getElementById("temperature");
const pressureElement = document.getElementById("pressure");
const descriptionElement = document.getElementById("description");
const humidityElement = document.getElementById("humidity");
const windSpeedElement = document.getElementById("wind-speed");
const windDegElement = document.getElementById("wind-deg");
const weatherIconElement = document.getElementById("weather-icon");

const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        temperatureElement.textContent = response.main.temp;
        pressureElement.textContent = response.main.pressure;
        descriptionElement.textContent = response.weather[0].description;
        humidityElement.textContent = response.main.humidity;
        windSpeedElement.textContent = response.wind.speed;
        windDegElement.textContent = response.wind.deg;
        weatherIconElement.src = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png";
    }
};

xhr.open("GET", apiUrl, true);
xhr.send();




