'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

// ${data.languages[0].name}
// ${data.currencies[0].name}

const renderCountry = function (data, className = '') {
    const html = `
    <article class="country ${className}">
      <img class="country__img" src="${data.flags.png}" />
      <div class="country__data">
        <h3 class="country__name">${data.name.common}</h3>
        <h4 class="country__region">${data.region}</h4>
        <p class="country__row"><span>👫</span>${(
          +data.population / 1000000
        ).toFixed(1)}M people</p>
        <p class="country__row"><span>🗣️</span>${Object.keys(data.languages)[0]}</p>
        <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
      </div>
    </article>
    `;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  };

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response)=>response.json())
    .then(function (data) {
      console.log(data[0]);
      renderCountry(data[0]);
      const neighbour = data[0].borders[0];

      if(!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        renderCountry(data[0], 'neighbour')
    })
};

getCountryData('colombia')