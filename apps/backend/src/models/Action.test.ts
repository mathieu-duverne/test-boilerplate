import { Action } from '../models/Action';

describe('Action', () => {
  let action: Action;

  beforeEach(() => {
    action = new Action({ name: 'Test Action', maxCredits: 10, credits: 5 });
  });

  test('should create an action with the correct properties', () => {
    expect(action.getName()).toBe('Test Action');
    expect(action.getMaxCredits()).toBe(10);
    expect(action.getCredits()).toBe(5);
  });

  test('should check if there are enough credits', () => {
    expect(action.hasEnoughCredits()).toBe(true);

    action.setCredits(0);
    expect(action.hasEnoughCredits()).toBe(false);
  });
});