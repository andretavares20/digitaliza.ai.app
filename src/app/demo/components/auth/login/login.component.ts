import { Component, AfterViewInit } from '@angular/core';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

declare const google: any; // Adicione esta linha

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

  password!: string;

  constructor(public layoutService: LayoutService) { }

  ngAfterViewInit(): void {
    this.initializeGoogleSignIn();
  }

  initializeGoogleSignIn() {
    const googleScriptLoaded = () => {
      google.accounts.id.initialize({
        client_id: '747224587241-dg0ni2i6mccdeb45jgtqr2u8jk9sqqvi.apps.googleusercontent.com',
        callback: this.handleCredentialResponse.bind(this)
      });
      google.accounts.id.renderButton(
        document.getElementById('googleSignInButton'),
        { theme: 'outline', size: 'large' }
      );
    };

    if ((window as any).google) {
      googleScriptLoaded();
    } else {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.onload = googleScriptLoaded;
      document.head.appendChild(script);
    }
  }

  handleCredentialResponse(response: any) {
    console.log('response',response)
    console.log('Encoded JWT ID token: ' + response.credential);
    // Lógica adicional para lidar com o token de ID JWT
  }
}
