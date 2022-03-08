import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Task } from 'src/app/shared/interfaces';
import { AppStorage } from 'src/app/shared/services/app-storage';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {

  user: any = {}
  @Input() task: Task;
  @Output() removeTask = new EventEmitter<{ taskId: string }>();
  @Output() updateTask = new EventEmitter<{ taskId: string, status: boolean }>();
  @ViewChild("checkbox") checkbox: ElementRef = {} as ElementRef;


  constructor(
    private jwtHelper: JwtHelperService,
    private storage: AppStorage
  ) {
    this.task = {
      id: '',
      text: '',
      status: false,
    }
    this.user = this.jwtHelper.decodeToken(this.storage.get('jwt'));
  }

  ngOnInit(): void {
  }

  remove(id: string) {
    if (this.canRemove())
      this.removeTask.emit({
        taskId: id
      })
  }

  update(id: string) {
    this.updateTask.emit({
      taskId: id,
      status: this.checkbox.nativeElement.checked
    });
  }

  canRemove() {
    return this.user.rol !== 'RE';
  }

}
