import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-switch',
  templateUrl: './ng-switch.component.html',
  styles: [
  ]
})
export class NgSwitchComponent implements OnInit {

  alerta: string;

  constructor() { }

  ngOnInit(): void {
  }

  alertaDanger() {
    this.alerta = 'danger';
  }

  alertaPrimary() {
    this.alerta = 'primary';
  }

  alertaSuccess() {
    this.alerta = 'success';
  }

  alertaWarning() {
    this.alerta = 'warning';
  }

}
