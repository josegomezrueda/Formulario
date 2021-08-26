
import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './shared/error/error.component';
import { PersonaModule } from './Administracion/persona/infrastructure/routing/persona.module';
import { EstudianteModule } from './Administracion/estudiante/infrastruture/routing/estudiante.module';
import { PaginaInicioComponent } from './Administracion/persona/infrastructure/presentation/pagina-inicio/pagina-inicio.component';

const routes: Routes = [
   {
     path:'',
     children:[
      {
        path: '',
        loadChildren:()=> PersonaModule
      },
      {
        path: 'estudiante',
        loadChildren:()=> EstudianteModule
      },
      {
        path: 'error', 
        component: ErrorComponent
      }
     ]
   }
  ];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
