import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAccountRoutingModule } from './create-account-routing.module';
import { CreateAccountComponent } from './create-account.component';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast'; // Importar o ToastModule
import { NgxMaskDirective, provideNgxMask, IConfig } from 'ngx-mask';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [CreateAccountComponent],
  imports: [
    CommonModule,
    CreateAccountRoutingModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask(maskConfig),
  ]
})
export class CreateAccountModule { }
