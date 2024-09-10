import { Component, AfterViewInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { environment } from 'src/environments/environment';
import { MessageService } from 'primeng/api';

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
    private authService: AuthService,
    private messageService: MessageService  // Serviço para mostrar mensagens
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
    const userInfo = this.decodeJwtResponse(response.credential);
    this.authService.setSession(response.credential);  // Armazena o token JWT do Google
    this.authService.handleRoleRedirect();  // Redireciona com base no papel
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
        this.authService.saveToken(response);  // Armazena o token JWT retornado pela API
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Login realizado com sucesso!'});

        // Redireciona com base no papel
        setTimeout(() => {
          this.authService.handleRoleRedirect();
        }, 1500);  // Atraso para exibir a mensagem de sucesso antes de redirecionar
      },
      (error) => {
        if (error.status === 403) {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Email ou senha inválidos.'});
        } else {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao fazer login, tente novamente.'});
        }
      }
    );
  }

  createAccount() {
    this.router.navigate(['/auth/create-account']);
  }
}
