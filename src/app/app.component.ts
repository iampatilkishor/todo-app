import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { HttpService } from './http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ToDo List';

  todoList: Todo[] = [];
  newToDo: Todo;
  validTodo: boolean = true;

  constructor(public httpService: HttpService) { }

  ngOnInit () {
   this.getAllTodos();
  }

  getAllTodos = () => {
    this.httpService.getAllTodos().subscribe((results: Todo[]) => {
      this.todoList = results.reverse();
    });
  }

  newToDoChange = (event) => {
    this.validTodo = true;
    this.newToDo = event.target.value;
  }

  addToDo = (todo) => {
    const newToDo = new Todo(todo, false, new Date());
    this.validTodo = this.isValidToDo(newToDo);
    if (this.validTodo) {
      this.newToDo = null;
      this.insertProduct(newToDo);
    }
  }

  insertProduct = (newToDo) => {
    // .subscribe((results: Todo) => results);
    this.httpService.insertProduct(newToDo).subscribe((results: Todo) => {
      // results
      this.getAllTodos();
    });
  }

  isValidToDo = (todo:Todo) => {
  return todo.title.trim() ? true : false;
  }

  removeToDo = (event) => {
    this.httpService.deleteTodo(event.todo).subscribe(results => this.getAllTodos() );
  }
}
