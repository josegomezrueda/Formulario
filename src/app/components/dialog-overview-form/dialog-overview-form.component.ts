import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReqResResponse, ReqResResponse_BLANK } from 'src/app/interface/reqres-response';
import { UsuariosService } from 'src/app/services/usuarios.service';

export interface DialogData {
  personas: ReqResResponse[];
}

@Component({
  selector: 'app-dialog-overview-form',
  templateUrl: './dialog-overview-form.component.html',
  styleUrls: ['./dialog-overview-form.component.scss']
})
export class DialogOverviewFormComponent{
  registerForm = this.formBuilder.group({
    user: [],
    surname: [],
    password: [],
    company_email: [],
    personal_email: [],
    city: [],
    imagen_url: [],
    active: [],
    created_date: [],
    termination_date: []
  })

  private personas: ReqResResponse[]=[];

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private readonly usuarioService: UsuariosService) {
      const{personas}=data 
      this.personas=personas
    }

  onNoClick(): void {
    this.dialogRef.close();
  }
  onClick(): void {
    let persona: ReqResResponse = this.registerForm.value;
    /*
    this.usuarioService.crearUsuario(persona).subscribe(response => {
      persona = response;
      this.personas.push(persona)
      this.dialogRef.close(this.personas)
      */
      
      this.usuarioService.crearUsuario(persona).subscribe(response => {
        persona = response;
        this.dialogRef.close(persona);
      
    })
    
  }

}
