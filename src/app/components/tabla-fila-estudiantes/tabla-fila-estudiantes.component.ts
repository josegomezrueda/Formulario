import { ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Estudiante, Estudiante_BLANK } from 'src/app/interface/estudiante';
import { UsuariosService } from 'src/app/services/usuarios.service';

import { DialogFormEstudianteComponent } from '../dialog-form-estudiante/dialog-form-estudiante.component';


@Component({
  selector: 'app-tabla-fila-estudiantes',
  templateUrl: './tabla-fila-estudiantes.component.html',
  styleUrls: ['./tabla-fila-estudiantes.component.scss']
})
export class TablaFilaEstudiantesComponent implements OnInit {
  public estudiante: Estudiante = Estudiante_BLANK();
  estudiantes: Estudiante[] = [];
  @Input() objetoFilaEstudiante: Estudiante = Estudiante_BLANK();
  @Output() estudianteEditado: EventEmitter<Estudiante> = new EventEmitter()
  @Output() estudianteBorrado: EventEmitter<number> = new EventEmitter()

  constructor(
    public dialog: MatDialog,
    private readonly usuariosService: UsuariosService,

  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }


  onEditar(objetoFilaEstudiante: Estudiante): void {
    const dialogEditEs = this.dialog.open(DialogFormEstudianteComponent, {
      width: '300px',
      data: { estudiante: objetoFilaEstudiante }
    });

    dialogEditEs.afterClosed().subscribe(response => {
      if (response) {
        this.estudianteEditado.emit(response)
      }
    })
  }
  eliminarEstudiante() {
    let id;
    id = parseInt(this.objetoFilaEstudiante.id);
    this.usuariosService.borrarEstudiante(id).subscribe();
    this.estudianteBorrado.emit(id);
  }

  private cargarDatos(): void {
    this.usuariosService.cargarEstudiantes()
      .subscribe((est: Estudiante[]) => {
        this.estudiantes = est;
      })
  }
}

