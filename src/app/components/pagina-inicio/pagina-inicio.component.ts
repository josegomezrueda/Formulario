import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReqResResponse } from 'src/app/interface/reqres-response';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss']
})
export class PaginaInicioComponent implements OnInit {
  reqresponse: ReqResResponse[] = [];
  contador: number = 0;
  
  constructor(
    private readonly router: Router,
    private readonly usuariosService: UsuariosService
  ) {}

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
      .subscribe((resp: ReqResResponse[]) => {
        this.reqresponse = resp;
      })
  }

  getMensaje(evento: any) {
    

  }
  deleteElement(evento:number) {
    console.log(evento, "deleteElement")
    this.reqresponse = this.reqresponse.filter((persona: ReqResResponse) => persona.id_persona !== evento )
    this.contador++;
  }
}
