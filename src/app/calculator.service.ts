import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  private currentExpression: string = '';
  private lastResult: number | null = null;
  private lastExpression: number | null = null;

  constructor() {}

  addToExpression(value: string): void {
    this.currentExpression += value;
  }

  clearCurrent(): void {
    this.currentExpression = '';
  }

  clearAll(): void {
    this.currentExpression = '';
    this.lastResult = null;
    this.lastExpression = null;
  }

  deleteLastCharacter(): void {
    this.currentExpression = this.currentExpression.slice(0, -1);
  }

  evaluateExpression(): void {
    try {
      this.lastResult = eval(this.currentExpression);
      this.lastExpression = this.lastResult;
      this.currentExpression = this.lastResult+"";
    } catch (error) {
      this.lastResult = null;
    }
  }

  getCurrentExpression() {
    return {last: this.lastExpression, current: this.currentExpression};
  }

  getLastResult(): number | null {
    return this.lastResult;
  }

}
