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
  reqresponse: ReqResResponse[]=[];
  constructor(
    private readonly router: Router,
    private readonly usuariosService: UsuariosService
  ) { }

  ngOnInit(): void {

    this.usuariosService.cargarUsuarios()
      .subscribe((resp: ReqResResponse[])=>{
        this.reqresponse=resp;
        console.log(this.reqresponse)
      })

  }
}
