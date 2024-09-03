import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/demo/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:3000/api/users';  // Substitua pela URL correta do seu backend
  private clientUrl = 'http://localhost:3000/client/users';  // Substitua pela URL correta do seu backend

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}`);
  }

  updateUserStatus(userId: number, status: string): Observable<any> {
    return this.http.put(`${this.clientUrl}/${userId}/status`, { status });
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.clientUrl}`, user);
  }

  checkUsernameAvailability(username: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.clientUrl}/check-username?username=${username}`);
  }

  checkEmailAvailability(email: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.clientUrl}/check-email?email=${email}`);
  }

  checkTelephoneAvailability(telephone: string): Observable<boolean> {
    return this.http.get<boolean>(`${this.clientUrl}/check-telephone?telephone=${telephone}`);
  }
}
