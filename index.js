window.addEventListener("load", () => {
  const locationCity = document.querySelector(".location-city");
  const locationDate = document.querySelector(".location-date");
  const tempValue = document.querySelector(".temp-value");
  const tempReading = document.querySelector(".temp-reading");
  const x = document.getElementsByClassName("error");
  const nimage = document.getElementById("image");

  // locationCity.textContent = "Nig";
  // locationDate.textContent = 11;
  // tempValue.textContent = 44;
  // tempReading.textContent = "cold";
  // weatherIcon.textContent = "icon";

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition);
  } else {
    x.textContent =
      "Error fetching weather data or Geolocation is not supported by this device";
    console.log("hh");
  }
  async function getPosition(position) {
    const lat = position.coords.latitude;
    const long = position.coords.longitude;

    try {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=eae4c7df9d0c80084e5da9ace7f1a8b9`
      );
      const data = await resp.json();
      console.log(data);

      const { description, icon } = data.weather[0];
      const { temp } = data.main;
      const { country } = data.sys;
      const name = data.name;

      const deg = Math.floor((5 / 9) * (temp - 32));
      const image = "http://openweathermap.org/img/w/" + icon + ".png";

      const d = new Date().toUTCString();
      console.log(d);
      locationCity.textContent = `${name}, ${country}`;
      locationDate.textContent = d;
      tempValue.textContent = deg + " C";
      tempReading.textContent = description;
      nimage.src = image;
    } catch (error) {
      x.textContent =
        "Error fetching weather data or Geolocation is not supported by this device";
      console.log("error fetching data");
    }
  }
});
