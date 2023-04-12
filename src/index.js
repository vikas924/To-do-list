import './style.css';

import { add } from './modules/add.js';

import displaytasks from './modules/display.js';

const addbutton = document.querySelector('.spanicon');
const form = document.querySelector('.form');
addbutton.addEventListener('click', () => {
  const input = document.querySelector('.addinput');
  const value1 = input.value.trim();
  add(value1);
});
addbutton.addEventListener('click', displaytasks);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.addinput');
  const value1 = input.value.trim();
  add(value1);
  displaytasks();
  input.value = '';
});

displaytasks();