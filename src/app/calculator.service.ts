import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  private currentInput: string = ''; // Stores the current input expression
  private result: number | null = null; // Stores the calculated result

  constructor() {}

  // Method to handle digit input
  inputDigit(digit: string): void {
    this.currentInput += digit;
  }

  // Method to handle operator input
  inputOperator(operator: string): void {
    if (this.currentInput !== '') {
      this.currentInput += ' ' + operator + ' ';
    }
  }

  // Method to handle negation
  negate(): void {
    if (this.currentInput === '' || this.currentInput.endsWith(' ')) {
      this.currentInput += '-';
    }
  }

  // Method to handle small brackets
  inputSmallBracket(): void {
    this.currentInput += '(';
  }

  // Method to handle closing small brackets
  inputClosingSmallBracket(): void {
    this.currentInput += ')';
  }

  // Method to handle percentage
  inputPercentage(): void {
    this.currentInput += '%';
  }

  // Method to clear the current input statement
  clearCurrent(): void {
    this.currentInput = '';
  }

  // Method to clear the whole calculation
  clearAll(): void {
    this.currentInput = '';
    this.result = null;
  }

  // Method to delete the last character
  deleteLastCharacter(): void {
    this.currentInput = this.currentInput.slice(0, -1);
  }

  // Method to evaluate the current expression
  calculate(): void {
    try {
      // Using eval for simplicity, consider a safer parser for production
      this.result = eval(this.currentInput);
    } catch (e) {
      this.result = null; // Handle invalid expressions gracefully
    }
  }

  // Method to get the current input
  getCurrentInput(): string {
    return this.currentInput;
  }

  // Method to get the calculated result
  getResult(): number | null {
    return this.result;
  }
}
