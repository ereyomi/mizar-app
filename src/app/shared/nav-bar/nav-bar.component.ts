import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, } from '@angular/core';

@Component( {
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: [ './nav-bar.component.scss' ]
} )
export class NavBarComponent implements OnInit, AfterViewInit {
  @ViewChild( 'navMenu', { static: false } ) navMenu: ElementRef;
  buttonToggle = false;
  navHeight: any;
  constructor() {
    // this.navHeight = this.navMenu.nativeElement.scrollHeight
  }

  // tslint:disable-next-line:typedef
  ngAfterViewInit() {
    this.navHeight = `${ this.navMenu.nativeElement.scrollHeight }px`;
  }

  ngOnInit(): void {
  }


  toggle(): void {
    this.buttonToggle = !this.buttonToggle;
    this.toggleNav();
  }

  toggleNav(): void {
    if ( !this.navMenu.nativeElement.classList.contains( 'showNav' ) ) {
      this.navMenu.nativeElement.classList.add( 'showNav' );
      this.navMenu.nativeElement.style.height = this.navHeight;
      console.log( 'hmm' );
    } else {
      this.navMenu.nativeElement.classList.remove( 'showNav' );
      this.navMenu.nativeElement.style.height = '0px';
      console.log( 'ywetyw' );
    }
  }

}
