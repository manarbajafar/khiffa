import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AUTH } from 'src/app/constant/routes';
import { ImpApiService } from 'src/app/services/imp-api.service';

export interface User {
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

 //just for test
// this.impApiService.get(AUTH.users).subscribe(data => {
// console.log(data)
// })


constructor(private http: HttpClient, private impApiService: ImpApiService ) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(AUTH.users);
}

}
