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
  description1 = `Formado em Sistemas de Informação`
  description2 = `Sou um desenvolvedor muito apaixonado por tecnologia e programação.
  Se você tem um ótimo projeto que precisa de habilidades incríveis e muita organização nos processos,
  eu sou a pessoa certa.`

  link_instagram = "https://www.instagram.com/e.duus?igsh=YjJ0NGttaWZicGJj"
  link_github = "https://github.com/dududueedu"
  link_facebook = "https://www.facebook.com/profile.php?id=100005503066960&mibextid=ZbWKwL"
  link_linkedin = "https://www.linkedin.com/in/dududueedu"
}
