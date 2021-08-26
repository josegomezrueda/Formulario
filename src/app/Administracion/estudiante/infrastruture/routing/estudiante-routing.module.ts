import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEstudianteComponent } from '../presentation/pagina-estudiante/pagina-estudiante.component';

const routes: Routes = [
  {
    path: 'pagina-estudiante',
    component: PaginaEstudianteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
