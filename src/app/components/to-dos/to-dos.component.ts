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

  deleteTodo(todo: Todo) {
    //Remove from UI
    this.todos = this.todos.filter(t => t.id != todo.id);
    //Remove from server
    this.ts.deleteTodo(todo).subscribe();
  }

  addTodo(todo: Todo) {
    this.ts.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
