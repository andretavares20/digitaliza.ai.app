import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../admin/usuarios/services/user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss'],
  providers: [MessageService]
})
export class CreateAccountComponent {
  name!: string;
  username!: string;
  email!: string;
  password!: string;
  telephone!: string;

  usernameExists: boolean = false;
  isEmailValid: boolean = true;
  isPasswordStrong: boolean = true;
  isPhoneValid: boolean = true;

  // Variáveis para rastrear se o campo foi tocado
  usernameTouched: boolean = false;
  emailTouched: boolean = false;
  passwordTouched: boolean = false;
  telephoneTouched: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router,
    private messageService: MessageService
  ) { }

  isLoading: boolean = false;

  createAccount() {
    this.validatePassword();
    this.validateEmail();
    this.validateTelephone();
    this.checkUsername();

    if (!this.isFormValid()) {
      this.showError("Erro", "Por favor, corrija os erros antes de continuar.");
      return;
    }

    this.isLoading = true; // Ativa o loading

    const user = {
      name: this.name,
      username: this.username,
      email: this.email,
      password: this.password,
      telephone: this.telephone
    };

    this.userService.register(user).subscribe({
      next: (response) => {
        this.isLoading = false; // Desativa o loading
        console.log('Account created successfully', response);
        this.router.navigate(['/auth/confirmation'], { queryParams: { email: this.email } });
      },
      error: (error) => {
        this.isLoading = false; // Desativa o loading em caso de erro
        this.showError("Erro", "Erro ao criar a conta. Por favor, tente novamente.");
        console.error('Error creating account', error);
      }
    });
  }


  checkUsername() {
    this.usernameTouched = true;

    if (!this.username || this.username.trim() === '') {
      this.usernameExists = true;
      this.showError("Erro", "Nome de usuário não pode ser vazio.");
      return;
    }

    this.userService.checkUsernameAvailability(this.username).subscribe(
      (isAvailable) => {
        this.usernameExists = !isAvailable;
        if (this.usernameExists) {
          this.showError("Erro", "Nome de usuário já está em uso.");
        }
      },
      (error) => {
        this.showError("Erro", "Erro ao verificar a disponibilidade do nome de usuário.");
        console.error('Error checking username availability', error);
      }
    );
  }

  checkEmail() {
    this.emailTouched = true;

    if (!this.email || this.email.trim() === '') {
      this.isEmailValid = false;
      this.showError("Erro", "O email não pode ser vazio.");
      return;
    }

    this.userService.checkEmailAvailability(this.email).subscribe(
      (isAvailable) => {
        this.isEmailValid = isAvailable;
        if (!this.isEmailValid) {
          this.showError("Erro", "O email já está em uso.");
        }
      },
      (error) => {
        this.showError("Erro", "Erro ao verificar a disponibilidade do email.");
        console.error('Error checking email availability', error);
      }
    );
  }

  checkTelephone() {
    this.telephoneTouched = true;

    if (!this.telephone || this.telephone.trim() === '') {
      this.isPhoneValid = false;
      this.showError("Erro", "O telefone não pode ser vazio.");
      return;
    }

    this.userService.checkTelephoneAvailability(this.telephone).subscribe(
      (isAvailable) => {
        this.isPhoneValid = isAvailable;
        if (!this.isPhoneValid) {
          this.showError("Erro", "O telefone já está em uso.");
        }
      },
      (error) => {
        this.showError("Erro", "Erro ao verificar a disponibilidade do telefone.");
        console.error('Error checking telephone availability', error);
      }
    );
  }


  validateEmail() {
    this.emailTouched = true;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.isEmailValid = emailPattern.test(this.email);
    if (!this.isEmailValid) {
      this.showError("Erro", "Email inválido.");
    }
  }

  validatePassword() {
    this.passwordTouched = true;
    const strongPasswordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    this.isPasswordStrong = strongPasswordPattern.test(this.password);
    if (!this.isPasswordStrong) {
      this.showError("Erro", "Senha fraca. Deve ter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, números e caracteres especiais.");
    }
  }

  validateTelephone() {
    this.telephoneTouched = true;
    let formattedTelephone = this.telephone;

    if (this.telephone.length === 11) {
      formattedTelephone = `(${this.telephone.slice(0, 2)}) ${this.telephone.slice(2, 7)}-${this.telephone.slice(7)}`;
    }

    console.log(formattedTelephone);

    const phonePattern = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
    this.isPhoneValid = phonePattern.test(formattedTelephone);
    if (!this.isPhoneValid) {
      this.showError("Erro", "Telefone inválido. Use o formato (XX) XXXXX-XXXX.");
    }
  }


  isFormValid(): boolean {
    return !this.usernameExists && this.isEmailValid && this.isPasswordStrong && this.isPhoneValid;
  }


  showError(summary: string, detail: string) {
    this.messageService.add({ severity: 'error', summary: summary, detail: detail });
  }
}
