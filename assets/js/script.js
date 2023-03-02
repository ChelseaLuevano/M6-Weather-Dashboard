// Variables
let aPIKey = eec8d3f247c70019f179e96be36c660d; 
let city; 
let lastSearchedCity = document. querySelector('input'). value;
let state;
let country;
let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

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

