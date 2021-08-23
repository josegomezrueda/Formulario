import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, NgControlStatus } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona, ReqResResponse_BLANK } from 'src/app/interface/reqres-response';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  public id: any;
  public persona: Persona = ReqResResponse_BLANK();

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router:Router,
    private readonly usuarioService: UsuariosService) { }

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

  ngOnInit(): void {
    this.getParams();
  }

  private getParams() {
    this.route.params.subscribe(params => {
      this.id = params['id']
      if (!this.id) return;
      this.usuarioService.cargarUsuario(this.id).subscribe(resultado => {
        this.persona = resultado;
        this.registerForm.patchValue(this.persona)
      })
    })
  }

  public enviardato() {
    this.persona = this.registerForm.value;
    if (this.id) {
      this.persona.id = this.id
      this.usuarioService.editarUsuario(this.persona).subscribe(response => {
        this.persona = response;
        this.router.navigate(['/pagina-inicio'])
      })
    } else {
      this.usuarioService.crearUsuario(this.persona).subscribe(response => {
        this.persona = response;
        this.router.navigate(['/pagina-inicio'])
      })
    }
    
  }
}

