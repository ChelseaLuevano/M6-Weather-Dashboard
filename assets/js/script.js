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
let cityDateEl = document.querySelector ('#city-date');
let cityTemperatureEl = document.querySelector('#temperature');
let cityWindEl = document.querySelector('#wind');
let cityHumidityEl = document.querySelector('#humidity');

// Query Selector Variables for 5 Day Weather Forecast Container
let forecastEl = document.querySelector('#forecast');
let day1Card= document.querySelector('#date-1');
let day2Card= document.querySelector('#date-2');
let day3Card= document.querySelector('#date-3');
let day4Card= document.querySelector('#date-4');
let day5Card= document.querySelector('#date-5');
let tempDay1 = document.querySelector('#temp-1');
let tempDay2 = document.querySelector('#temp-2');
let tempDay3 = document.querySelector('#temp-3');
let tempDay4 = document.querySelector('#temp-4');
let tempDay5 = document.querySelector('#temp-5');
let windDay1 = document.querySelector('#wind-1');
let windDay2 = document.querySelector('#wind-2');
let windDay3 = document.querySelector('#wind-3');
let windDay4 = document.querySelector('#wind-4');
let windDay5 = document.querySelector('#wind-5');
let humidityDay1 = document.querySelector('#humidity-1');
let humidityDay2 = document.querySelector('#humidity-2');
let humidityDay3 = document.querySelector('#humidity-3');
let humidityDay4 = document.querySelector('#humidity-4');
let humidityDay5 = document.querySelector('#humidity-5');


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
                response.json().then(function (data) {
                    console.log(data);
                    updateSelectedCity(data);
                    updateDate (data);
                  });
            }
            else {
                alert('Unable to connect to Weather API');
            }
        }
        ) 
}

// // Function to update the city value in Currently Selected City Container
function updateSelectedCity(data) {
    cityTitleEL.textContent = data.name;
    cityTemperatureEl.textContent = data.main.temp;
    cityWindEl.textContent = data.wind.speed;
    cityHumidityEl.textContent = data.main.humidity;
}


// Function to update the date value in Currently Selected City Container
let updateDate = function(dt_txt) {
    cityDateEl.textContent = dt_txt;
}

// When the search button is clicked on the city form, then call the Form Search Handler function 
cityFormEl.addEventListener('submit',formSearchHandler);


