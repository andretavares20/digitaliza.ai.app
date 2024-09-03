import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/auth';
  private clientUrl = 'http://localhost:3000/client/auth';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.clientUrl}/login`, credentials, { responseType: 'text' });
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.router.navigate(['/auth/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('authToken');
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  handleLogin(credentials: { email: string; password: string }): void {
    this.login(credentials).subscribe(
      (response) => {
        this.saveToken(response.token);
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro ao fazer login', error);
      }
    );
  }
  
  setSession(token: string): void {
    this.saveToken(token);
  }
}
