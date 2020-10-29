import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoWeAreComponent } from './who-we-are.component';
import { WhoWeAreRoutingModule } from './who-we-are.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule( {
  declarations: [ WhoWeAreComponent ],
  imports: [
    CommonModule,
    WhoWeAreRoutingModule,
    SharedModule,
  ]
} )
export class WhoWeAreModule { }
