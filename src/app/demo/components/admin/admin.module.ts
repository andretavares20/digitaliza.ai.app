import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Use CommonModule, não BrowserModule
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    imports: [
        CommonModule, // Correto para módulos que não são o AppModule
        AdminRoutingModule
    ]
})
export class AdminModule { }
