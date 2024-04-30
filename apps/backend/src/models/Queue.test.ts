import { Queue } from '../models/Queue';

describe('Queue', () => {
  let queue: Queue;

  beforeEach(() => {
    queue = new Queue();
  });

  test('should enqueue items', () => {
    queue.enqueue('Item 1');
    queue.enqueue('Item 2');
    expect(queue.size()).toBe(2);
  });

  test('should dequeue by index', () => {
    queue.enqueue('Item 1');
    queue.enqueue('Item 2');
    queue.dequeueByIndex(0);
    expect(queue.getQueue()).toEqual(['Item 2']);
  });

  test('should return the correct size', () => {
    queue.enqueue('Item 1');
    queue.enqueue('Item 2');
    expect(queue.size()).toBe(2);
  });
});