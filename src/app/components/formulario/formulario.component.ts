import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  registerForm = this.formBuilder.group({
    username:[],
    surname:[],
    password:[],
    emailcompany:[],
    emailpersonal:[],
    city:[],
    urlimagen:[],
    activated:[],
    datecreated:[],
    datetermination:[]
  })

  ngOnInit(): void {
  }

  public submit():void{
    console.log(this.registerForm.controls.username.value)
  }
}
