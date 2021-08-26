import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Estudiante } from '../../domain/estudiante';

@Injectable({
  providedIn: 'root'
})
export class ServicioEstudianteService {
  
  url=environment.Url

  constructor(private http: HttpClient) { }
  cargarEstudiantes(): Observable<Estudiante[]> {
    const url = this.url+'estudiantes/'
    return this.http.get<Estudiante[]>(url);
  }
  crearEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    const url = this.url+'estudiantes/';
    return this.http.post<Estudiante>(url, estudiante);
  }
  editarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    console.log(estudiante)
    const url = this.url+'estudiantes/'+estudiante.id;
    return this.http.put<Estudiante>(url, estudiante);
  }

  borrarEstudiante(id:number): Observable<Estudiante> {
    const url = this.url+'estudiantes/'+id;
    return this.http.delete<Estudiante>(url);
  }
}
