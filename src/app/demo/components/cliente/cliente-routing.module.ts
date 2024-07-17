import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'painel', data: { breadcrumb: 'Painel' }, loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule) },
        { path: 'novo-pedido', data: { breadcrumb: 'Novo pedido' }, loadChildren: () => import('./novo-pedido/novo-pedido.module').then(m => m.NovoPedidoModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class ClienteRoutingModule { }
