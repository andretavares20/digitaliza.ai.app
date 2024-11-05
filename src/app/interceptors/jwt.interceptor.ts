import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../demo/components/auth/services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.authService.getToken();
    console.log('req: ', req);

    // Verifica se a requisição é para o login ou para assets (não precisa de token)
    if ( req.url.includes('assets/')) {
      // Prossiga sem adicionar o token
      return next.handle(req);
    }

    if (token) {

        console.log('token',token)
      // Clona a requisição e adiciona o cabeçalho Authorization para outras URLs
      const cloned = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });

      console.log('Clonando requisição com token:', cloned);
      return next.handle(cloned);
    } else {
      // Se não houver token, prossiga com a requisição original
      return next.handle(req);
    }
  }
}
