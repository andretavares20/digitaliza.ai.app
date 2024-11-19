import { Component } from '@angular/core';
import { UserService } from '../../admin/usuarios/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {
  email: string = '';
  code: string = '';

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.email = this.route.snapshot.queryParamMap.get('email') || '';
  }

  confirmCode() {
    console.log('Enviando email e código para confirmação:', this.email, this.code);
    console.log(1)
    this.userService.confirmUser(this.email, this.code).subscribe({
      next: (response) => {
        console.log(2)
        console.log('Resposta da confirmação:', response);
        console.log(3)
        alert('Conta ativada com sucesso!');
        console.log(3)
        this.router.navigate(['/auth/login']); // Redireciona para login após confirmação
        console.log(4)
      },
      error: (err) => {
        console.error('Erro na confirmação:', err);
        alert('Código inválido. Tente novamente.');
      }
    });
  }

  isLoading: boolean = false;

  resendCode() {
    this.isLoading = true; // Ativa o loading

    this.userService.resendConfirmationCode(this.email).subscribe({
      next: () => {
        this.isLoading = false; // Desativa o loading
        alert('Código reenviado para o seu email.');
      },
      error: () => {
        this.isLoading = false; // Desativa o loading em caso de erro
        alert('Erro ao reenviar o código.');
      }
    });
}

}
