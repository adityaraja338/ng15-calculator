import { Component } from '@angular/core';
import {CalculatorService} from "./calculator.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

  darkMode=true;
  color='orange';
  calculatorMode = 'Standard';
  hamburgerOpen = false;

  constructor(private calculatorService :CalculatorService) {
  }

  protected readonly console = console;
}
