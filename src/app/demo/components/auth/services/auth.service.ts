import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.apiUrl}/api/auth`;
  private clientUrl = `${environment.apiUrl}/client/auth`;
  private currentRole: string | null = null;
  private currentUserId: string | null = null; // Adicionado campo para armazenar o userId

  constructor(private http: HttpClient, private router: Router) {
    this.initializeUserFromToken();  // Garante que o token seja decodificado ao iniciar o serviço
  }

  login(credentials: { email: string; password: string }): Observable<any> {
    return this.http.post(`${this.clientUrl}/login`, credentials, { responseType: 'text' }).pipe(
      tap((response: any) => {
        if (response) {
          this.saveToken(response);  // Salva o token assim que o login for bem-sucedido
          console.log('Token salvo:', response);
        }
      })
    );
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
        const decoded: any = jwtDecode(token);
        this.currentRole = decoded['role'];  // Supondo que o papel do usuário está no claim 'role'
        this.currentUserId = decoded['userId']; // Supondo que o ID do usuário está no claim 'userId'
        console.log('Decoded token:', decoded); // Verifica o conteúdo decodificado do token
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    }
  }

  // Função que verifica se há um token no localStorage e decodifica-o
  initializeUserFromToken(): void {
    const token = this.getToken();
    if (token) {
      this.decodeToken();  // Decodifica o token se ele estiver presente
    }
  }

  getRole(): string | null {
    return this.currentRole;
  }

  getUserId(): string | null {
    return this.currentUserId; // Método para obter o userId do token decodificado
  }

  logout(): void {
    localStorage.removeItem('authToken');
    this.currentRole = null;
    this.currentUserId = null; // Reseta o userId durante o logout
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

  // auth.service.ts

  verifyOrCreateGoogleUser(googleToken: string): Observable<any> {
    return this.http.post(`${this.clientUrl}/google-login`, { token: googleToken }, { responseType: 'text' }).pipe(
      tap((response: any) => {
        if (response) {
          this.saveToken(response);  // Salva o token JWT retornado pela API
        }
      })
    );
  }

}
