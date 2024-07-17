import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NovoPedidoComponent } from './novo-pedido.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: NovoPedidoComponent }
    ])],
    exports: [RouterModule]
})
export class NovoPedidoRoutingModule { }
