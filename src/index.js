import './style.css';

import { tasks, add } from './modules/add.js';

import remove from './modules/remove.js';

import {
  enter, leave, edit, outclick,
} from './modules/edit.js';

const displayadded = () => {
  const input = document.querySelector('.addinput');
  const value1 = input.value.trim();
  if ((value1.length === 0)) {
    return;
  }
  const list = document.querySelector('.list');
  const div = document.createElement('div');
  const i = tasks.length - 1;
  div.classList.add('div');
  div.id = 'style';
  div.innerHTML = `<div class="listdiv"><input type="checkbox" name="${tasks[i].description}"><input class="listlabel style" for="${tasks[i].description}" value="${tasks[i].description}"></div><button class="jvicon delete"><i class="fa-solid fa-ellipsis-vertical" style="color: #acadaf"></i></button><button class="hide delete"><i class="fa-solid fa-trash-can"></i></button>`;
  list.appendChild(div);
  for (let i = 0; i < tasks.length; i += 1) {
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    icon[i].addEventListener('mouseenter', enter);
    hide[i].addEventListener('mouseleave', leave);
    hide[i].addEventListener('click', remove);
    const input = document.querySelectorAll('.listlabel');
    input[i].addEventListener('keyup', edit);
    input[i].addEventListener('click', outclick);
  }
};

const addbutton = document.querySelector('.spanicon');
const form = document.querySelector('.form');
addbutton.addEventListener('click', add);
addbutton.addEventListener('click', displayadded);
form.addEventListener('submit', (e) => {
  e.preventDefault();
  add();
  displayadded();
  const input = document.querySelector('.addinput');
  input.value = '';
});

const displaytasks = () => {
  const list = document.querySelector('.list');
  for (let i = 0; i < tasks.length; i += 1) {
    const div = document.createElement('div');
    div.classList.add('div');
    div.id = 'style';
    div.innerHTML = `<div class="listdiv"><input type="checkbox" name="${tasks[i].description}"><input class="listlabel style" for="${tasks[i].description}" value="${tasks[i].description}"></div><button class="jvicon delete"><i class="fa-solid fa-ellipsis-vertical" style="color: #acadaf"></i></button><button class="hide delete"><i class="fa-solid fa-trash-can"></i></button>`;
    list.appendChild(div);
  }
  for (let i = 0; i < tasks.length; i += 1) {
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    icon[i].addEventListener('mouseenter', enter);
    hide[i].addEventListener('mouseleave', leave);
    hide[i].addEventListener('click', remove);
    const input = document.querySelectorAll('.listlabel');
    input[i].addEventListener('keyup', edit);
    input[i].addEventListener('click', outclick);
  }
};

displaytasks();