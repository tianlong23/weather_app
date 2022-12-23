
let weather = {
    apiKey: "XXXXXX",
    fetchWeather: function(city) {
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" 
        + city 
        + "&units=metric&appid=" 
        + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(catchError)
    },
    displayWeather: function(data) {
        document.querySelector(".weather").classList.remove("error")
        document.querySelector(".weather").classList.add("loading");
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        document.querySelector(".headline").textContent = "Weather in " + name;
        document.querySelector(".icon").src = "http://openweathermap.org/img/wn/" + icon + ".png" ;
        document.querySelector(".temp").textContent = "Temperature: "+ temp + "°C";
        document.querySelector(".description").textContent = description;
        document.querySelector(".humidity").textContent = "Humidity: " + humidity + "%";
        document.querySelector(".windSpeed").textContent = "Wind Speed: " + speed + " " + "kmph ";
        document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?" + name + "')";
        setTimeout(addLoading, 1000)
    },
    search: function () {
        this.fetchWeather(document.querySelector(".search-bar").value)
    },
} 

function catchError () {
    document.querySelector(".weather").classList.add("error");
}

function addLoading () {
    document.querySelector(".weather").classList.remove("loading")
}

document.querySelector(".search button").addEventListener('click',  function() {
    weather.search();
})

document.querySelector(".search-bar").addEventListener("keyup", function(event){
    if (event.key == "Enter") {
        weather.search();
    }
});

weather.fetchWeather("shanghai");
