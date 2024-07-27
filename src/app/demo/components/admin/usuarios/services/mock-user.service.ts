import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockUserService {

  private users = [
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', role: 'User', status: 'Ativo' },
    { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', role: 'Admin', status: 'Inativo' },
    // Adicione mais usuários conforme necessário
  ];

  constructor() { }

  getUsers(): Observable<any[]> {
    return of(this.users);
  }

  updateUserStatus(userId: number, newStatus: string): Observable<any> {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.status = newStatus;
    }
    return of(user);
  }

  updateUserRole(userId: number, newRole: string): Observable<any> {
    const user = this.users.find(u => u.id === userId);
    if (user) {
      user.role = newRole;
    }
    return of(user);
  }
}
