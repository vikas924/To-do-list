/**
 * @jest-environment jsdom
 */

import { tasks } from './add.js';

import remove from './remove.js';

import './__mocks__/mockHtml.js';

import displaytasks from './display.js';

describe('test remove ', () => {
  it('Remove tasks to local storage', () => {
    tasks.push({ description: 'hello', completed: true, index: 1 }, { description: 'start', completed: true, index: 2 }, { description: 'middle', completed: true, index: 3 },
      { description: 'finish', completed: true, index: 4 },
      { description: 'well-done', completed: true, index: 5 });
    remove(2);

    expect(JSON.parse(localStorage.getItem('array'))).toEqual([
      { description: 'hello', completed: true, index: 1 },
      { description: 'start', completed: true, index: 2 },
      { description: 'finish', completed: true, index: 3 },
      { description: 'well-done', completed: true, index: 4 },
    ]);
  });

  it('Add tasks one li to html', () => {
    displaytasks();
    const list = document.querySelectorAll('.style');
    const initiallength = list.length;
    remove(2);
    displaytasks();
    const finallength = document.querySelectorAll('.style').length;

    expect(finallength).toEqual(initiallength - 1);
  });
});