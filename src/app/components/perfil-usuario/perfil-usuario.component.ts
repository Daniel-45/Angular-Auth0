import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-perfil-usuario',
  template: `
    <div class="mt-5" *ngIf="auth.user$ | async as user">
      <div class="card col-lg-12 col-md-12 m-auto">
        <div class="row no-gutters">
          <div class="col-md-4">
          <img src="/assets/images/male-user.png" class="card-img-top img-fluid" alt="user">
        </div>
        <hr>
        <div class="col-md-8">
          <div class="card-body">
            <h5 class="card-title font-weight-bold">{{ user.name }}</h5>
            <p class="card-text font-weight-bold text-muted">
              {{ profesion }} | {{ user.email }}
            </p>
            <p class="card-text text-justify">{{ descripcion }}</p>
            <p class="card-text">
              <small class="font-weight-bold text-muted">
                Última actualización: {{ user.updated_at }}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class PerfilUsuarioComponent implements OnInit {

  profesion: string;
  descripcion: string;
  user: any;

  constructor(public auth: AuthService) {
    this.profesion = 'Desarrollador Full Stack';
    this.descripcion = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';
  }

  ngOnInit(): void {
  }

}
