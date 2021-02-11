import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  template: `
  <div [ngStyle]="{'text-align': 'justify'}">
    <h4>NgFor</h4>
    <p>
      Esta directiva genera una plantilla para cada elemento de una colección. La directiva se coloca en un elemento, que
      se convierte en el padre de las plantillas clonadas. Permite ejecutar bucles, los bucles son los que conocemos en
      lógica de programación comolos bucles for, while o foreach. Con esta directiva estructural podemos evaluar de
      acuerdo a nuestra condición n veces.
    </p>
    <p>Frameworks JavaScript:</p>
    <div class="card-deck">
      <div class="card mb-3" *ngFor="let framework of frameworks">
        <div class="card-header font-weight-bold">{{framework}}</div>
        <div class="card-body">
          <h6 class="card-title">Card title</h6>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  </div>
  `,
  styles: [
  ]
})
export class NgForComponent implements OnInit {

  frameworks = ['Angular', 'React', 'Vue'];

  framework: string;

  constructor() { }

  ngOnInit(): void {
  }

}
