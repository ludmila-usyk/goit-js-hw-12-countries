import getRefs from './refs';
import createCountry from './createCountry';

const refs = getRefs();

// 3//рендерит на экран
export default function renderCountry (arr) {
    arr.forEach(el => createCountry(el))
  }
  
  refs.countries.addEventListener('input', renderCountry);

