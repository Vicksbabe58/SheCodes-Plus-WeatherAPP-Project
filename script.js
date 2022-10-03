let now = new Date();
console.log(now);

function formatDate(date) {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let day = days[date.getDay()];

  let months = [
    "Jan",
    "Feb",
    "March",
    "Apr",
    "May",
    "Jun",
    "jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let month = months[date.getMonth()];

  let forDate = date.getDate();
  let fullYear = date.getFullYear();

  let currentDate = `${day}  of  ${month},  ${forDate}  ${fullYear}`;

  return currentDate;
}
function formatTime(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  } else {
    hours = `${hours}`;
  }
  let ampm = "PM";
  if (hours >= 12) {
    ampm = "PM";
  } else {
    ampm = "AM";
  }

  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let currentTime = `${hours}  :  ${minutes} ${ampm}`;

  return currentTime;
}
let currentDate = document.querySelector("#new-date");
let currentTime = document.querySelector("#new-time");

currentDate.innerHTML = formatDate(now);
currentTime.innerHTML = formatTime(now);

function showTemperature(response) {
  document.querySelector("#new-city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].main;
  console.log(response);
}

function search(city) {
  let apiKey = "6ca604c95283a09c75d6e1f82b1cae7e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  console.log(Response);
  axios.get(apiUrl).then(showTemperature);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  search(city);
}

let cityName = document.querySelector("#search-form");
cityName.addEventListener("click", handleSubmit);

function searchLocation(position) {
  let apiKey = "6ca604c95283a09c75d6e1f82b1cae7e";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showTemperature);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#country-input");
currentLocationButton.addEventListener("click", getCurrentLocation);

search("Awka");
