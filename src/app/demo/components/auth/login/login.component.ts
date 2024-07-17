import { Component, AfterViewInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { environment } from 'src/environments/environment';
import { jwtDecode } from 'jwt-decode'; // Corrija o import
import { Router } from '@angular/router'; // Importe o Router

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

  constructor(public layoutService: LayoutService, private router: Router) { }

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
  }

  decodeJwtResponse(token: string): any {
    return jwtDecode(token);
  }

  login() {
    console.log('Login with:');
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    // Lógica adicional de autenticação pode ser adicionada aqui
  }

  createAccount() {
    this.router.navigate(['/auth/create-account']);
  }
}
