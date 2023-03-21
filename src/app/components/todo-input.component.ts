import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { Todo } from '../models/todo';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [ReactiveFormsModule],
  styles: [
    `
      .todo-input {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 16px;
        max-width: 600px;
        margin: 0 auto;

        label {
          display: none;
        }

        input {
          width: 100%;
          font-size: 1.5em;
          padding: 8px;
          border: none;
          border-bottom: 2px solid #ccc;
          text-align: center;
        }
        input:focus {
          outline: none;
          border-bottom-color: dodgerblue;
        }
      }
    `,
  ],
  template: `
    <div class="todo-input">
      <label for="title" sr-only="hidden">Title</label>
      <input
        id="title"
        type="text"
        placeholder="What needs to be done?"
        (keyup.enter)="handleEnter()"
        [formControl]="todoTitle"
      />
    </div>
  `,
})
export class TodoInputComponent {
  todoTitle = new FormControl<string>('');

  constructor(private readonly todoService: TodoService) {}

  handleEnter() {
    if (this.todoTitle.value) {
      const id = Date.now();
      const newTodo = new Todo(id, this.todoTitle.value, false);
      this.todoService.add(newTodo);
      this.todoTitle.setValue('');
    }
  }
}
