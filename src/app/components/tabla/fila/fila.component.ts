import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ReqResResponse, ReqResResponse_BLANK } from 'src/app/interface/reqres-response';
import { UsuariosService } from 'src/app/services/usuarios.service';


@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss']
})
export class FilaComponent implements OnInit {
  @Input() objetoFila: ReqResResponse = ReqResResponse_BLANK();
  @Output() miEventoEditar = new EventEmitter<any>();
  @Output() miEventoBorrar = new EventEmitter<any>();

  id=0;
  constructor(private router: Router, private readonly usuariosService: UsuariosService) { }

  editardato() {
    //this.miEventoEditar.emit(this.objetoFila);
    this.id= this.objetoFila.id_persona;
    this.router.navigate(['/editar', this.id]);
   
      }

  eliminardato(){
    this.id= this.objetoFila.id_persona;
    this.usuariosService.borrarUsuario(this.id).subscribe();
    console.log(this.id,"eliminardato");
    this.miEventoBorrar.emit(this.id);
    
  }
  
  ngOnInit(): void {
  }
}
