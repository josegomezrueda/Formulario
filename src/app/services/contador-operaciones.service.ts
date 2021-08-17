import { EventEmitter, Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ContadorOperacionesService {
  private contador: number=0;
  private contador2: number=0;

  resultadoContador: EventEmitter<number> = new EventEmitter<number>();
  resultadoContador2: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    const contadortemp: any=localStorage.getItem('Contador2')||0;
    this.contador2=parseInt(contadortemp);
   }

  increment(): void{
    this.contador++;
    this.resultadoContador.emit(this.contador)
  }
  increment2(): void{
    this.contador2++;
    localStorage.setItem('Contador2', this.contador2.toString());
    this.resultadoContador2.emit(this.contador2)
  }
}

