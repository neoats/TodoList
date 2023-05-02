import { Component } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TaskManagerService } from 'src/app/service/dataAccessLayer/dal.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';
  editTaskValue : string = '';
  constructor(private taskManager:TaskManagerService) { }
  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.taskManager.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }
  addTask() {
    this.taskObj.taskName = this.addTaskValue;
    this.taskManager.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    }, err => {
      alert(err);
    })
  }

  editTask() {
    this.taskObj.taskName = this.editTaskValue;
    this.taskManager.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, ()=> {
      alert("Failed to update task");
    })
  }

  deleteTask(etask: Task) {
    this.taskManager.deleteTask(etask).subscribe(res => {
      this.ngOnInit();
    }, err=> {
      alert("Failed to delete task");
    });
  }

  call(etask : Task) {
    this.taskObj = etask;
    this.editTaskValue = etask.taskName;
  }
}
