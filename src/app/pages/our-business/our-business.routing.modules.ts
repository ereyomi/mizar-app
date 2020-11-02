import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OurBusinessComponent } from './our-business.component';

const routes: Routes = [
    {
        path: '',
        component: OurBusinessComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class OurBusinessRoutingModule { }
