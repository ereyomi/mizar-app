import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, } from '@angular/core';
import * as  _ from 'lodash';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild('navMenu', { static: false }) navMenu: ElementRef;
  @ViewChild('mainHeader', { static: false }) mainHeader: ElementRef;
  buttonToggle = false;
  navHeight: any;

  // tslint:disable-next-line:typedef
  @HostListener('window:scroll', ['$event']) navScrollE = _.debounce((e) => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      this.togglePositionFixed();
    } else {
      this.togglePositionFixed(false);
    }
  }, 100);
  constructor() {
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.navHeight = `${ this.navMenu.nativeElement.scrollHeight }px`;
  }

  ngOnInit(): void { }


  toggle(): void {
    this.buttonToggle = !this.buttonToggle;
    this.toggleNav();
  }

  toggleNav(): void {
    if (!this.navMenu.nativeElement.classList.contains('showNav')) {
      this.navMenu.nativeElement.classList.add('showNav');
      this.navMenu.nativeElement.style.height = this.navHeight;
    } else {
      this.navMenu.nativeElement.classList.remove('showNav');
      this.navMenu.nativeElement.style.height = '0px';
    }
  }
  mediaJavaScript(): void {
    const mql = window.matchMedia('(max-width: 800px)');
    if (mql) {
      this.navMenu.nativeElement.style.height = this.navHeight;
    }
  }
  togglePositionFixed(status: boolean = true): void {
    if (status) {
      this.mainHeader.nativeElement.classList.add('position-fixed');
    } else {
      this.mainHeader.nativeElement.classList.remove('position-fixed');
    }
  }

}
