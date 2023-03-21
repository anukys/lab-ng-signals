import { Component } from '@angular/core';
import { TodoInputComponent } from './components/todo-input.component';
import { TodoListComponent } from './components/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TodoInputComponent, TodoListComponent],
  styles: [
    `
      .app {
        .nav-bar {
          background-color: #222;
          height: 50px;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .nav-bar__logo {
          font-size: 1.5em;
        }

        .content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 16px;
        }
      }
    `,
  ],
  template: `
    <div class="app">
      <div class="nav-bar">
        <div class="nav-bar__logo">
          <h1>TODOS</h1>
        </div>
      </div>
      <div class="content">
        <app-todo-input></app-todo-input>
        <app-todo-list></app-todo-list>
      </div>
    </div>
  `,
})
export class AppComponent {}
