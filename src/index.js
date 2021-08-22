import './sass/main.scss';
import debounce from 'lodash.debounce';

// import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';
 
//   success({
//     text: 'Notice me, senpai!'
//   });

//debounce(test, 2000);
//   function test () {
//   console.log('object')
// };

const refs = {
  form: document.querySelector('#form'),
  input: document.querySelector('.input-js'),
  countries: document.querySelector('.countries-js'),
}

// //посылает запрос и обрабатывает ответ
const searchCountry = (e) => {
  e.preventDefault()
  const name = refs.input.value
  fetch(`https://restcountries.eu/rest/v2/name/${name}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

refs.form.addEventListener('submit', searchCountry)


// //создает елемент интерфейса
function createCountry ({flag, name, capital, population, numericCode, region}) {
  const article = `<article>
    <img src='${flag}' alt='${name}'/>
    <h3>${name}</h3>
    <ul>
      <li>${capital}</li>
      <li>${population}</li>
      <li>${numericCode}</li>
      <li>${region}</li>
    </ul>
  </article>
`
refs.countries.insertAdjacentHTML('beforeend', article)
}


// //рендерит на экран
function renderCountry (arr) {
  arr.forEach(el => createCountry(el))
}

refs.countries.addEventListener('submit', renderCountry);