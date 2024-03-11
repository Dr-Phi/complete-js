"use strict";

const btn = document.querySelector(".btn-country");
const countriesContainer = document.querySelector(".countries");

///////////////////////////////////////

// ${data.languages[0].name}
// ${data.currencies[0].name}

const getJSON = function (url, errorMsg = "Something went wrong") {
  return fetch(url).then((response) => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

const renderCountry = function (data, className = "") {
  const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${
          Object.keys(data.languages)[0]
        }</p>
        <p class="country__row"><span>💰</span>${
          Object.keys(data.currencies)[0]
        }</p>
      </div>
    </article>
    `;
  countriesContainer.insertAdjacentHTML("beforeend", html);
  countriesContainer.style.opacity = 1;
};

const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`, "Country not found")
    .then((data) => {
      console.log(data);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if (!neighbour) throw new Error("No neighbour found!");

      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        "Country not found"
      );
    })
    .then((data) => renderCountry(data[0], "neighbour"))
    .catch((err) => {
      console.error(`${err} 💥💥💥`);
      renderError(`Something went wrong 💥💥 ${err.message}. Try again!`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

const whereAmI = function (lat, lng) {
  return new Promise((resolve, reject) => {
    fetch(
      `https://us1.locationiq.com/v1/reverse?key=pk.18f47c64fc5d61223cf8dd0ebc19ff94&lat=${lat}&lon=${lng}&format=json`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const country = data.address.country;
        console.log(`You are in ${data.address.city}, ${data.address.country}`);
        resolve(country);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

whereAmI(51.0447, -114.066666).then((country) => getCountryData(country));

// // Challenge #2

const wait = function (seconds) {
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");

const createImage = function (imgPath) {
  return new Promise((resolve, reject) => {
    const image = document.createElement("img");
    image.src = imgPath;

    image.addEventListener("load", () => {
      imgContainer.append(image);
      resolve(image);
    });
    image.addEventListener("error", () => {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

createImage('img/img-1.jpg')
  .then(image => {
    currentImg = image;
    console.log('Image 1 loaded');
    return wait(3);
  }).then(() => {
    currentImg.style.display = 'none';
    return createImage('img/img-2.jpg');
  }).then(image => {
    currentImg = image;
    console.log('Image 2 loaded');
    return wait(3);
  })
  .then(() => {
    currentImg.style.display = 'none';
  })
  .catch(err => console.error(err));
