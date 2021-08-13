import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContadorOperacionesService {
  private contador: number=0;

  resultadoContador: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  increment(): void{
    this.contador++;
    this.resultadoContador.emit(this.contador)
  }
}

