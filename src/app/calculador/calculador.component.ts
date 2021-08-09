import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculador',
  templateUrl: './calculador.component.html',
  //styleUrls: ['./calculador.component.css']
})
export class CalculadorComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  resultado: number = 0;
  num1: number = 0;
  num2: number = 0;

  

  sumar():void {
    this.resultado = this.num1 + this.num2;
  }
}
