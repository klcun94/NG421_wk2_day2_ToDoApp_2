import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { ITodo } from '../interfaces/itodo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  todoList: ITodo[] = [];
  @Input() todo: ITodo;

  constructor(private todoService: TodoService) {}
  ngOnInit() {
    this.todoList = this.todoService.getTodos();
  }
  deleteToDo() {
    this.todoService.deleteTodo(this.todo);
  }
}
