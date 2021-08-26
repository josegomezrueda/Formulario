import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacionResolver } from 'src/app/Administracion/persona/infrastructure/resolvers/resolver';
import { FormularioComponent } from '../presentation/formulario/formulario.component';
import { PaginaInicioComponent } from '../presentation/pagina-inicio/pagina-inicio.component';

const routes: Routes = [
  {
    path:'',
    component: PaginaInicioComponent
  },
  {
    path: 'formulario',
    component: FormularioComponent
  },
  {
    path: 'editar/:id',
    component: FormularioComponent,
    resolve:{
      persona: AplicacionResolver,
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonaRoutingModule { }
