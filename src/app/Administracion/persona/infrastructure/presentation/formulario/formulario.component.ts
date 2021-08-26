import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { max, min } from 'rxjs/operators';
import { Persona, ReqResResponse_BLANK } from 'src/app/Administracion/persona/domain/reqres-response';
import { UsuariosService } from 'src/app/Administracion/persona/infrastructure/services/usuarios.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public id: any;
  public persona: Persona;

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private readonly usuarioService: UsuariosService
    ) { 
    //  this.persona=this._ac.snapshot.data.aplicacion
    }

  registerForm = this.formBuilder.group({
    user: ['',[Validators.required, Validators.minLength(3), Validators.maxLength(9)]],
    surname: ['',[Validators.required]],
    password: ['',[Validators.required]],
    company_email: ['',[Validators.required, Validators.email]],
    personal_email: ['',[Validators.required, Validators.email]],
    city: ['',[Validators.required]],
    imagen_url: ['',[Validators.required]],
    active: ['',[Validators.required]],
    created_date: ['',[Validators.required]],
    termination_date: ['',[Validators.required]]
  })

  ngOnInit(): void {
    this.getParams();
    this.route.data.subscribe((response:any)=>{
      console.log(response)
      this.persona=response.persona
      this.registerForm.patchValue(this.persona)
    })
  }

  private getParams() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      
      })
  }

  public enviardato() {
    
    this.persona = this.registerForm.value;
    if (this.id) {
      this.persona.id = this.id
      this.usuarioService.editarUsuario(this.persona).subscribe(response => {
        this.persona = response;
        this.router.navigate(['/'])
      })
    } else {
      this.usuarioService.crearUsuario(this.persona).subscribe(response => {
        this.persona = response;
        this.router.navigate(['/'])
      })
    }
    
  }

  public isValid(){
    return this.registerForm.invalid;
  }
}

