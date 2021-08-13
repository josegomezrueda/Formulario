import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ReqResResponse } from 'src/app/interface/reqres-response';
import { ContadorOperacionesService } from 'src/app/services/contador-operaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';



@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss']
})
export class PaginaInicioComponent implements OnInit {
  reqresponse: ReqResResponse[] = [];
  
  constructor(
    private readonly router: Router,
    private readonly usuariosService: UsuariosService,
    private readonly contadorOperaciones: ContadorOperacionesService
  ) {}

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
      .subscribe((resp: ReqResResponse[]) => {
        this.reqresponse = resp;
      })
  }

  deleteElement(evento:number) {
    this.reqresponse = this.reqresponse.filter((persona: ReqResResponse) => persona.id_persona !== evento )
    this.contadorOperaciones.increment()
  }
}
