import { Injectable } from "@angular/core";
import { catchError, Observable, tap } from "rxjs";
import { Task } from "src/app/model/task";
import { RestCrudService } from "./json-server/restcrud.service";
import { LocalCrudService } from "./localstorage/localcrud.service";

@Injectable({
  providedIn: 'root'
})
export class TaskManagerService {
  constructor(
    private restcrudservice: RestCrudService,
    private localcrud: LocalCrudService
  ) {}

  addTask(task: Task): Observable<Task> {
    return this.restcrudservice.addTask(task);
  }

  getAllTask(): Observable<Task[]> {
    return this.restcrudservice.getAllTask();
  }

  deleteTask(task: Task): Observable<Task> {
    return this.restcrudservice.deleteTask(task);
  }

  editTask(task: Task): Observable<Task> {
    return this.restcrudservice.editTask(task);
  }
}
