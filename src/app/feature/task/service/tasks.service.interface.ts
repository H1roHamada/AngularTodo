import { Observable } from "rxjs";

export interface ITasksService {
    test(): Observable<any>;
  }