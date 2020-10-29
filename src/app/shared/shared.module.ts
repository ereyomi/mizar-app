import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppIntroSectionComponent } from './app-intro-section/app-intro-section.component';



@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ NavBarComponent, FooterComponent, AppIntroSectionComponent ],
  exports: [ NavBarComponent, FooterComponent, AppIntroSectionComponent ],
} )
export class SharedModule { }
