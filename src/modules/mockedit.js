import { tasks } from './add.js';

import { deletechild } from './edit.js';

export function edit(event) {
  const label = document.querySelectorAll('.listlabel');
  if (event.key === 'Enter' || event.key === 'Escape') {
    const inputvalue = this.value;
    const index = Array.from(label).indexOf(this);
    label[index].value = inputvalue;
    label[index].blur();
    const div = document.querySelectorAll('#style');
    div[index].style.backgroundColor = '#fff';
    this.style.backgroundColor = '#fff';
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    icon[index].style.display = 'block';
    hide[index].style.display = 'none';
    tasks[index].description = label[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}

export function listner(event) {
  const label = document.querySelectorAll('.listlabel');
  const hide = document.querySelectorAll('.hide');
  const checkbox = document.querySelectorAll('.check');
  const index = Array.from(label).indexOf(this);
  hide[index].removeEventListener('click', deletechild);
  if (event.target !== this) {
    const inputvalue = this.value;
    const index = Array.from(label).indexOf(this);
    label[index].value = inputvalue;
    tasks[index].description = label[index].value;
    localStorage.setItem('array', JSON.stringify(tasks));
    const div = document.querySelectorAll('#style');
    div[index].style.backgroundColor = '#fff';
    this.style.backgroundColor = '#fff';
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    const list = document.querySelector('body');
    list.removeEventListener('click', listner);
    setTimeout(hide[index].addEventListener('click', deletechild), 2000);
    if ((event.target !== checkbox[index])) {
      icon[index].style.display = 'block';
      hide[index].style.display = 'none';
    } else {
      icon[index].style.display = 'none';
      hide[index].style.display = 'block';
    }
  } else if (event.target === this) {
    const index = Array.from(label).indexOf(this);
    const div = document.querySelectorAll('#style');
    div[index].style.backgroundColor = 'red';
    this.style.backgroundColor = 'red';
    const icon = document.querySelectorAll('.jvicon');
    const hide = document.querySelectorAll('.hide');
    icon[index].style.display = 'none';
    hide[index].style.display = 'block';
  }
}