/* eslint linebreak-style: ["error", "windows"] */

function searchUI() {
  const formEl = document.createElement("form");
  formEl.setAttribute("novalidate", "");

  const divEl = document.createElement("div");
  const labelEl = document.createElement("label");

  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.id = "search";
  inputEl.name = "search";
  inputEl.placeholder = "london";
  inputEl.setAttribute("required", "");

  const errorSpanEl = document.createElement("span");
  errorSpanEl.classList.add("error");
  errorSpanEl.setAttribute("aria-live", "polite");

  labelEl.appendChild(inputEl);
  labelEl.appendChild(errorSpanEl);

  divEl.appendChild(labelEl);

  formEl.appendChild(divEl);

  const root = document.querySelector("#root");
  root.appendChild(formEl);
}

function showForecast(data) {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  function getCurrentDay(day, index) {
    return index === date.getDay();
  }
  const currentDay = days.find(getCurrentDay);

  const weatherContainer = `
    <div class="current-weather-container">
      <div class="weather-info">
        <h1 class="weather-h1">Weather</h1>
        <p class="weather-time"><span class="current-day">${currentDay}</span> <span class="current-weather-time">${data.current.last_updated.substring(
    10
  )}</span></p>
        <p class="weather-desc">${data.current.condition.text}</p>
      </div>
      <div>
        <img
          class="current-weather-img"
          src=${data.current.condition.icon}
          alt=${data.current.condition.text}
        />
      </div>
      <p class="temp">
        <span class="temp-degree">${data.current.temp_c}</span> 
        <span class="temp-unit">°C</span>
      </p>
    </div>

    ${data.forecast.forecastday[0].hour
      .map(
        (hourlyWeatherData) => `
      <div class="forecast-single-container">
          <img
            class="weather-forecast-img"
            src=${hourlyWeatherData.condition.icon}
            alt=${hourlyWeatherData.condition.text}
          />
          <p class="forecast-single-desc">${
            hourlyWeatherData.condition.text
          }</p>
          <p class="forecast-single-temp"><span class="forecast-single-temp-degree">${
            hourlyWeatherData.temp_c
          }</span> <span class="forecast-single-temp-unit">°C</span></p>
          <p class="forecast-single-time">${hourlyWeatherData.time.substring(
            10
          )}</p>
        </div>`
      )
      .join("")}
  `;

  const container = document.createElement("div");
  container.innerHTML = weatherContainer;

  const root = document.querySelector("#root");
  root.appendChild(container);
}

function getWeatherData(city) {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=699b43a8bf034566acb105933231304&q=${city}`
  )
    .then((response) => response.json())
    .then((res) => {
      showForecast(res);
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    });
}

function getCityName() {
  const input = document.querySelector("#search");
  console.log(input.value);
  return input.value;
}
function formSubmit() {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    getWeatherData(getCityName());
  });
}

export { searchUI, formSubmit };
