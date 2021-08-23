import './sass/main.scss';
import './js/fetchCountries';


import '@pnotify/core/dist/BrightTheme.css';
import { alert, info, success, error } from '../node_modules/@pnotify/core/dist/PNotify.js';

error({
  text: 'Invalid input. Please check the country name!',
  delay: 2000,
});
info({
  text: 'Too many matches found. Please enter a more specific query!',
  delay: 2000,
});
alert({
  text: 'alert!',
  delay: 2000,
});
success({
  text: 'success!',
  delay: 2000,
});