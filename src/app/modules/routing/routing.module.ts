import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/components/error/error.component';
import { PaginaInicioComponent } from 'src/app/components/pagina-inicio/pagina-inicio.component';
import { PaginaEstudianteComponent } from 'src/app/components/pagina-estudiante/pagina-estudiante.component';
import { FormularioComponent } from 'src/app/components/formulario/formulario.component';
import { AplicacionResolver } from 'src/app/resolvers/resolver';
import { PaginaInicioModule } from 'src/app/components/pagina-inicio/pagina-inicio.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: ()=> PaginaInicioModule,
  },
  {
    path: 'error', 
    component: ErrorComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'pagina-estudiante',
    component: PaginaEstudianteComponent
  },
  {
    path: 'editar/:id',
    component: FormularioComponent,
    resolve:{
      aplicacion: AplicacionResolver
    }
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ]
})
export class RoutingModule { }
