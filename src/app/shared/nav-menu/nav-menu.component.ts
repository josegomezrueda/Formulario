import { Component, OnInit } from '@angular/core';
import { ContadorOperacionesService } from 'src/app/Administracion/persona/infrastructure/services/contador-operaciones.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  public contador2: number = 0;
  public contador: number = 0;
  constructor(private readonly contadorOperaciones: ContadorOperacionesService) {
    this.contadorOperaciones.resultadoContador.subscribe(contador => {
      this.contador = contador;
    }),
      this.contadorOperaciones.resultadoContador2.subscribe(contador2 => {
        this.contador2 = parseInt(localStorage.getItem('Contador2') || '');
      })
  }

  ngOnInit(): void {

    this.contador2 = parseInt(localStorage.getItem('Contador2') || '');

  }
}

