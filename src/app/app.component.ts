import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { ActivatedRoute, Router } from '@angular/router';
import { TitleService } from './core/title/title.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private titleService: TitleService, private router: Router, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.titleService.handleNavigationTitle().subscribe((_v) => {});
    AOS.init();
  }
}
