// API Key Variable
let apiKey = "eec8d3f247c70019f179e96be36c660d"; 

// Query Selector Variables for City Form
let cityFormEl = document.querySelector('#city-form');
let searchButtonEl = document.querySelector('#searchbtn');
let cityInputEl = document.querySelector('#city');

// Query Selector Variables for Previously Searched Cities 
let lastSearchedCityEl = document.querySelector('input').value;
let cityButtonsEl = document.querySelector('#city-btn');
let cityListEl = document.querySelector('#city-list');

// Query Selector Variables for Currently Selected City Container
let cityWeatherEl = document.querySelector('#city-weather');
let cityTitleEL = document.querySelector('#city-title');
let cityDateEl = document.querySelector ('#city-date');
let imgIconEl = document.querySelector ('#icon');
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
let currentDayHour;
let secondDayHour;
let secondDay;
let thirdDay;
let fourthDay;
let fifthDay;

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

    event.preventDefault();

    cityName = cityInputEl.value.trim();
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey;

    fetch(queryURL)
        .then(function(response){
            if (response.ok) {
                response.json().then(function (data) {
                    console.log(data);
                    updateSelectedCity(data);
                    updateForecast(data);
                    currentDayDate(data);
                    saveCitytoStorage(data);
                    readStorage(data);
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
    cityTemperatureEl.textContent = data.main.temp + " F";
    cityWindEl.textContent = data.wind.speed + " MPH";
    cityHumidityEl.textContent = data.main.humidity + " %";

 

    // update current date and translate it from unix timestamp data format stored in the API
    let unixTimestamp = data.dt;
    // Convert the unix timestamp into milliseconds by multiplying it by 1000
   let milliseconds = (data.dt * 1000);
    // Use the newly created milliseconds value to create a date object with the new Date() constructor method
    let dataObject = new Date(milliseconds);
    // Use the .toLocaleString() function to convert the date object into human-friendly date strings
    let humanDataFormat = dataObject.toLocaleString("en-US", {dateStyle: "short"});
    // Update the city Date Element text content and add parentheses around date
    cityDateEl.textContent = "(" + humanDataFormat + ") ";

    // update icon
    let icon = data.weather[0].icon;
    imgIconEl.src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
}

// function to determine next 5 dates
function currentDayDate (data){
    // update current date and translate it from unix timestamp data format stored in the API
    console.log (data.dt);
    let unixTimestamp = data.dt;
    // Convert the unix timestamp into milliseconds by multiplying it by 1000
    let milliseconds = (data.dt * 1000);
    // Use the newly created milliseconds value to create a date object with the new Date() constructor method
    let dataObject = new Date(milliseconds);
    // Use the .toLocaleString() function to convert the date object into human-friendly date strings
    currentDay = dataObject.toLocaleString("en-GB", {day: "numeric"});
    
    console.log(currentDay);

    secondDay = parseInt(currentDay) + 1;

    console.log(secondDay);

    // secondDay.toLocaleString("en-US", {dateStyle: "short"});


}

// Function to update 5 Day Weather Forecast Container
function updateForecast(data) {
    // day1Card.textContent = 
    // day2Card.textContent = 
    // day3Card.textContent = 
    // day4Card.textContent = 
    // day5Card.textContent = 

    // tempDay1.textContent =
    // tempDay2.textContent =
    // tempDay3.textContent =
    // tempDay4.textContent =
    // tempDay5.textContent =

    // windDay1.textContent =
    // windDay2.textContent =
    // windDay3.textContent =
    // windDay4.textContent =
    // windDay5.textContent =

    // humidityDay1.textContent = 
    // humidityDay2.textContent = 
    // humidityDay3.textContent = 
    // humidityDay4.textContent = 
    // humidityDay5.textContent = 



}

// store the cities searched locally
function saveCitytoStorage(data){
    localStorage.setItem("name", JSON.stringify(data.name));
}

// read storage
function readStorage(data){
    
        let savedCity = data.name;

        let keyStorage = JSON.parse(localStorage.getItem(savedCity));
    
        console.log(keyStorage);

        // create city button list item
        let searchedCityEl = document.createElement('li');
        // update text of the new list item
        searchedCityEl.textContent = keyStorage;
        // searchedCityEl.setAttribute(id="city-btn");
        cityListEl.appendChild(searchedCityEl);
       
        
        // cityButtonsEl.textContent;

}



// When the search button is clicked on the city form, then call the Form Search Handler function 
cityFormEl.addEventListener('submit',formSearchHandler);


