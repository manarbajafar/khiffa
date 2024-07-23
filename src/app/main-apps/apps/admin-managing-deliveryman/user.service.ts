import { Injectable } from '@angular/core';

interface User {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { id: 1, name: 'أحمد خالد', email: 'ahmad@example.com' },
    { id: 2, name: 'سعيد محمد', email: 'saeed@example.com' },
    { id: 3, name: 'سارة وليد', email: 'sara@example.com' },
    { id: 4, name: 'عمر أحمد', email: 'omar@example.com' },
    { id: 5, name: 'سارة', email: 'sarah@example.com' },
    { id: 1, name: 'أحمد خالد', email: 'ahmad@example.com' },
    { id: 2, name: 'سعيد محمد', email: 'saeed@example.com' },
    { id: 3, name: 'سارة وليد', email: 'sara@example.com' },
    { id: 4, name: 'عمر أحمد', email: 'omar@example.com' },
    { id: 5, name: 'سارة', email: 'sarah@example.com' },
  ];

  getUsers(): User[] {
    return this.users;
  }
}
