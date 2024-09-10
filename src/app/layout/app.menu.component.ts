import { Component, OnInit } from '@angular/core';
import { AuthService } from '../demo/components/auth/services/auth.service';
import { LayoutService } from './service/app.layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

  model: any[] = [];

  constructor(
    public layoutService: LayoutService,
    private authService: AuthService  // Adicione o AuthService
  ) { }

  ngOnInit() {
    const userRole = this.authService.getRole(); // Pega o papel do usuário
    console.log('userole ',userRole)
    if (userRole === 'ROLE_ADMIN') {
      this.model = [
        {
          label: 'Admin',
          items: [
            { label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/admin/dashboard'] },
            { label: 'Pedidos', icon: 'pi pi-fw pi-shopping-cart', routerLink: ['/admin/pedidos'] },
            { label: 'Usuários', icon: 'pi pi-fw pi-users', routerLink: ['/admin/usuarios'] },
            { label: 'Serviços', icon: 'pi pi-fw pi-users', routerLink: ['/admin/servicos'] }
          ]
        },
        {
          label: 'Cliente',
          items: [
            { label: 'Novo pedido', icon: 'pi pi-fw pi-id-card', routerLink: ['/cliente/novo-pedido'] },
            { label: 'Painel', icon: 'pi pi-fw pi-home', routerLink: ['/cliente/painel'] }
          ]
        }
      ];
    } else if (userRole === 'ROLE_USER') {
      this.model = [
        {
          label: 'Cliente',
          items: [
            { label: 'Novo pedido', icon: 'pi pi-fw pi-id-card', routerLink: ['/cliente/novo-pedido'] },
            { label: 'Painel', icon: 'pi pi-fw pi-home', routerLink: ['/cliente/painel'] }
          ]
        }
      ];
    }
  }
}
