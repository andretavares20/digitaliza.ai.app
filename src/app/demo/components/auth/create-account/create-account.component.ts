import { Component } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {
  email!: string;
  password!: string;
  name!: string;
  phone!: string;
  valCheck: string[] = ['remember'];

  createAccount() {
    console.log('Creating account with:');
    console.log('Name:', this.name);
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    console.log('Phone:', this.phone);
    // Lógica adicional para criar a conta
  }
}
