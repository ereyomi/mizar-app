import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { debounce } from 'lodash';
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

  screenWidth = 0;
  desktopScreen = 768;

  // tslint:disable-next-line:typedef
  @HostListener('window:scroll', ['$event']) navScrollE = debounce((e) => {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
      this.togglePositionFixed();
    } else {
      this.togglePositionFixed(false);
    }
  }, 100);

  @HostListener('window:resize', ['$event']) appResize = debounce(e => {
    this.screenWidth = e.target.innerWidth;
  }, 200);
  constructor(private route: Router) {
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.screenWidth = window.innerWidth;
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
      this.mainHeader.nativeElement.classList.add('my-header-fixed');
    } else {
      this.mainHeader.nativeElement.classList.remove('my-header-fixed');
    }
  }
  routeTo(rout: string): void {
    if (this.screenWidth < this.desktopScreen) {
      this.toggle();
    }
    this.route.navigate([rout]);
  }
}
