import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../interface/reqres-response';
import { Observable } from 'rxjs';
import { Estudiante } from '../interface/estudiante';
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) { }
  cargarEstudiantes(): Observable<Estudiante[]> {
    const url = 'http://localhost:3000/estudiantes'
    return this.http.get<Estudiante[]>(url);
  }
  crearEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    const url = 'http://localhost:3000/estudiantes/';
    return this.http.post<Estudiante>(url, estudiante);
  }
  editarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    const url = 'http://localhost:3000/estudiantes/'+estudiante.id;
    return this.http.put<Estudiante>(url, estudiante);
  }

  borrarEstudiante(id:number): Observable<Estudiante> {
    const url = 'http://localhost:3000/estudiantes/'+id;
    return this.http.delete<Estudiante>(url);
  }

  cargarUsuarios(): Observable<Persona[]> {
    const url = 'http://localhost:3000/personas'
    return this.http.get<Persona[]>(url);
  }

  cargarUsuario(id:any): Observable<Persona> {
    const url = 'http://localhost:3000/personas/'+id;
    return this.http.get<Persona>(url);
  }

  borrarUsuario(id:number): Observable<Persona> {
    const url = 'http://localhost:3000/personas/'+id;
    return this.http.delete<Persona>(url);
  }

  editarUsuario(persona: Persona): Observable<Persona> {
    const url = 'http://localhost:3000/personas/'+persona.id;
    return this.http.put<Persona>(url, persona);
  }
  crearUsuario(persona: Persona): Observable<Persona> {
    const url = 'http://localhost:3000/personas/';
    return this.http.post<Persona>(url, persona);
  }
}