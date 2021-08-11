import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { ReqResResponse } from '../interface/reqres-response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor( private http: HttpClient  ) {}


cargarUsuarios (): Observable<ReqResResponse[]>{

  const url = 'http://localhost:8081/selectAll'

  return this.http.get<ReqResResponse[]>(url);
}
}