import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { ReqResResponse } from '../interface/reqres-response';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }

  cargarUsuarios(): Observable<ReqResResponse[]> {
    const url = 'http://localhost:3000/personas'
    return this.http.get<ReqResResponse[]>(url);
  }

  cargarUsuario(id:any): Observable<ReqResResponse> {
    const url = 'http://localhost:3000/personas/'+id;
    return this.http.get<ReqResResponse>(url);
  }

  borrarUsuario(id:number): Observable<ReqResResponse> {
    const url = 'http://localhost:3000/personas/'+id;
    return this.http.delete<ReqResResponse>(url);
  }

  editarUsuario(persona: ReqResResponse): Observable<ReqResResponse> {
    const url = 'http://localhost:3000/personas/'+persona.id_persona;
    return this.http.put<ReqResResponse>(url, persona);
  }
  crearUsuario(persona: ReqResResponse): Observable<ReqResResponse> {
    const url = 'http://localhost:3000/personas/';
    console.log(persona, "crearuser")
    return this.http.post<ReqResResponse>(url, persona);
  }
}