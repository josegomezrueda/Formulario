import { Component, OnInit } from '@angular/core';
import { ContadorOperacionesService } from 'src/app/services/contador-operaciones.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {

  public contador: number=0;
  constructor(private readonly contadorOperaciones: ContadorOperacionesService) { 
    this.contadorOperaciones.resultadoContador.subscribe(contador =>{
      this.contador=contador;
    })
  }

  ngOnInit(): void {
  }

}
