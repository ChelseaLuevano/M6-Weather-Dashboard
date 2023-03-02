// API Key Variable
let aPIKey = eec8d3f247c70019f179e96be36c660d; 

// Query Selector Variables
let cityFormEl = document.querySelector('#city-form');
let cityButtonsEl = document.querySelector('#city-btn');
let cityInputEl = document.querySelector('#city');
let cityWeatherEl = document.querySelector('#city-weather');
let forecastEl = document.querySelector('#forecast');
let lastSearchedCityEl = document.querySelector('input').value;

// Data Variables
let state;
let country;
let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl + "&appid=" + APIKey;

// Function to call weather API to determine city weather

function callWeatherAPI () {
    

    fetch(queryURL)
    .then(function(response){
            if (response.ok) {
                response.json().then
            }
            else {
                alert('Unable to connect to Weather API');
            }
        }
        )
}

callWeatherAPI();

