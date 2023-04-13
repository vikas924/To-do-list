import { tasks } from './add.js';

export default function removecompleted() {
  const completedarray = tasks.filter((tasks) => tasks.completed === true);
  for (let i = 0; i < completedarray.length; i += 1) {
    const index = (completedarray[i].index - 1) - i;
    tasks.splice(index, 1);
  }
  for (let i = 0; i < tasks.length; i += 1) {
    tasks[i].index = i + 1;
  }
  localStorage.setItem('array', JSON.stringify(tasks));
}