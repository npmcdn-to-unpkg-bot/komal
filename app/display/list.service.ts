import { VARIABLE } from '../variable';
//import { DATA } from '../data';
import { Injectable } from '@angular/core';
//import {Todo} from '../todo-data/todo';
 import {Http, Response} from '@angular/http';
 import {Observable}     from 'rxjs/Observable';
 import 'rxjs/add/operator/map'
 import 'rxjs/add/operator/catch';
 import 'rxjs/add/observable/throw';


@Injectable()
export class ListService {
  private todos_Url = '/app/todo.json';
     errorMessage: any;
     constructor(private http: Http) {
         
     }
   getLists(): Observable<VARIABLE[]>{
         return this.http.get(this.todos_Url)
             .map(this._extractData)
             .catch(this._handleError);
     }
 
     private _extractData(res: Response) {
         if (res.status < 200 || res.status >= 300) {
             throw new Error('Bad response status: ' + res.status);
         }
         let body = res.json();
         return body || [];
     }
     private _handleError(error: any) {
         let errMsg = error.message || 'Server error';
         return Observable.throw(errMsg);
     }


  getList(id: number) {
    return this.getLists()
               .map(lists => lists.filter(list => list.id === id)[0]);
  }
   markTodo(complete: any){
         
         return this.getLists().map(lists => lists.filter(list => list.complete===complete)[0]); 
     }
}