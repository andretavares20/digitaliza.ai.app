import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from 'src/app/demo/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = `${environment.apiUrl}/admin/users`;  // Substitua pela URL correta do seu backend
  private clientUrl = `${environment.apiUrl}/client/users`;  // Substitua pela URL correta do seu backend

  constructor(private http: HttpClient, private authService: AuthService) { }

  private getHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    return new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`  // Inclui o token no cabeçalho de autorização
    });
  }

  getUserById(userId:number): Observable<User> {
    const headers = this.getHeaders();
    return this.http.get<User>(`${this.clientUrl}/${userId}`)
  }

  getUsers(): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http.get<any[]>(`${this.apiUrl}`, { headers });
  }

  updateUserStatus(userId: number, status: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.clientUrl}/${userId}/status`, { status }, { headers });
  }

  updateUserRole(userId: number, role: string): Observable<any> {
    const headers = this.getHeaders();
    return this.http.put(`${this.apiUrl}/${userId}/role`, { role }, { headers });
  }

  register(user: User): Observable<User> {
    const headers = this.getHeaders();
    return this.http.post<User>(`${this.clientUrl}`, user, { headers });
  }

  checkUsernameAvailability(username: string): Observable<boolean> {
    const headers = this.getHeaders();
    return this.http.get<boolean>(`${this.clientUrl}/check-username?username=${username}`, { headers });
  }

  checkEmailAvailability(email: string): Observable<boolean> {
    const headers = this.getHeaders();
    return this.http.get<boolean>(`${this.clientUrl}/check-email?email=${email}`, { headers });
  }

  checkTelephoneAvailability(telephone: string): Observable<boolean> {
    const headers = this.getHeaders();
    return this.http.get<boolean>(`${this.clientUrl}/check-telephone?telephone=${telephone}`, { headers });
  }

  confirmUser(email: string, code: string): Observable<any> {
    return this.http.post(`${this.clientUrl}/confirm?email=${email}&code=${code}`, {}, { responseType: 'text' });
  }


  resendConfirmationCode(email: string): Observable<any> {
    return this.http.post(`${this.clientUrl}/resend-code?email=${email}`, { },{ responseType: 'text' });
  }
}
