import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormularioComponent } from './components/formulario/formulario.component';
import { PaginaEstudianteComponent } from './components/pagina-estudiante/pagina-estudiante.component';
import { PaginaInicioComponent } from './components/pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'pagina-inicio',
    pathMatch: 'full'
  },
  {
    path: 'pagina-inicio',
    component: PaginaInicioComponent
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
    component: FormularioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
