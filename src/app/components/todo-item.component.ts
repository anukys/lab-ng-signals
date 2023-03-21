import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [CommonModule],
  styles: [
    `
      .todo-list__item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        max-width: 500px;
        padding: 8px;
        border-bottom: 1px solid #ccc;

        input {
          width: 24px;
          height: 24px;
          margin-right: 8px;
        }
        label {
          font-size: 1.2em;
          flex: 1;
        }
        button {
          font-size: 1.2em;
          background-color: transparent;
          border: none;
          cursor: pointer;
        }
        button:hover {
          color: dodgerblue;
        }
        button:focus {
          outline: none;
        }
      }

      .todo-list__item--done label {
        text-decoration: line-through;
        color: #ccc;
      }
      .todo-list__item--done input {
        cursor: default;
      }
    `,
  ],
  template: `
    <div
      class="todo-list__item"
      [ngClass]="{ 'todo-list__item--done': todo.done }"
    >
      <input
        type="checkbox"
        [checked]="todo.done"
        (click)="toggleCheck(todo.id)"
      />
      <label>
        {{ todo.text }}
      </label>
      <button (click)="handleDelete(todo.id)">×</button>
    </div>
  `,
})
export class TodoItemComponent {
  @Input()
  todo!: Todo;

  constructor(private readonly todoService: TodoService) {}

  toggleCheck(id: number) {
    this.todoService.toggle(id);
  }

  handleDelete(id: number) {
    this.todoService.remove(this.todo.id);
  }
}
