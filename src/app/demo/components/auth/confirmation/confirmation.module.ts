import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast'; // Importar o ToastModule
import { NgxMaskDirective, provideNgxMask, IConfig } from 'ngx-mask';
import { ConfirmationComponent } from './confirmation.component';
import { ConfirmationRoutingModule } from './confirmation-routing.module';
import { CardModule } from 'primeng/card';

const maskConfig: Partial<IConfig> = {
  validation: true,
};

@NgModule({
  declarations: [ConfirmationComponent],
  imports: [
    CommonModule,
    ConfirmationRoutingModule,
    FormsModule,
    InputTextModule,
    PasswordModule,
    ButtonModule,
    ToastModule,
    CardModule,
    NgxMaskDirective
  ],
  providers: [
    provideNgxMask(maskConfig),
  ]
})
export class ConfirmationModule { }
