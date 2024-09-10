import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private clientUrl = 'http://localhost:3000/client/auth';
  private currentRole: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.clientUrl}/login`, credentials, { responseType: 'text' });
  }

  setSession(token: string): void {
    this.saveToken(token);
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
    this.decodeToken();
  }

  decodeToken(): void {
    const token = this.getToken();
    if (token) {
      try {
        const decoded = jwtDecode(token);
        this.currentRole = decoded['role'];  // Supondo que o papel do usuário está no claim 'role'
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    }
  }

  getRole(): string | null {
    return this.currentRole;
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.currentRole = null;
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Método para redirecionar o usuário com base no papel
  handleRoleRedirect(): void {
    const userRole = this.getRole();

    if (userRole === 'ROLE_ADMIN') {
      this.router.navigate(['/admin/dashboard']);
    } else if (userRole === 'ROLE_USER') {
      this.router.navigate(['/cliente/painel']);
    }
  }
}
