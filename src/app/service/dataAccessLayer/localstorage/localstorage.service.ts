import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  private localStorage: Record<string, any> = {};
  tasks: any[] = [];

  constructor() {
    const data = localStorage.getItem('data');
    if (data !== null) {
      this.localStorage = JSON.parse(data);
    }
  }

  getData(key: string): any {
    const data = this.localStorage[key];
    return Array.isArray(data) ? data : [];
  }

  setData(key: string, value: any): void {
    this.localStorage[key] = value;
    localStorage.setItem('data', JSON.stringify(this.localStorage));
  }

  clearData(): void {
    localStorage.removeItem('data');
    this.localStorage = {};
  }
}
