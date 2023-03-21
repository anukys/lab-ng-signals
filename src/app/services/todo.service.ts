import {
  Effect,
  effect,
  Injectable,
  SettableSignal,
  signal,
} from '@angular/core';
import { StorageService } from './storage.service';
import { Todo } from '../models/todo';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private readonly _entityName = 'todos';

  todos: SettableSignal<Todo[]> = signal(
    (this.storageService.getItem(this._entityName) as Todo[]) || []
  );

  logger: Effect = effect(() => console.table(this.todos()));

  storage: Effect = effect(() =>
    this.storageService.setItem(this._entityName, this.todos())
  );

  constructor(private readonly storageService: StorageService) {}

  add(newTodo: Todo) {
    this.todos.set([newTodo, ...this.todos()]);
  }

  remove(id: number) {
    this.todos.set(this.todos().filter((t) => t.id !== id));
  }

  toggle(id: number) {
    this.todos.set(
      this.todos().map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }
}
