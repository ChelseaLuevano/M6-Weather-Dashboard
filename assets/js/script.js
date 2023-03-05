// API Key Variable
let apiKey = "eec8d3f247c70019f179e96be36c660d"; 

// Query Selector Variables for City Form
let cityFormEl = document.querySelector('#city-form');
let searchButtonEl = document.querySelector('#searchbtn');
let cityInputEl = document.querySelector('#city');

// Query Selector Variables for Previously Searched Cities 
let lastSearchedCityEl = document.querySelector('input').value;
let cityButtonsEl = document.querySelector('#city-btn');

// Query Selector Variables for Currently Selected City Container
let cityWeatherEl = document.querySelector('#city-weather');
let cityTitleEL = document.querySelector('#city-title');
let cityDateEl = document.querySelector ('#city-date')
let cityTemperatureEl = document.querySelector('#temperature');
let cityWindEl = document.querySelector('#wind');
let cityHumidityEl = document.querySelector('#humidity');

// Query Selector Variables for 5 Day Weather Forecast Container
let forecastEl = document.querySelector('#forecast');


// Data Variables
let state;
let country;
let queryURL;
let city;


// Function to be used if user input a cityName into form
let formSearchHandler = function (event) {
    event.preventDefault(); 

    // Defining cityName input box value entered by user and removing any whitespace
    city = cityInputEl.value.trim();

    if (city) {
        // If there is a value in the cityName, call the Weather API.
        weatherAPI();
    } else {
    alert("Please enter a city name.");
    } 
}


// Function to translate city to longitude and latitidue coordinates to use Geocoder API 
    //  function translateCityName(city.name) {
    //     let queryURL = "http://api.openweathermap.org/geo/1.0/direct?q=" + {city name},{state code},{country code} + "&appid=" + apiKey;
        
    //     if (cityName) {
    //         WeatherAPI(name);
    //         console.log("wowww I did it")
    //     } else {
       
    //     } 
    // }



// Function to call weather API to determine city weather
function weatherAPI () {
    cityName = cityInputEl.value.trim();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(queryURL)
        .then(function(response){
            if (response.ok) {
                // need to look at other examples to make sure the .then below is correct as instructor said this isn't happening
                response.json().then(function (data) {
                    console.log(data);
                    updateCity(data);
                    updateTemperatureAndHumidity(data.main);
                    updateWind(data.wind)
                  });
            }
            else {
                alert('Unable to connect to Weather API');
            }
        }
        ) 
}

// // Function to update the city value in Currently Selected City Container
// function updateCity(name) {
//     cityTitleEL.textContent = name;
// }

// Function to update the city value in Currently Selected City Container
let updateCity = function (name) {
    cityTitleEL.textContent = name.name;
}

// Function to update the weather values in Currently Selected City Container
function updateTemperatureAndHumidity(temp, main) {
   cityTemperatureEl.textContent = temp.temp;
   cityHumidityEl.textContent = main.humidity;
}

// Function to update the wind values in Currently Selected City Container
function updateWind(wind) {
    cityWindEl.textContent = wind;
 }

// When the search button is clicked on the city form, then call the Form Search Handler function 
cityFormEl.addEventListener('submit',formSearchHandler);


