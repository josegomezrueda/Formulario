
import { error } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, Router} from '@angular/router'
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UsuariosService } from '../services/usuarios.service';

@Injectable({
    providedIn: 'root' //no tengo que incluirlo en app module
})

export class AplicacionResolver implements Resolve<Observable<any>> {

    constructor(private _api: UsuariosService){

    }
    resolve(route: ActivatedRouteSnapshot) {
        return this._api.cargarUsuario(route.paramMap.get('id')).pipe(
            catchError((error) => {
                alert('El id indicado no existe');
                console.log(error)
                return EMPTY;

            })
        )
    }
}