import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Task } from 'src/app/shared/interfaces';
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  @Output() addTask = new EventEmitter<{ task: Task }>();

  taskForm: FormGroup = new FormGroup({
    text: new FormControl('', Validators.required),
  });

  constructor() { }

  ngOnInit(): void {
  }

  newTask() {
    if (this.taskForm.valid) {
      let task = {
        id: this.generateId(),
        text: this.taskForm.get('text')?.value,
        status: false
      };
      this.addTask.emit({ task });
      this.taskForm.reset();
    }
  }

  generateId() {
    return uuidv4();
  }

}
