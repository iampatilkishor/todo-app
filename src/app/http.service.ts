import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  insertProduct = (newToDo: Todo) => {
    return this.http.post('/todo', newToDo)
  }

  deleteTodo = (todo) => {
    const header = this.headers;
    const options = { headers: this.headers , body : todo };
    const url = '/todo';
    return this.http.delete(url, options);
  }

  getAllTodos = () => {
    return this.http.get('/todo');
  }

}
