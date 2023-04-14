/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';

import { tasks } from './add.js';

import removecompleted from './removecompleted.js';

jest.mock('./add', () => ({
  tasks: [
    { description: 'task 1', completed: true, index: 1 },
    { description: 'task 2', completed: false, index: 2 },
    { description: 'task 3', completed: true, index: 3 },
    { description: 'task 4', completed: false, index: 4 },
    { description: 'task 5', completed: true, index: 5 },
    { description: 'task 6', completed: false, index: 6 },
  ],
}));

test('should remove completed tasks', () => {
  removecompleted();
  expect(tasks).toEqual([{ description: 'task 2', completed: false, index: 1 },
    { description: 'task 4', completed: false, index: 2 },
    { description: 'task 6', completed: false, index: 3 }]);
});