import { Component } from '@angular/core';
import { Todo } from './todo';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ToDo List';

  todoList: Todo[] = [];
  newToDo: Todo;
  validTodo: boolean = true;

  newToDoChange = (event) => {
    this.validTodo = true;
    this.newToDo = event.target.value;
  }

  addToDo = (todo) => {
    const newToDo = new Todo(todo);
    this.validTodo = this.isValidToDo(newToDo);
    if(this.validTodo){
      this.newToDo = '';
      this.todoList.unshift(newToDo);
    }
  }

  isValidToDo = (todo:Todo) => {
  return todo.title.trim() ? true : false;
  }

  removeToDo = (todo, todoIndex) => {
    this.todoList.splice(todoIndex, 1);
  }
}
