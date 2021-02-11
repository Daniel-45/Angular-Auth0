import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ComponentesComponent } from './components/componentes/componentes.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PerfilUsuarioComponent } from './components/perfil-usuario/perfil-usuario.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'componentes', component: ComponentesComponent },
  { path: 'directivas', component: DirectivasComponent },
  { path: 'usuario', component: PerfilUsuarioComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
