import './sass/main.scss';

// import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';
// import '@pnotify/core/dist/BrightTheme.css';
 
//   success({
//     text: 'Notice me, senpai!'
//   });


//   import debounce from 'lodash.debounce';
//   debounce(test, 2000);

//   function test () {
//   console.log('object')
// };







// Search cocktail by name
// www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita

// List all cocktails by first letter
// www.thecocktaildb.com/api/json/v1/1/search.php?f=a

// Search ingredient by name
// www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

// Lookup full cocktail details by id
// www.thecocktaildb.com/api/json/v1/1/lookup.php?i=11007

// Lookup ingredient by ID
// www.thecocktaildb.com/api/json/v1/1/lookup.php?iid=552

// Lookup a random cocktail
// www.thecocktaildb.com/api/json/v1/1/random.php

// Search by ingredient
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Gin
// www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka

// Filter by alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic
// www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic

// Filter by Category
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary_Drink
// www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail

// Filter by Glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass
// www.thecocktaildb.com/api/json/v1/1/filter.php?g=Champagne_flute

// List the categories, glasses, ingredients or alcoholic filters
// www.thecocktaildb.com/api/json/v1/1/list.php?c=list
// www.thecocktaildb.com/api/json/v1/1/list.php?g=list
// www.thecocktaildb.com/api/json/v1/1/list.php?i=list
// www.thecocktaildb.com/api/json/v1/1/list.php?a=list

const refs = {
  form: document.querySelector('#form'),
  input: document.querySelector('#search'),
  container: document.querySelector('.container'),
  more: document.querySelector('#more')
}

const hendlerSubmit = (e) => {
  e.preventDefault()
  const value = refs.input.value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${value}`)
  .then(response => response.json())
  .then(result => renderCollection(result.drinks))
  .catch(err => console.log(err))
}

function createItem ({strDrinkThumb, strDrink}) {
  const article = `<article>
    <img src='${strDrinkThumb}' alt='${strDrink}'/>
    <p>${strDrink}</p>
  </article>
`
refs.container.insertAdjacentHTML('beforeend', article)
}

function renderCollection (arr) {
  arr.forEach(el => createItem(el))
}

refs.form.addEventListener('submit', hendlerSubmit)