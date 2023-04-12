export const tasks = JSON.parse(localStorage.getItem('array')) || [];

export const add = (value) => {
  if ((value.length !== 0)) {
    const obj = {
      description: `${value}`,
      completed: false,
      index: tasks.length + 1,
    };
    tasks.push(obj);
    localStorage.setItem('array', JSON.stringify(tasks));
  }
};