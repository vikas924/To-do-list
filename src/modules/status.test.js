/**
 * @jest-environment jsdom
 */

import './__mocks__/mockHtml.js';

import displaytasks from './display.js';

import status from './status.js';
import { tasks } from './add.js';

jest.mock('./add', () => ({
  tasks: [
    { description: 'task 1', completed: false },
    { description: 'task 2', completed: false },
    { description: 'task 3', completed: false },
  ],
}));

describe('test status ', () => {
  it('should update task status when checkbox is checked', () => {
    localStorage.setItem('array', JSON.stringify(tasks));
    displaytasks();
    const checkbox = document.querySelectorAll('.check');
    checkbox[2].checked = true;
    status.call(checkbox[2]);

    expect(tasks[2].completed).toBe(true);
  });

  it('should update task status when checkbox is unchecked', () => {
    localStorage.setItem('array', JSON.stringify(tasks));
    displaytasks();
    const checkbox = document.querySelectorAll('.check');
    checkbox[2].checked = false;
    status.call(checkbox[2]);

    expect(tasks[2].completed).toBe(false);
  });
});