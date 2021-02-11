import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NgStyleComponent } from './components/directivas/ng-style.component';
import { NgClassComponent } from './components/directivas/ng-class.component';
import { NgIfComponent } from './components/directivas/ng-if.component';
import { NgForComponent } from './components/directivas/ng-for.component';
import { NgSwitchComponent } from './components/directivas/ng-switch.component';
import { MiDirectivaComponent } from './components/directivas/mi-directiva.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NotFoundComponent } from './components/not-found/not-found.component';

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ComponentesComponent,
    DirectivasComponent,
    NgStyleComponent,
    NgClassComponent,
    NgIfComponent,
    NgForComponent,
    NgSwitchComponent,
    MiDirectivaComponent,
    ResaltadoDirective,
    PerfilUsuarioComponent,
    NotFoundComponent,
    AuthButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // Import the module into the application, with configuration
    AuthModule.forRoot({
      domain: 'dev-xxxxxxx.eu.auth0.com', // Your domain
      clientId: 'xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx'// Your client id
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
