import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationTestComponent } from './application-test.component';




const routes: Routes = [
    {
        path: '',
        component: ApplicationTestComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ApplicationTestRoutingModule { }