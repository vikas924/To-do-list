/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';

import displaytasks from './display.js';

import {
  edit, outclick,
} from './edit.js';

import { tasks } from './add.js';

jest.mock('./add', () => ({
  tasks: [
    { description: 'task 1', completed: false },
    { description: 'task 2', completed: false },
    { description: 'task 3', completed: false },
  ],
}));

describe('test edit ', () => {
  test('should edit task description', () => {
    displaytasks();
    const input = document.querySelectorAll('.listlabel');
    const event = { target: `${input[1]}` };
    event.key = 'Enter';
    input[1].value = 'hello';
    edit.call(input[1], event);

    expect(input[1].value).toEqual(tasks[1].description);
  });

  test('should edit task description', () => {
    displaytasks();
    const input = document.querySelectorAll('.listlabel');
    const event = { target: `${input[1]}` };
    event.key = 'Enter';
    input[2].value = 'hi';
    edit.call(input[2], event);

    expect(input[2].value).toEqual(tasks[2].description);
  });
});

describe('test edit ', () => {
  test('should edit task description', () => {
    displaytasks();
    const input = document.querySelectorAll('.listlabel');
    input[1].value = 'hel';
    outclick.call(input[1]);
    const event = new MouseEvent('click');
    const list = document.querySelector('body');
    list.dispatchEvent(event);
    expect(input[1].value).toEqual(tasks[1].description);
  });

  test('should edit task description', () => {
    displaytasks();
    const input = document.querySelectorAll('.listlabel');
    input[0].value = 'he';

    outclick.call(input[0]);
    const event = new MouseEvent('click');
    const list = document.querySelector('body');
    list.dispatchEvent(event);
    expect(input[0].value).toEqual(tasks[0].description);
  });
});
