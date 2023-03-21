import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  getItem(key: string): Object | null {
    const value = localStorage.getItem(key);
    if (value) return JSON.parse(value);
    return null;
  }

  setItem(key: string, value: Object) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
