import { ActionController } from '../controller/ActionController';
import { Action } from '../models/Action';

describe('ActionController', () => {
  let actionController: ActionController;

  beforeEach(() => {
    actionController = ActionController.getInstance();
  });

  afterEach(() => {
    // Reset the instance between tests to simulate a new instance for each test
    (ActionController as any)['instance'] = undefined;
  });

  describe('getInstance', () => {
    test('should create a singleton instance', () => {
      const instance1 = ActionController.getInstance();
      const instance2 = ActionController.getInstance();
      expect(instance1).toBe(instance2);
    });
  });

  describe('initActions', () => {
    test('should initialize actions with random credits', () => {
      const actions = actionController.getActions();
      expect(actions.length).toBe(3); // Assuming there are 3 actions initially
      actions.forEach((actionData) => {
        expect(actionData.credits).toBeGreaterThanOrEqual(0);
        expect(actionData.credits).toBeLessThanOrEqual(actionData.maxCredits);
      });
    });
  });

  describe('getActionByName', () => {
    test('should get action by name', () => {
      const action = actionController.getActionByName('Ada');
      expect(action).toBeInstanceOf(Action);
      expect(action?.getName()).toBe('Ada');
    });
  });

  describe('decreaseCredits', () => {
    test('should decrease credits for a specific action', () => {
      const action = actionController.getActionByName('Ada');
      const initialCredits = action?.getCredits() ?? 0;
      if(action){actionController.decreaseCredits(action, 1);}
      const updatedCredits = action?.getCredits() ?? 0;
      expect(updatedCredits).toBe(initialCredits - 1);
    });
  });

  describe('findNextActionWithCreditToDequeue', () => {
    test('should find the next action with enough credits to dequeue', () => {
      const queue = ['Ada', 'Charles', 'Yann'];
      const { action, index } = actionController.findNextActionWithCreditToDequeue(queue);
      expect(action).toBeInstanceOf(Action);
      expect(index).toBeGreaterThanOrEqual(0);
      expect(action?.hasEnoughCredits()).toBe(true);
    });
  });
});