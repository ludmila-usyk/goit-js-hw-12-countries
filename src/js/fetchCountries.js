import getRefs from './refs';
import debounce from 'lodash.debounce';
import renderCountry from './renderCountry';
import { alert, error, defaultModules } from  '../../node_modules/@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '../../node_modules/@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';

const refs = getRefs()

// 1//посылает запрос и обрабатывает ответ
const searchCountry = (e) => {
  e.preventDefault ()
  clearContainer ();
  const name = refs.input.value;
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  .then(response => response.json())
  .then(country => {
    if (country.length > 10) {
      defaultModules.set(PNotifyMobile, {});
      alert ({
          text: 'Too many matches found. Please enter a more specific query.',
          delay: 1000,  
      });
    };
    if ( country.length > 2 && country.length <= 10) {
      renderCountries(country)
    };
    if (country.length === 1) {
      renderCountry(country)
    }
    if (country.status === 404 ) {
      clearContent ()
      error ({
        text: 'Not found. Check the country name.',
        delay: 1000})
    }
  })
  .catch(err => {
    clearContent ()
    defaultModules.set(PNotifyMobile, {});
    error ({
      text: 'Not found. Check the country name.!',
      delay: 1000,  
  });})
}

refs.form.addEventListener('input', debounce(searchCountry, 500))


function createCountries (obj) {
  const article = `<li class="countries-item">${obj.name}</li>`
  refs.countries.insertAdjacentHTML('beforeend', article)
};
function renderCountries (arr) {
  arr.forEach(el => createCountries(el))
};
function clearContainer () {
  refs.countries.innerHTML = '';
}
function clearContent(){
  refs.input.value = ''; 
}