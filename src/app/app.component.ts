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
  calculatorMode = 'Length';
  hamburgerOpen = false;

  length1:string="";
  length2:string="";
  lengthMode1=0;
  lengthMode2 =1;

  orange='#FD7014';
  green='#14FD63'
  white='#EEE';
  dark='#393E46';

  activeColor=this.orange;

  constructor(protected calculatorService :CalculatorService) {
  }

  addToExpression(value: string) {
    this.calculatorService.addToExpression(value);
  }

  clearCurrent() {
    this.calculatorService.clearCurrent();
  }

  clearAll() {
    this.calculatorService.clearAll();
  }

  deleteLastCharacter() {
    this.calculatorService.deleteLastCharacter();
  }

  evaluateExpression() {
    this.calculatorService.evaluateExpression();
  }

  result:any;
  currentExp:any;

  mOptions = [1,100,3.280839895];
  cmOptions = [0.01, 1, 0.03280839895];
  feetOptions = [1/3.280839895, 1/0.03280839895,1];
  convert(){
    this.lengthMode1 == 0 ? this.length2 = +this.length1*this.mOptions[this.lengthMode2]+'':null;
    this.lengthMode1 == 1 ? this.length2 = +this.length1*this.cmOptions[this.lengthMode2]+'':null;
    this.lengthMode1 == 2 ? this.length2 = +this.length1*this.feetOptions[this.lengthMode2]+'':null;
  }

  protected readonly console = console;
}
