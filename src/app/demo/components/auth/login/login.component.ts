import { Component, AfterViewInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';

declare const google: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    :host ::ng-deep .pi-eye,
    :host ::ng-deep .pi-eye-slash {
      transform:scale(1.6);
      margin-right: 1rem;
      color: var(--primary-color) !important;
    }
    .google-button {
      background-color: #db4437;
      border-color: #db4437;
    }
  `]
})
export class LoginComponent implements AfterViewInit {

  valCheck: string[] = ['remember'];
  email!: string;
  password!: string;

  constructor(
    public layoutService: LayoutService, 
    private router: Router,
    private authService: AuthService  // Injeção do serviço de autenticação
  ) {}

  ngAfterViewInit(): void {
    this.loadGoogleScript();
  }

  loadGoogleScript() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.onload = () => this.initializeGoogleSignIn();
    document.head.appendChild(script);
  }

  initializeGoogleSignIn() {
    google.accounts.id.initialize({
      client_id: environment.clientIdGoogle,
      callback: this.handleCredentialResponse.bind(this)
    });
    google.accounts.id.renderButton(
      document.getElementById('googleSignInButton'),
      { theme: 'outline', size: 'large', width: '100%' }
    );
  }

  handleCredentialResponse(response: any) {
    console.log('response', response);
    console.log('Encoded JWT ID token: ' + response.credential);
    const userInfo = this.decodeJwtResponse(response.credential);
    console.log('User Info:', userInfo);
    // Lógica adicional para lidar com as informações do usuário
    this.authService.setSession(response.credential);  // Armazena o token de sessão
    this.router.navigate(['/']);
  }

  decodeJwtResponse(token: string): any {
    return JSON.parse(atob(token.split('.')[1]));
  }

  login() {
    const credentials = {
      email: this.email,
      password: this.password
    };
  
    this.authService.login(credentials).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.authService.saveToken(response);  // Armazena o token recebido
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Login failed', error);
        // Exibir mensagem de erro ao usuário
      }
    );
  }
  

  createAccount() {
    this.router.navigate(['/auth/create-account']);
  }
}
