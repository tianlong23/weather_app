//STEPS
//  https://www.youtube.com/watch?v=WZNG8UomjSI&t=25s
//Build out HTML and CSS to make it look exactly as I want it to with dummy data, draft own design - DONE
//simple layout with background image, and then a square in the middle with the information required - DONE
//information: search bar, weather in X, temperature, cloudy/sunny/whatever, humidity, and wind speed - DONE

//build API in js
//openweathermap.org
//gather data from API
//assign to existing html elements

let weather = {
    apiKey: "60b30e85c4e96b584f5301999550a327",
    fetchWeather: function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed);
        document.querySelector(".headline").textContent = "Weather in " + name;
        document.querySelector(".temp").textContent = "Temperature: "+ temp + "°C";
        document.querySelector(".description").textContent = description;
        document.querySelector(".humidity").textContent = "Humidity: " + humidity + "%";
        document.querySelector(".windSpeed").textContent = "Wind Speed: " + speed + "kmph ";
    }
}