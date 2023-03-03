// API Key Variable
let apiKey = "eec8d3f247c70019f179e96be36c660d"; 

// Query Selector Variables
let cityFormEl = document.querySelector('#city-form');
let searchButtonEl = document.querySelector('#searchbtn');
let cityButtonsEl = document.querySelector('#city-btn');
let cityInputEl = document.querySelector('#city');
let cityWeatherEl = document.querySelector('#city-weather');
let forecastEl = document.querySelector('#forecast');
let lastSearchedCityEl = document.querySelector('input').value;

// Data Variables
let state;
let country;
let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityInputEl.value + "&appid=" + apiKey;

// function
let formSearchHandler = function (event) {
    event.preventDefault(); 

    // Defining cityName input box value entered by user and removing any whitespace
    let cityName = cityInputEl.value.trim();

    WeatherAPI();

    if (cityName) {
        console.log("wowww I did it")
    } else {
    alert("Wow I didn't do it");
    } 
}

// Function to call weather API to determine city weather
function WeatherAPI () {
    fetch(queryURL)
    .then(function(response){
            if (response.ok) {
                // need to look at other examples to make sure the .then below is correct as instructor said this isn't happening
                response.json().then(function (data) {
                    console.log(data);
                  });
            }
            else {
                alert('Unable to connect to Weather API');
            }
        }
        ) 
}



// When the search button is clicked, then the Weather API function 
searchButtonEl.addEventListener('submit',formSearchHandler);

// save cityInputEl Value & call Weather API function
// function saveCity() {
//     cityInputEl = cityInputEl.value.trim();
//     WeatherAPI();
// }


