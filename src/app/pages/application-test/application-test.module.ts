import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationTestComponent } from './application-test.component';
import { ApplicationTestRoutingModule } from './application-test-routing.module';



@NgModule({
  declarations: [ApplicationTestComponent],
  imports: [
    CommonModule,
    ApplicationTestRoutingModule
  ]
})
export class ApplicationTestModule { }
