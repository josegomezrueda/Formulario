import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Estudiante } from 'src/app/Administracion/estudiante/domain/estudiante';
import { UsuariosService } from 'src/app/Administracion/persona/infrastructure/services/usuarios.service';
import { ServicioEstudianteService } from '../../services/servicio-estudiante.service';
import { DialogFormEstudianteComponent } from '../dialog-form-estudiante/dialog-form-estudiante.component';

@Component({
  selector: 'app-pagina-estudiante',
  templateUrl: './pagina-estudiante.component.html',
  styleUrls: ['./pagina-estudiante.component.scss']
})
export class PaginaEstudianteComponent implements OnInit {
  estudiantes: Estudiante[] = [];
  constructor(
    private readonly usuariosService: ServicioEstudianteService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }
  
  onEditEstudiante(estudianteAct: Estudiante){
    
    this.estudiantes=this.estudiantes.map(elemento=>{
      if(elemento.id==estudianteAct.id){
        elemento=estudianteAct
      }         
      
      return elemento
    })
  }

  deleteEstudiante(id: number){
    this.estudiantes = this.estudiantes.filter((estudiante: Estudiante) => parseInt(estudiante.id) !== id )
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogFormEstudianteComponent, {
      width: '300px',
    });
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.estudiantes.push(response)
      }
    })
  }

  private cargarDatos(): void {
    this.usuariosService.cargarEstudiantes()
      .subscribe((estu: Estudiante[]) => {
        this.estudiantes = estu;
      })
  }
}
