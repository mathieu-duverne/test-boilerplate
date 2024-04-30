import { ActionData } from '../types/types';

export class Action {
  private readonly name: string;
  private readonly maxCredits: number;
  private credits: number;

  constructor({ name, maxCredits, credits }: ActionData) {
    this.name = name;
    this.maxCredits = maxCredits;
    this.credits = credits;
  }

  hasEnoughCredits(): boolean {
    return this.credits > 0;
  }

  getName(): string {
    return this.name;
  }

  getMaxCredits(): number {
    return this.maxCredits;
  }

  getCredits(): number {
    return this.credits;
  }

  setCredits(credits: number): void {
    this.credits = Math.max(0, Math.min(credits, this.maxCredits));
  }
}