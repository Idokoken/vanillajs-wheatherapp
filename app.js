window.addEventListener('load', () => {
  let locationcity = document.querySelector('.location-city')
  let countryName = document.querySelector('.country')
  let locationDate = document.querySelector('.location-date')
  let tempValue =document.querySelector('.temp-value')
  let tempReading = document.querySelector('.temp-reading')
  let weatherIcon  = document.querySelector('.weather-icon')

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition)
}
function getPosition(position) {
  const lat = position.coords.latitude;
  const long = postion.coords.longitude;

  const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=eae4c7df9d0c80084e5da9ace7f1a8b9`
  fetch('api')
  .then(res => res.json())
  .then(data => {
    console.log(data.sys.country)
    // const {  name } = data;
    // const { temp } = data.main;
    // const { country } = data.sys;
    // const { description, icon } = data.weather[0]

const d = new Date().get

  locationcity.textContent = name;
  tempValue.textContent = temp;
  locationDate.textContent = d;
  tempReading.textContent = description;
  countryName.textContent = country;
  weatherIcon.textContent = icon
}
  

})