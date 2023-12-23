import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  codeplay = './../../../assets/icons/cp.png'

  finance_control = 'https://imgur.com/RDYWX4V.png'

  resume = 'https://i.imgur.com/30sx8Yt.png'
}
