// QueueController.test.ts
import { QueueController } from '../controller/QueueController';
import { ActionController } from '../controller/ActionController';
import { Action } from '../models/Action';

describe('QueueController', () => {
  let queueController: QueueController;
  let actionController: jest.Mocked<ActionController>;

  beforeEach(() => {
    // Create a mock for the ActionController
    actionController = {
      findNextActionWithCreditToDequeue: jest.fn(),
      getActions: jest.fn(),
      getActionByName: jest.fn(),
      decreaseCredits: jest.fn(),
      updateCredits: jest.fn(),
      initActions: jest.fn(),
    } as unknown as jest.Mocked<ActionController>;

    queueController = new QueueController(actionController);
    jest.useFakeTimers();
    // Mock the console.log method to avoid console output during tests
    console.log = jest.fn();
  });

  afterEach(() => {
    jest.clearAllMocks();
    jest.useRealTimers();
    // Reset the instance between tests to simulate a new instance for each test
    (QueueController as any)['instance'] = undefined;
  });

  describe('enqueueAction', () => {
    test('should enqueue action and process it after the delay', async () => {
      // Mock the findNextActionWithCreditToDequeue method to return a mock action
      const mockAction = new Action({ name: 'Yann', maxCredits: 8, credits: 5 });
      actionController.findNextActionWithCreditToDequeue.mockReturnValue({ action: mockAction, index: 0 });

      // Enqueue an action
      queueController.enqueueAction('Yann');

      // Fast-forward time to trigger the processing
      jest.advanceTimersByTime(queueController.executionActionDelayMs);

      // Check if the action was processed and the queue is empty
      expect(queueController.queue.getQueue()).toEqual([]); // Check if the queue is empty
    });

  });

  describe('scheduleCreditUpdate', () => {
    test('should schedule an credits update', async () => {
      // Schedule the credit update
      queueController.scheduleCreditUpdate();

      // Fast-forward time to trigger the credit update
      jest.advanceTimersByTime(queueController.creditUpdateDelayMs);

      // Check if the updateCredits method was called
      expect(actionController.updateCredits).toHaveBeenCalled();
    });
  });

});