import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListToDoComponent } from './list-to-do.component';



const routes: Routes = [
    {
        path: '',
        component: ListToDoComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ListToDoRoutingModule { }