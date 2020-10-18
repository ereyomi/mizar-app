import { Component, OnInit } from '@angular/core';
// tslint:disable-next-line:typedef
import AOS from 'aos';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'mizar-app';
  ngOnInit(): void {
    AOS.init();
  }
}
