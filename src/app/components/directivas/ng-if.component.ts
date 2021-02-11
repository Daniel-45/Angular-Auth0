import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  template: `
  <div>
    <h4>NgIf</h4>
    <p>
      Esta directiva permite incluir condicionales en nuestro código, como por ejemplo evaluar sentencias, hacer
      comparaciones, mostrar u ocultar secciones de código, para que se renderice nuestro HTML, cumpliendo la sentencia a
      evaluar.
    </p>

    <div class="card" style="width: 18rem;" *ngIf="card">
      <img src="/assets/images/angular-banner.png" class="card-img-top" alt="...">
      <div class="card-body">
        <p class="card-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum.
        </p>
      </div>
    </div>

    <button
    class="btn btn-primary m-btn mt-3"
    (click)="card = !card"
    >
      Mostrar/Ocultar
    </button>
  </div>
  `,
  styles: [
  ]
})
export class NgIfComponent implements OnInit {

  card = false;

  constructor() { }

  ngOnInit(): void {
  }

}
