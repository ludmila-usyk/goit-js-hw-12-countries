import getRefs from './refs';
const refs = getRefs();

  // 2//создает елемент интерфейса
  export default function createCountry ({flag, name, capital, population, region, languages, }) {
    const article = `<article>
        <h2 class="country-name">${name}</h2>
        <div class="card">
          <div class="card-info">
            <p>capital ${capital}</p>
            <p>population ${population}</p>
            <p>region ${region}</p>
            <p>languages ${languages}</p>
          </div>
          <div class="card-img">
            <img src='${flag}' alt='${name}'/></div>
          </div>
        </div>
    </article>
  `
  refs.countries.insertAdjacentHTML('beforeend', article)
  }