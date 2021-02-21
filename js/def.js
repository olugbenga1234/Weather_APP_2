const form = document.getElementById("search-location");
const cityValue = document.querySelector(".search-location input");

var cityID = "5128638";
function weatherBalloon(cityID) {
  var key = "c8f183c2cc9e99c73a7268f044d0e507";
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?id=" +
      "5128638" +
      "&appid=" +
      key
  )
    .then(function (resp) {
      return resp.json();
    }) // Convert data to json
    .then(function (data) {
      drawWeather(data);
    })
    .catch(function () {
      // catch any errors
    });
}

window.onload = function () {
  weatherBalloon(5128638);
};

//convert kelvin to celsius
const spitOutCelcius = (kelvin) => {
  celcius = Math.round(kelvin - 273.15);
  return celcius;
};

const imageName = d.weather[0].icon;
const iconSrc = `https://openweathermap.org/img/wn/${imageName}@4x.png`;

//Display the Weather
function drawWeather(d) {
  const imageName = d.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${imageName}@4x.png`;
  ///////////////////////////////////////////////////////////////////////
  document.getElementById("summary").innerHTML = d.weather[0].description;
  document.getElementById("temp").innerHTML =
    spitOutCelcius(d.main.temp) + "&deg;C";
  document.getElementById("city-name").innerHTML = d.name;
  document.getElementById("country").innerHTML = d.sys.country;
  document.getElementById("feels").innerHTML =
    spitOutCelcius(d.main.feels_like) + "&deg;C";
  document.getElementById("humidity").innerHTML = d.main.humidity + "%";
  document.getElementById("wind").innerHTML = d.wind.speed + " km/h";
  document.getElementById("icon").src = iconSrc;
}

//make site not reload on submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const Final = cityValue.nodeValue.trim();
  form.reset();

  requestCity(final)
    .then((data) => {
      weatherBalloon(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
