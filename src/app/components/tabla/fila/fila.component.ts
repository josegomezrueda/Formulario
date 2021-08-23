import { NumberInput } from '@angular/cdk/coercion';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Persona, ReqResResponse_BLANK } from 'src/app/interface/reqres-response';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss']
})
export class FilaComponent {
  @Input() objetoFila: Persona = ReqResResponse_BLANK();
  @Output() miEventoEditar = new EventEmitter<any>();
  @Output() miEventoBorrar = new EventEmitter<any>();

  id=0;
  constructor(private router: Router, private readonly usuariosService: UsuariosService) { 
    
  }

  editardato() {
    this.id= this.objetoFila.id;
    this.router.navigate(['/editar', this.id]);
      }

  eliminardato(){
    this.id= this.objetoFila.id;
    this.usuariosService.borrarUsuario(this.id).subscribe();
    this.miEventoBorrar.emit(this.id);
    }
  
}
