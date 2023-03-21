import { CommonModule } from '@angular/common';
import { Component, SettableSignal } from '@angular/core';
import { TodoItemComponent } from './todo-item.component';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, TodoItemComponent],
  styles: [
    `
      .todo-list {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 16px;

        app-todo-item {
          min-width: 300px;
        }
      }
    `,
  ],
  template: `
    <div class="todo-list">
      <app-todo-item
        *ngFor="let todo of todos(); trackBy: todoTrackBy"
        [todo]="todo"
      >
      </app-todo-item>
    </div>
  `,
})
export class TodoListComponent {
  todos: SettableSignal<Todo[]> = this.todoService.todos;

  constructor(private readonly todoService: TodoService) {}

  todoTrackBy(_: number, todo: Todo) {
    return todo.id;
  }
}
