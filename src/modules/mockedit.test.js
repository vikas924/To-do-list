/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';

import displaytasks from './display.js';

import {
  edit, listner,
} from './mockedit.js';

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
  const event = { target: `${input[0]}` };
  input[2].value = 'hel';
  listner.call(input[2], event);

  expect(input[1].value).toEqual(tasks[1].description);
});

test('should edit task description', () => {
  displaytasks();
  const input = document.querySelectorAll('.listlabel');
  const event = { target: `${input[0]}` };
  input[0].value = 'he';
  
  listner.call(input[0], event);
  console.log(tasks)

  expect(input[0].value).toEqual(tasks[0].description);
});
});
