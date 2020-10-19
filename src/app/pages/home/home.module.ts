import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.modules';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule( {
  declarations: [ HomeComponent ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
} )
export class HomeModule { }
