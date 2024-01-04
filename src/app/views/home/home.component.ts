import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  office = `ANALISTA DE SISTEMAS`
  description1 = `Gosto de programar e sou bastante
  organizado.`
  description2 = `Sou um desenvolvedor muito apaixonado por tecnologia e programação.
  Se você tem um ótimo projeto que precisa de habilidades incríveis, eu sou a pessoa certa.`

}
