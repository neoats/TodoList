import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Task } from 'src/app/model/task';
import { LocalStorageService } from './localstorage.service';
import { TaskService } from '../Itask';

@Injectable({
  providedIn: 'root',
})
export class LocalCrudService implements TaskService {
  private taskArr: Task[];

  constructor(private localStorageService: LocalStorageService) {
    this.taskArr = this.localStorageService.getData('tasks') ?? [];
  }

  addTask(task: Task): Observable<Task> {
    this.taskArr.push(task);
    this.localStorageService.setData('tasks', this.taskArr);
    return of(task);
  }

  getAllTask(): Observable<Task[]> {
    return of(this.taskArr);
  }

  deleteTask(task: Task): Observable<Task> {
    this.taskArr = this.taskArr.filter((t) => t.id !== task.id);
    this.localStorageService.setData('tasks', this.taskArr);
    return of(task);
  }

  editTask(task: Task): Observable<Task> {
    const updatedTask = { ...task };
    this.taskArr = this.taskArr.map((t) => (t.id === task.id ? updatedTask : t));
    this.localStorageService.setData('tasks', this.taskArr);
    return of(updatedTask);
  }

}
