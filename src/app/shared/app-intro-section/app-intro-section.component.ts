import { Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-app-intro-section',
  templateUrl: './app-intro-section.component.html',
  styleUrls: [ './app-intro-section.component.scss' ]
} )
export class AppIntroSectionComponent implements OnInit {
  introBackground = 'url("assets/assets-mizar/mizar-intro-b.jpg")';
  constructor() { }

  ngOnInit(): void {
  }

}
