const searchForm = document.querySelector(".search-location");
const cityValue = document.querySelector(".search-location input");
const cityName = document.querySelector(".city-name p");
const cardBody = document.querySelector(".card-body");
const timeImage = document.querySelector(".card");
const cardImageInfo = document.querySelector(".back-card");
const dayNight = document.querySelector(".day-night p");

//convert kelvin to celsius
const spitOutCelcius = (kelvin) => {
  celcius = Math.round(kelvin - 273.15);
  return celcius;
};

// function to get day or night
const isDayTime = (icon) => {
  if (icon.includes("d")) {
    return true;
  } else {
    return false;
  }
};




//update weather info
updateWeatherApp = (city) => {
  console.log(city);
  const imageName = city.weather[0].icon;
  const iconSrc = `https://openweathermap.org/img/wn/${imageName}@4x.png`;
  cityName.textContent = city.name;
  //editing part
  cardBody.innerHTML = `
  <div class="card-body">
  <div class="pt-4 city text-center my-3">
    <div class="city-name" id="city-name"><p>${city.name}</p></div>
    <div class="country" id="country"><p>${city.sys.country}</p></div>
  </div>

  <div class="icon-container text-center">
    <img class="icon" id="icon" src="${iconSrc}" alt="icon" />
  </div>

  <div class="card-mid">
    <div class="col text-center">
      <h3 class="temp" id="temp">${spitOutCelcius(city.main.temp)}&deg;C</h3>
    </div>
    <div class="col text-center">
      <p class="summary" id="summary">${city.weather[0].description}</p>
    </div>
  </div>

  <div class="col text-center">
    <div class="h-divider col-md-1"></div>
    <div class="daynight" id="daynight"><p></p></div>
  </div>

  <div class="card-bottom px-1 py-4 row text-center">
    <div class="col text-center">
      <img
        src="./icons/celsius.png"
        class="celsius_d ii"
        alt="celsius"
      />
      <p class="feels" id="feels">${spitOutCelcius(city.main.feels_like)}&deg;C</p>
      <span>feels like</span>
    </div>
    <div class="col-xs-2 v-divider"></div>
    <div class="col text-center">
      <img
        src="./icons/humidity.png"
        class="humidity_d ii"
        alt="humidity"
      />
      <p class="humidity" id="humidity">${city.main.humidity}%</p>
      <span>humidity</span>
    </div>
    <div class="col-xs-2 v-divider"></div>
    <div class="col text-center">
      <img src="./icons/wind.png" class="wind_d ii" alt="wind" />
      <p class="wind" id="wind">${city.wind.speed} km/h</p>
      <span>wind</span>
    </div>
  </div>
</div>
  `;
  //end

  //change to day or night
  if (isDayTime(imageName)) {
    console.log("day");
    document.getElementById("daynight").innerHTML = "day";
  } else {
    console.log("night");
    document.getElementById("daynight").innerHTML = "night";
  }

  cardImageInfo.classList.remove("d-none");
};


// add event listener for search
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const citySearched = cityValue.value.trim();
  searchForm.reset();

  requestCity(citySearched)
    .then((data) => {
      updateWeatherApp(data);
    })
    .catch((error) => {
      console.log(error);
    });
});
