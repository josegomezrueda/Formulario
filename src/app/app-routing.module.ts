import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ActivatedRouteSnapshot, RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaEstudianteComponent } from './components/pagina-estudiante/pagina-estudiante.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';
import { AplicacionResolver } from './resolvers/resolver';



@NgModule({
  declarations:[],
  imports: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
