import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../demo/components/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const role = this.authService.getRole();

    if (role === 'ROLE_ADMIN') {
      return true; // Usuário ADMIN pode acessar
    } else if (role === 'ROLE_USER') {
      // Usuário comum (USER) pode acessar
      this.router.navigate(['/cliente/painel']);
      return false;
    } else {
      // Redirecionar para login se não tiver um papel válido
      this.router.navigate(['/auth/login']);
      return false;
    }
  }
}
