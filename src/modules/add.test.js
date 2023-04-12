/**
 * @jest-environment jsdom
 */

import { add } from './add.js';

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
});