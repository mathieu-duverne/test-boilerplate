export class Queue {
  private actionsList: string[] = [];

  enqueue(item: string): void {
    this.actionsList.push(item);
  }

  dequeueByIndex(index: number): void {
    if (index >= 0 && index < this.actionsList.length) {
      this.actionsList.splice(index, 1);
    }
  }

  getQueue(): readonly string[] {
    return [...this.actionsList];
  }

  size(): number {
    return this.actionsList.length;
  }
}