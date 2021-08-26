import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Estudiante, Estudiante_BLANK } from 'src/app/Administracion/estudiante/domain/estudiante';
import { UsuariosService } from 'src/app/Administracion/persona/infrastructure/services/usuarios.service';
import { ServicioEstudianteService } from '../../services/servicio-estudiante.service';

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
    id: [''],
    id_persona: ['',[Validators.required]],
    num_hour_week: ['',[Validators.required]],
    coments: ['',[Validators.required]],
    branch: ['',[Validators.required]]
  })

  private estudiante: Estudiante = Estudiante_BLANK();

  constructor(
    public dialogRef: MatDialogRef<DialogFormEstudianteComponent>,
    public dialogEditEs: MatDialogRef<DialogFormEstudianteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private readonly usuarioService: ServicioEstudianteService,
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
  public isValid(){
    return this.registerFormEstudiante.invalid;
  }
}