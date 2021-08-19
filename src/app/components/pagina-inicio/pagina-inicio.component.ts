import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ReqResResponse } from 'src/app/interface/reqres-response';
import { ContadorOperacionesService } from 'src/app/services/contador-operaciones.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { DialogOverviewFormComponent } from '../dialog-overview-form/dialog-overview-form.component';

@Component({
  selector: 'app-pagina-inicio',
  templateUrl: './pagina-inicio.component.html',
  styleUrls: ['./pagina-inicio.component.scss']
})
export class PaginaInicioComponent implements OnInit {
  reqresponse: ReqResResponse[] = [];
  animal: string = '';
  name: string = '';
  constructor(
    private readonly router: Router,
    private readonly usuariosService: UsuariosService,
    private readonly contadorOperaciones: ContadorOperacionesService,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  deleteElement(evento: number) {
    this.reqresponse = this.reqresponse.filter((persona: ReqResResponse) => persona.id_persona !== evento)
    this.contadorOperaciones.increment()
    this.contadorOperaciones.increment2()
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewFormComponent, {
      width: '250px',
      data: { personas: this.reqresponse }

    });
    /*
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.reqresponse = response
      }
    })
  }
  */
    dialogRef.afterClosed().subscribe(response => {
      if (response) {
        this.reqresponse.push(response)
      }
    })
  }


  private cargarDatos(): void {
    this.usuariosService.cargarUsuarios()
      .subscribe((resp: ReqResResponse[]) => {
        this.reqresponse = resp;
      })
  }
}
