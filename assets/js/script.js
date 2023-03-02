// Variables
let aPIKey = eec8d3f247c70019f179e96be36c660d; 
let city; 
let state;
let country;
let queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;


fetch(queryURL);
