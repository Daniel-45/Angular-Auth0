import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  template: `
  <div [style.fontSize.px]="size">
    <h4>NgStyle</h4>
    <p>
      Esta directiva actualiza los estilos del elemento HTML que lo contiene.
      Establece una o más propiedades de estilo, especificadas como pares clave-valor separados por dos puntos.
      La clave es un nombre de estilo, con un sufijo.
      El valor es una expresión a evaluar.
      El valor no nulo resultante, expresado en la unidad dada, se asigna a la propiedad de estilo dada.
      Si el resultado de la evaluación es nulo, se elimina el estilo correspondiente.
    </p>

    <p>
      Haz clic en los botones para aumentar o disminuir el tamaño de la fuente.
    </p>

    <button class="btn btn-primary mr-1" (click)="size = size + 2">
      <i class="fa fa-plus"></i>
    </button>

    <button class="btn btn-primary mr-1" (click)="size = size - 2">
      <i class="fa fa-minus"></i>
    </button>
  </div>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {

  size = 16;

  color = '#0275d8';

  constructor() { }

  ngOnInit(): void {
  }

}
