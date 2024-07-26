import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockUserService {
  private mockUsers = [
    { id: 1, name: 'João Silva', email: 'joao@example.com', role: 'Administrador', status: 'Ativo' },
    { id: 2, name: 'Maria Oliveira', email: 'maria@example.com', role: 'Usuário', status: 'Inativo' },
    { id: 3, name: 'Pedro Sousa', email: 'pedro@example.com', role: 'Usuário', status: 'Ativo' },
    // Adicione mais usuários conforme necessário
  ];

  getUsers(): Observable<any[]> {
    return of(this.mockUsers);
  }

  updateUserStatus(userId: number, status: string): Observable<any> {
    const user = this.mockUsers.find(user => user.id === userId);
    if (user) {
      user.status = status;
    }
    return of(user);
  }
}
