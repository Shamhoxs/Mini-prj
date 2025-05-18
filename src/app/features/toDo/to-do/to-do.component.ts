import { Component, OnInit } from '@angular/core';
import { ToDoService } from '../../../core/services/to-do.service';
import { ToDo } from '../../../core/models/To-Do';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss'],
  standalone: false
})
export class ToDoComponent implements OnInit {
  newTodoTitle: string = '';
  todos: ToDo[] = [];

  constructor(private todoService: ToDoService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  addTodo(): void {
    if (this.newTodoTitle.trim()) {
      this.todoService.addTask(this.newTodoTitle);
      this.newTodoTitle = '';
      this.loadTodos();
    }
  }

  toggleTodo(id: number): void {
    this.todoService.toggleTask(id);
    this.loadTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTask(id);
    this.loadTodos();
  }

  private loadTodos(): void {
    this.todos = this.todoService.getTasks();
  }
}
