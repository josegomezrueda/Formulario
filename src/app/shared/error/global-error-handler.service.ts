import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class GlobalErrorHandlerService implements ErrorHandler{

  constructor(private injector: Injector) { }
    handleError(error:any){
      const router = this.injector.get(Router)
      console.log(`Request URL: ${router.url}`)

      if (error instanceof HttpErrorResponse){
        console.log('Backend returned status code: ', error.status)
        console.log('Response body: ', error.message)
      }else{
        console.log('An ocurred: ', error.message)
      }

      router.navigate(['error'])
  }
}
