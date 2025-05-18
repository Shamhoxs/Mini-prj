import { Injectable } from '@angular/core';
import { ToDo } from '../models/To-Do';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {
  private tasks: ToDo[] = [];

  constructor() {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      this.tasks = JSON.parse(storedTasks);
    }
  }

  getTasks() {
    return [...this.tasks];
  }

  addTask(task: string) {
    const toDo: ToDo = { id: Date.now(), task, isDone: false }
    // this.tasks.unshift(toDo);   //insert item in start of array(top of list)
    this.tasks.push(toDo);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  toggleTask(id: number) {
    const task = this.tasks.find(t => t.id === id);
    if (task) {
      task.isDone = !task.isDone;
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(t => t.id !== id);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }
}
