import getRefs from './refs';
import debounce from 'lodash.debounce';
import renderCountry from './renderCountry';

const refs = getRefs();

// 1//посылает запрос и обрабатывает ответ
const searchCountry = (e) => {
    e.preventDefault()
    const name = refs.input.value
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
    .then(response => response.json())
    .then(data => renderCountry(data))
    .catch(err => console.log(err))
  }
  
  refs.input.addEventListener('input', debounce(searchCountry, 500))
  

