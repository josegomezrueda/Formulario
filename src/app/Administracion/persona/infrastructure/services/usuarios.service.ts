import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../../domain/reqres-response';
import { Observable } from 'rxjs';
import { Estudiante } from '../../../estudiante/domain/estudiante';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  url=environment.Url

  constructor(private http: HttpClient) { }
 
  cargarUsuarios(): Observable<Persona[]> {
    const url = this.url+'personas';
    return this.http.get<Persona[]>(url);
  }

  cargarUsuario(id:any): Observable<Persona> {
    const url = this.url+'personas/'+id;
    return this.http.get<Persona>(url);
  }

  borrarUsuario(id:number): Observable<Persona> {
    const url = this.url+'personas/'+id;
    return this.http.delete<Persona>(url);
  }

  editarUsuario(persona: Persona): Observable<Persona> {
    const url = this.url+'personas/'+persona.id;
    return this.http.put<Persona>(url, persona);
  }
  crearUsuario(persona: Persona): Observable<Persona> {
    const url = this.url+'personas/';
    return this.http.post<Persona>(url, persona);
  }
}