import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante, Estudiante_BLANK } from 'src/app/interface/estudiante';
import { UsuariosService } from 'src/app/services/usuarios.service';

export interface DialogData {
  estudiante: Estudiante;
}

@Component({
  selector: 'app-dialog-form-estudiante',
  templateUrl: './dialog-form-estudiante.component.html',
  styleUrls: ['./dialog-form-estudiante.component.scss']
})
export class DialogFormEstudianteComponent {
  registerFormEstudiante = this.formBuilderEstudiante.group({
    id: [],
    id_persona: [],
    num_hour_week: [],
    coments: [],
    branch: []

  })

  private estudiante: Estudiante = Estudiante_BLANK();

  constructor(
    public dialogRef: MatDialogRef<DialogFormEstudianteComponent>,
    public dialogEditEs: MatDialogRef<DialogFormEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly usuarioService: UsuariosService,
    private formBuilderEstudiante: FormBuilder
  ) {
    if (data) {
      const { estudiante } = data
      this.estudiante = estudiante
      this.registerFormEstudiante.patchValue(this.estudiante)
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    let estudiante: Estudiante = this.registerFormEstudiante.value;

    if (!this.estudiante.id) {
      this.usuarioService.crearEstudiante(estudiante).subscribe(response => {
        estudiante = response;
        this.dialogRef.close(estudiante);
      })
    } else {
      this.usuarioService.editarEstudiante(estudiante).subscribe(response => {
        estudiante = response;
        this.dialogEditEs.close(estudiante);
        
      })
    }

  }
}