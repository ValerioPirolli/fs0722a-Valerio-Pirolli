import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";


@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.form.statusChanges?.subscribe(status=>{
      console.log("stato del form", status)
    })
  }

  @ViewChild('form', {static:true}) form!:NgForm;

  user={
    nome:"",
    alterEgo:"",
    nemico:"",
    pianeta:"",
    debolezza:"",
    superPotere:""
  }

  submit(){
    console.log("form inviato: ", this.form);


    this.user.nome=this.form.value.user.nome;
    this.user.alterEgo=this.form.value.user.alterEgo;
    this.user.nemico=this.form.value.user.nemico;
    this.user.pianeta=this.form.value.user.pianeta;
    this.user.debolezza=this.form.value.user.debolezza;
    this.user.superPotere=this.form.value.user.superPotere;
    console.log("form", this.form.value.user)

    this.form.reset();
  }

}
