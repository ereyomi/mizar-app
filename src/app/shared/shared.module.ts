import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';



@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ NavBarComponent, FooterComponent ],
  exports: [ NavBarComponent, FooterComponent ],
} )
export class SharedModule { }
