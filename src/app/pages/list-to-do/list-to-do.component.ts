import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/shared/interfaces';
import { AppStorage } from 'src/app/shared/services/app-storage';



@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.scss']
})
export class ListToDoComponent implements OnInit {

  title = 'To do List';
  listOfTask: Task[] = [];

  constructor(private storage: AppStorage) {
  }

  ngOnInit(): void {
    this.getList();
  }

  getList() {
    let data = this.storage.get("listOfTask");
    if (data !== null) {
      this.listOfTask = data;
    }
  }

  updateList() {
    this.storage.set("listOfTask", JSON.stringify(this.listOfTask), false);
  }

  updateTask(event: any) {
    let idx = this.getIndexInList(this.getItemInList(event.taskId));
    this.listOfTask[idx]["status"] = event.status;
    this.updateList();
  }

  addTask(event: any) {
    this.listOfTask.push({ ...event.task });
    this.updateList();
  }

  removeTask(event: any) {
    this.listOfTask = this.listOfTask.filter(task => task.id !== event.taskId);
    this.updateList();
  }


  getItemInList(id: string) {
    return this.listOfTask.filter((item: Task) => item.id === id)[0];
  }

  getIndexInList(item: Task) {
    return this.listOfTask.indexOf(item);
  }
}
