const app = document.querySelector(`.weatherApp`);
const temp = document.querySelector(`.temp`);
const dateOutput = document.querySelector(`.date`);
const timeOutput = document.querySelector(`.time`);
const conditionOutput = document.querySelector(`.condition`);
const nameOutput = document.querySelector(`.name`);
const icon = document.querySelector(`.icon`);
const cloudOutput = document.querySelector(`.cloud`);
const humidityOutput = document.querySelector(`.humidity`);
const windOutput = document.querySelector(`.wind`);
const form = document.querySelector(`.locationInput`);
const search = document.querySelector(`.search`);
const btn = document.querySelector(`.submit`);
const cities = document.querySelector(`.city`);

//default loading page
let cityInput= "london";

cities.foreach((city) => {
city.addEventListener('click', (e) => {
    cityInput = e.target.innerHTML;
    fetchWeatherData();
    app.style.opacity = "0";
    });
})

form.addEventListener('submit'), (e) => {
    if(search.value.length  == 0) {
        alert('Please typle in a city name');
    } else {
        cityInput = search.value;
        fetchWeatherDate();
        search.value = "";
        app.style.opacity = "0";
    }

    e.preventDefault();
};

function dayOfTheWeek (day, month, year) { 
    const weekday = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wedensday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return weekday[new Data(`${day}/${month}/${year}`).getDay()];
 };