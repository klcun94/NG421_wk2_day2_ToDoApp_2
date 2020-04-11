import { Injectable } from '@angular/core';
import { ITodo } from '../interfaces/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todoList: ITodo[] = [];
  todoId: number;
  todoTitle: string;
  description: string;

  constructor() { }

  addTodo() {
    this.todoList.push({
      id: this.todoId,
      title: this.todoTitle,
      description: ''
    });
    this.todoTitle = '';
    this.todoId++;
  }
  deleteTodo(todo: ITodo) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  getTodo() {
    return this.todoList;
  }
}
