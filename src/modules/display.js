import { tasks } from './add.js';

import removecompleted from './removecompleted.js';

import status from './status.js';

import {
  deletechild, edit, outclick,
} from './edit.js';

export default function displaytasks() {
  const list = document.querySelector('.list');
  let items = '';
  for (let i = 0; i < tasks.length; i += 1) {
    items += `<li id="style" class="div"><div class="listdiv"><input class="check" type="checkbox" name="${tasks[i].description}"><input class="listlabel style" for="${tasks[i].description}" value="${tasks[i].description}"></div><button class="jvicon delete"><i class="fa-solid fa-ellipsis-vertical" style="color: #acadaf"></i></button><button class="hide delete"><i class="fa-solid fa-trash-can"></i></button></li>`;
  }
  list.innerHTML = items;
  for (let i = 0; i < tasks.length; i += 1) {
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    hide[i].addEventListener('click', deletechild);
    const input = document.querySelectorAll('.listlabel');
    input[i].addEventListener('keyup', edit);
    input[i].addEventListener('click', outclick);
    const checkbox = document.querySelectorAll('.check');
    checkbox[i].addEventListener('click', status);
    if (tasks[i].completed === true) {
      input[i].style.textDecoration = 'line-through';
      input[i].style.color = 'rgba(139, 134, 134, 0.8)';
      input[i].disabled = true;
      icon[i].style.display = 'none';
      hide[i].style.display = 'block';
      checkbox[i].checked = true;
    } else {
      input[i].style.textDecoration = 'none';
      input[i].style.color = 'inherit';
      input[i].disabled = false;
      icon[i].style.display = 'block';
      hide[i].style.display = 'none';
      checkbox[i].checked = false;
    }
  }
  const button = document.querySelector('.button');
  button.addEventListener('click', removecompleted);
  button.addEventListener('click', displaytasks);
}