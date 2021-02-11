import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-directiva',
  template: `
  <div>
    <h2>Directiva Personalizada</h2>
    <p>Directiva personalizada para resaltado del texto.</p>
    <p>
        Pasa el ratón por encima de los párrafos para utilizar la directiva.
    </p>
    <p [appResaltado]="'#ffff00'" class="text-justify">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>

    <p [appResaltado]="'#18ffff'" class="text-justify">
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <p [appResaltado]="'#64ffda'" class="text-justify">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    </p>
  </div>
  `,
  styles: [
  ]
})
export class MiDirectivaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
