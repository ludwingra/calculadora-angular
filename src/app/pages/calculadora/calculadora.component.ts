import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  title: string;
  subtitle: string;
  descripcion: string;
  operator: any[];
  num: any[];

  constructor() { }

  ngOnInit() {
    this.title = 'App EducaBogotá';
    this.subtitle = 'Calculadora';
    this.descripcion = '';
    this.operator = ['+', '-', '*', '/', '='];
    this.num = [7, 8, 9];
  }

  public imprime(valor: string) {
    console.log(valor);
  }

}
