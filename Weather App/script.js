const apiKey = "ef9ad9dbbcb645dd26afcbbd6870a71d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric"
const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(){
    const response = await fetch(apiurl + `&appid=${apiKey}` + `&q=${cityName.value}`)
    var data = await response.json();
    console.log(data);

    document.querySelector('city').innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.main.speed +"km/h";

    if(data.weather[0].main == 'Clear'){
        document.querySelector(".weather-icon").src = "images/clear.png";
    }
    else if(data.weather[0].main == 'Clouds'){
        document.querySelector(".weather-icon").src = "images/clouds.png";
    }
    else if(data.weather[0].main == 'Drizzle'){
        document.querySelector(".weather-icon").src = "images/drizzle.png";
    }
    else if(data.weather[0].main == 'Mist'){
        document.querySelector(".weather-icon").src = "images/mist.png";
    }
    else if(data.weather[0].main == 'Rain'){
        document.querySelector(".weather-icon").src = "images/rain.png";
    }
    else if(data.weather[0].main == 'Snow'){
        document.querySelector(".weather-icon").src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = block;
}




searchBtn.addEventListener( "click", () => {
    checkWeather();
})