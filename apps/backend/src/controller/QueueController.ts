import { ActionController } from './ActionController';
import { Queue } from '../models/Queue';
import { Action } from '../models/Action';

export class QueueController {
  public readonly queue: Queue;
  private readonly actionController: ActionController;
  private processingTimeout: NodeJS.Timeout | null = null;
  public creditUpdateTimeout: NodeJS.Timeout | null = null;
  public executionActionDelayMs: number=15000 ; // 15 sec Delay between  execution of each action
  public creditUpdateDelayMs: number=600000 ; // 10min Delay between each credit update

  constructor(actionController: ActionController) {
    this.actionController = actionController;
    this.queue = new Queue();
    this.scheduleCreditUpdate();
  }

  public enqueueAction(actionName: string): void {
    this.queue.enqueue(actionName);
    this.scheduleProcessingIfNeeded();
  }

  public scheduleProcessingIfNeeded(): void {
    if (this.queue.size() > 0){
      const { action, index } = this.actionController.findNextActionWithCreditToDequeue(this.queue.getQueue());
      if (action && !this.processingTimeout){
        this.scheduleNextProcessing(action , index);
      }
    }
  }

  private scheduleNextProcessing(action, index): void {
    this.processingTimeout = setTimeout(() => {
      this.executeAction(action, index)
    }, this.executionActionDelayMs);
    this.processingTimeout?.unref();
  }

  private executeAction(action: Action, index: number): void {
    this.queue.dequeueByIndex(index);
    this.actionController.decreaseCredits(action, 1);
    this.clearProcessingTimeout();
    this.scheduleProcessingIfNeeded();
  }

  public scheduleCreditUpdate(): void {
    this.clearCreditUpdateTimeout();
    this.creditUpdateTimeout = setTimeout(() => {
      this.actionController.updateCredits();
      this.scheduleProcessingIfNeeded(); // Processing queue if needed
      this.scheduleCreditUpdate(); // Schedule the next credit update
    }, this.creditUpdateDelayMs);
    this.creditUpdateTimeout?.unref();
  }

  private clearCreditUpdateTimeout(): void {
    if (this.creditUpdateTimeout) {
      clearTimeout(this.creditUpdateTimeout);
      this.creditUpdateTimeout = null;
    }
  }

  private clearProcessingTimeout(): void {
    if (this.processingTimeout) {
      clearTimeout(this.processingTimeout);
      this.processingTimeout = null;
    }
  }
}