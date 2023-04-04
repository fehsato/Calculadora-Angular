import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculadora-Angular';

  num1 = 0;
  num2 = 0;
  resp = '0';

  somar(): void {
    this.resp = `${this.num1 + this.num2}`;
  }

  dividir(): void {
    this.resp = `${this.num1 / this.num2}`;
  }

  subtrair(): void {
    this.resp = `${this.num1 - this.num2}`;
  }

  multiplicar(): void {
    this.resp = `${this.num1 * this.num2}`;
  }

 

}

