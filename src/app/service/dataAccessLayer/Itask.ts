import { Observable } from "rxjs";
import { Task } from "src/app/model/task";

export interface TaskService {
  addTask(task: Task): Observable<Task>;
  getAllTask(): Observable<Task[]>;
  deleteTask(task: Task): Observable<Task>;
  editTask(task: Task): Observable<Task>;
}
