import { Action } from '../models/Action';
import { ActionData } from '../types/types';
import { getRandomCredits } from '../utils/utils';

export class ActionController {
  private actions: Action[] = [];
  private static instance: ActionController;

  private constructor() {
    this.initActions();
  }

  public static getInstance(): ActionController {
    if (!ActionController.instance) {
      ActionController.instance = new ActionController();
    }
    return ActionController.instance;
  }

  private initActions(): void {
    const actionsData: ActionData[] = [
      { name: 'Ada', maxCredits: 32, credits: 0 },
      { name: 'Charles', maxCredits: 16, credits: 0 },
      { name: 'Yann', maxCredits: 8, credits: 0 },
    ];

    actionsData.forEach((actionData) => {
      const action = new Action(actionData);
      action.setCredits(getRandomCredits(actionData.maxCredits));
      this.actions.push(action);
    });
  }

  public getActions(): ActionData[] {
    return this.actions.map((action) => ({
      name: action.getName(),
      maxCredits: action.getMaxCredits(),
      credits: action.getCredits(),
    }));
  }

  public getActionByName(name: string): Action | undefined {
    const action = this.actions.find((action) => action.getName() === name);
    if (!action) {
      console.error(`Action with name ${name} not found`);
    }
    return action;
  }

  public updateCredits(): void {
    this.actions.forEach((action) => {
      action.setCredits(getRandomCredits(action.getMaxCredits()));
    });
  }

  public decreaseCredits(action: Action, value: number): void {
    if (action) {
      action.setCredits(action.getCredits() - value);
    }
  }

  public findNextActionWithCreditToDequeue(queue: readonly string[]): { action: Action | undefined; index: number } {
    for (let index = 0; index < queue.length; index++) {
      const actionName = queue[index];
      const action = this.getActionByName(actionName);
      if (action && action.hasEnoughCredits()) {
        return { action, index };
      }
    }
    return { action: undefined, index: -1 };
  }
}