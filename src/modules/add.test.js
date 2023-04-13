/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';

import { add } from './add.js';

import displaytasks from './display.js';

describe('test add ', () => {
  it('Add tasks to local storage', () => {
    add('hello');
    add('start');
    add('middle');
    add('finish');
    add('well-done');

    expect(JSON.parse(localStorage.getItem('array'))).toEqual([
      { description: 'hello', completed: false, index: 1 },
      { description: 'start', completed: false, index: 2 },
      { description: 'middle', completed: false, index: 3 },
      { description: 'finish', completed: false, index: 4 },
      { description: 'well-done', completed: false, index: 5 },
    ]);
  });

  it('Add tasks one li to html', () => {
    displaytasks();
    const list = document.querySelectorAll('.style');
    const initiallength = list.length;
    add('onemore');
    displaytasks();
    const finallength = document.querySelectorAll('.style').length;

    expect(finallength).toEqual(initiallength + 1);
  });
});