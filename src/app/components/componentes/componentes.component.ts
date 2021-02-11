import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componentes',
  template: `
  <div [ngStyle]="{'text-align': 'justify'}">
    <h2>Componentes</h2>
    <p>
      Los componentes son como etiquetas html nuevas que podemos inventarnos para realizar las funciones necesarias.
      Pueden ser cosas diversas desde una sección de navegación a un formulario.
    </p>

    <p>
      Los componentes son pequeñas partes lógicas de la aplicación, que van a estar representando a un trozo de la
      pantalla.
    </p>

    <ul>
      <li>Un componente es un bloque, que contiene un template, contiene estilos , contiene lógica.</li>
      <li>Un componente esta compuesto por un archivo .ts , uno html y uno css.</li>
      <li>De cada componente exportamos una clase, que se podrá importar a otros componentes.</li>
      <li>Una aplicación de angular esta compuesta por componentes.</li>
    </ul>

    <p>
      Los componentes son pequeñas partes lógicas de la aplicación, que van a estar representando a un trozo de la
      pantalla. Así funciona angular, todo lo que aparece en la aplicación son componentes, que son pequeños trozos de
      pantalla las cuales van a estar controladas por una clase, que esa clase va a ser la que va a dar soporte al
      componente. La clase tendrá una serie de funcionalidades y la clase también tendrá una plantilla asociada que sera
      la que mostrara la información correspondiente.
    </p>
  </div>
  `,
  styles: [
  ]
})
export class ComponentesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

