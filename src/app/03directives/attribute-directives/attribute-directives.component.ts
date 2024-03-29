import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styles: [],
})
export class AttributeDirectivesComponent {
  currentItem: string = '';

  classes1_field = {
    'text-capitalize fw-bold': true,
  };

  classes2_field = {
    'text-capitalize': true,
    'fw-bold': true,
  };

  getClassObject(): any {
    return {
      'text-capitalize': true,
      'fw-bold': true,
    };
  }

  getStylesObject(): any {
    return {
      'text-transform': true ? 'capitalize' : '',
      'font-weight': true ? 'bold' : '',
    };
  }

  getCurrentItem(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }
}
