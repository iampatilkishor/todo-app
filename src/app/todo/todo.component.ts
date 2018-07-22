import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input() toDo: Todo;
  @Input() index: number;
  @Output() removeToDo: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  remove = () => {
    this.removeToDo.emit();
  }

}
