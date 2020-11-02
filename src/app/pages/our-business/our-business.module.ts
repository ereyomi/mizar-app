import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurBusinessComponent } from './our-business.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OurBusinessRoutingModule } from './our-business.routing.modules';



@NgModule({
  declarations: [OurBusinessComponent],
  imports: [
    CommonModule,
    OurBusinessRoutingModule,
    SharedModule,
  ]
})
export class OurBusinessModule { }
