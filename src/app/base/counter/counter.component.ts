import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h2> {{ tittle }} </h2>

    <h4>Base: <strong> {{ base }} </strong></h4>

    <button type="button" class="btn btn-primary" (click)="decrease( base )"> - {{ base }}</button>

    <span> {{ total }} </span>

    <button type="button" class="btn btn-primary" (click)="increase( base )"> + {{ base }} </button>
  `
})
export class CounterComponent {
  tittle: string = 'Contador App';
  base  : number = 5;
  total: number = 10;

  increase( value: number ) {
      this.total += value;
  }

  decrease( value: number ) {
      this.total -= value;
  }
}
