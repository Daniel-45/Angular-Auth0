import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-class',
  templateUrl: './ng-class.component.html',
  styles: [
  ]
})
export class NgClassComponent implements OnInit {

  colorAlerta = 'alert-info';

  colorTexto = {
    color: false
  };

  cargando = false;

  texto = '';

  respuesta = '';

  constructor() { }

  ngOnInit(): void {
  }

  ejecutar() {
    this.cargando = true;
    setTimeout(() => {
      this.cargando = false,
        this.respuesta = 'Gracias por enviar su comentario.';
    }, 1000);
  }

}
