import { tasks } from './add.js';

export default function remove(indx) {
  if ((tasks[indx].completed) === true) {
    tasks.splice(indx, 1);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i + 1;
    }
    localStorage.setItem('array', JSON.stringify(tasks));
  }
}