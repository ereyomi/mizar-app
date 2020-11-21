import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { AppIntroSectionComponent } from './app-intro-section/app-intro-section.component';
import { MilestoneComponent } from './milestone/milestone.component';



@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [ NavBarComponent, FooterComponent, AppIntroSectionComponent, MilestoneComponent ],
  exports: [NavBarComponent, FooterComponent, AppIntroSectionComponent, MilestoneComponent ],
} )
export class SharedModule { }
