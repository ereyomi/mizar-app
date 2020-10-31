import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit {
  title = 'WHO WE ARE';
  titleB = ' Our Core Value';
  constructor() { }

  ngOnInit(): void {
    console.log( 'here' );
  }

}
