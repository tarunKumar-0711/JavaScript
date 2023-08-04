// console.log("js Loaded");
const apiKey = "ef9ad9dbbcb645dd26afcbbd6870a71d";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
const cityName = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

function messageForCatchBlock() {
  document.querySelector(".weather").style.display = "none";
  document.querySelector(".catch-block").style.display = "block";
  //console.log(document.querySelector(".catch-block"));
  document.querySelector(
    ".catch-block"
  ).innerHTML = `Data For ${cityName.value} is not available!`;
  document.querySelector(".catch-block").style.display = "block";
}

function successDomManipulation(data) {
  //   console.log("success", data);
  document.querySelector(".weather").style.display = "block";
  document.querySelector(".catch-block").style.display = "none";
  //console.log(document.querySelector(".city"));
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

  if (data.weather[0].main == "Clear") {
    document.querySelector(".weather-icon").src = "images/clear.png";
  } else if (data.weather[0].main == "Clouds") {
    document.querySelector(".weather-icon").src = "images/clouds.png";
  } else if (data.weather[0].main == "Drizzle") {
    document.querySelector(".weather-icon").src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    document.querySelector(".weather-icon").src = "images/mist.png";
  } else if (data.weather[0].main == "Rain") {
    document.querySelector(".weather-icon").src = "images/rain.png";
  } else if (data.weather[0].main == "Snow") {
    document.querySelector(".weather-icon").src = "images/snow.png";
  }
}

async function checkWeather() {
  try {
    const response = await fetch(
      `${apiurl}&appid=${apiKey}&q=${cityName.value}`
    );
    let data = await response.json();
    //  console.log(data);

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    //  console.log("Error not thrown");
    successDomManipulation(data);
  } catch (error) {
    messageForCatchBlock();
    document.querySelector(".catch-block").style.display = "block";
    console.error("Error occured :", error.message);
  }

  //   fetch(`${apiurl}&appid=${apiKey}&q=${cityName.value}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
}

searchBtn.addEventListener("click", () => {
  checkWeather();
  // console.log("Hii");
});
