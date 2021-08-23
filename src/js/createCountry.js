import getRefs from './refs';
const refs = getRefs();

  // 2//создает елемент интерфейса
  export default function createCountry ({flag, name, capital, population, region, languages, }) {
    const listLanguages = languages.map(language => `<li>${language.name}</li>`).join('');
    const article = `<article>
        <h2 class="country-name">${name}</h2>
        <div class="card">
          <div class="card-info">
            <p><b>Capital:</b> ${capital}</p>
            <p><b>Population:</b> ${population}</p>
            <p><b>Region:</b> ${region}</p>
            <p><b>Languages:</b><ul>${listLanguages}</ul></p>
          </div>
          <div class="card-img">
            <img src='${flag}' alt='${name}'/></div>
          </div>
        </div>
    </article>
  `
  refs.countries.insertAdjacentHTML('beforeend', article)
  }