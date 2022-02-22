import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  setString(key: string, value: string): void {
    localStorage.setItem(key,value);
  }
  
  hasKey(key: string):boolean {
    return !!localStorage.getItem(key);
  }

  getString(key: string): string | null {
    return localStorage.getItem(key);
  }

  remove(key: string): void {
    localStorage.removeItem(key);
  }

  setObject(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getObject(key: string): string {
    return JSON.parse(JSON.stringify(localStorage.getItem(key)));
  }
  
  clear(): void {
    localStorage.clear();
  }

}
