import { Component, Input, OnInit } from '@angular/core';
import { ReqResResponse, ReqResResponse_BLANK } from 'src/app/interface/reqres-response';

@Component({
  selector: 'app-fila',
  templateUrl: './fila.component.html',
  styleUrls: ['./fila.component.scss']
})
export class FilaComponent implements OnInit {
  @Input() objetoFila: ReqResResponse = ReqResResponse_BLANK() ;
  constructor() { }

  ngOnInit(): void {
  }

}
