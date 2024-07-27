import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: 'pedidos', data: { breadcrumb: 'Pedidos' }, loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule) },
        { path: 'usuarios', data: { breadcrumb: 'Usuarios' }, loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule) },
        { path: 'dashboard', data: { breadcrumb: 'Dashboard' }, loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: '**', redirectTo: '/notfound' }
    ])],
    exports: [RouterModule]
})
export class AdminRoutingModule { }
