import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../demo/components/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: any): boolean {
    const userRole = this.authService.getRole();

    // Verifica se o usuário está logado
    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      return false;
    }

    // Verifica se o usuário tem a permissão necessária para acessar a rota
    if (route.data['role'] && route.data['role'].indexOf(userRole) === -1) {
      this.router.navigate(['/auth/forbidden']);
      return false;
    }

    return true;
  }
}
