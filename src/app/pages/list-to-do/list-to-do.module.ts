import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListToDoRoutingModule } from './list-to-do-routing.module';
import { ListToDoComponent } from './list-to-do.component';
import { TaskComponent } from './components/task/task.component';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [ListToDoComponent, TaskComponent, NewTaskComponent],
  imports: [
    CommonModule,
    ListToDoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ListToDoModule { }
