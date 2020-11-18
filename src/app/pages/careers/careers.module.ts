import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CareersComponent } from './careers.component';
import { ContactRoutingModule } from './careers-routing-module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CareersComponent],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule,
  ],
})
export class CareersModule { }
