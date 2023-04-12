/**
 * @jest-environment jsdom
 */

import { tasks } from './add.js';
import remove from './remove.js';

describe('test remove ', () => {
  it('Remove tasks to local storage', () => {
    const obj = { description: 'hello', completed: true, index: 1 };
    const obj1 = { description: 'start', completed: true, index: 2 };
    tasks.push(obj);
    tasks.push(obj1);
    console.log(tasks);
    console.log(obj);
    remove(0);

    expect(JSON.parse(localStorage.getItem('array'))).toEqual([
      { description: 'start', completed: true, index: 1 },
    ]);
  });
});