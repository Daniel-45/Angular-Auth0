import { Component, Inject } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-auth-button',
  template: `
    <ng-container *ngIf="auth.isAuthenticated$ | async; else loggedOut">
      <button class="btn btn-outline-danger m-btn" (click)="auth.logout({ returnTo: document.location.origin })">
        Cerrar Sesión
      </button>
    </ng-container>

    <ng-template #loggedOut>
      <button class="btn btn-outline-primary m-btn" (click)="auth.loginWithRedirect()">
        Iniciar Sesión
      </button>
    </ng-template>
  `,
  styles: [],
})
export class AuthButtonComponent {
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) { }
}