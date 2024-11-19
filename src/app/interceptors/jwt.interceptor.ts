import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../demo/components/auth/services/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api'; // Supondo que você está usando PrimeNG

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService // Service para exibir mensagem de aviso
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();

    // Ignorar assets e login que não precisam de token
    if (req.url.includes('assets/')) {
      return next.handle(req);
    }

    let clonedRequest = req;
    if (token) {
      clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    }

    return next.handle(clonedRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log('error: ',error.error)
        if ((error.status === 403 || error.status === 401) && error.error!='Conta não ativada. Por favor, ative sua conta.') {
          // Token expirado ou inválido
          this.authService.logout(); // Executa o logout e limpa o token

          // Mostra a mensagem de expiração
          this.messageService.add({
            severity: 'warn',
            summary: 'Sessão Expirada',
            detail: 'Sua sessão expirou. Por favor, faça login novamente.'
          });

          // Redireciona para a tela de login
          this.router.navigate(['/auth/login']);
        }
        return throwError(() => error);
      })
    );
  }
}
