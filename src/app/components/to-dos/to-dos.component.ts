import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../interfaces/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  todos: Todo[];


  constructor(private ts: TodoService) { }

  ngOnInit() {
    this.ts.getTodos().subscribe(todos => {
      this.todos = todos;
    })
  }

}
