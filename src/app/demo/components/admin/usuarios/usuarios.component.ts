import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { AuthService } from '../../auth/services/auth.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  loading: boolean = true;
  showLoading: boolean = false;  // Variável para controlar o spinner de carregamento

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private cdr: ChangeDetectorRef  // Injetar ChangeDetectorRef
  ) { }

  ngOnInit() {
    this.checkUserRole();
  }

  checkUserRole() {
    const userRole = this.authService.getRole();
    console.log('rolecheckuser: ', userRole);

    if (userRole === 'ROLE_ADMIN') {
      this.loadUsers();
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Acesso Negado',
        detail: 'Você não tem permissão para visualizar esta página.'
      });
      this.loading = false;
    }
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe(
      data => {
        this.usuarios = data;
        this.loading = false;  // Esconde o spinner após carregar a lista de usuários
        this.showLoading = false;  // Garantindo que o loading usado no editUser também seja removido
        console.log(this.usuarios)
      },
      error => {
        this.loading = false;  // Esconde o spinner em caso de erro
        this.showLoading = false;  // Garantindo que o loading seja removido mesmo em caso de erro
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível carregar a lista de usuários.'
        });
      }
    );
  }


  editUser(usuario: any) {
    const newRole = usuario.role === 'USER' ? 'ADMIN' : 'USER';
  
    this.confirmationService.confirm({
      message: `Tem certeza que deseja alterar o papel do usuário ${usuario.name} para ${newRole}?`,
      header: 'Confirmação de Papel',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.showLoading = true;  // Exibe o spinner de carregamento
  
        // Atualiza o papel do usuário
        this.userService.updateUserRole(usuario.id, newRole).subscribe(
          () => {
            // Atualiza o role do usuário diretamente no front-end
            usuario.role = newRole;

            console.log('role1:',newRole)
  
            this.showLoading = false;  // Esconde o spinner após a atualização
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Papel do usuário atualizado com sucesso.'
            });
          },
          error => {
            console.log('role2:',newRole)
            this.showLoading = false;  // Esconde o spinner em caso de erro
            this.messageService.add({
              severity: 'error',
              summary: 'Erro',
              detail: 'Erro ao atualizar o papel do usuário.'
            });
          }
        );
      }
    });
  }
  
  





  confirmStatusChange(usuario: any) {
    const newStatus = usuario.status === 'Ativo' ? 'Inativo' : 'Ativo';
    this.confirmationService.confirm({
      message: `Tem certeza que deseja alterar o status do usuário ${usuario.name} para ${newStatus}?`,
      header: 'Confirmação de Status',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.showLoading = true;  // Mostra o spinner
        this.toggleUserStatus(usuario);
      }
    });
  }

  toggleUserStatus(usuario: any) {
    const newStatus = usuario.status === 'Ativo' ? 'Inativo' : 'Ativo';
    this.userService.updateUserStatus(usuario.id, newStatus).subscribe(
      () => {
        usuario.status = newStatus;
        this.showLoading = false;  // Esconde o spinner após a ação ser concluída
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Status do usuário atualizado com sucesso.'
        });
      },
      error => {
        this.showLoading = false;  // Esconde o spinner em caso de erro
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível atualizar o status do usuário.'
        });
      }
    );
  }

  confirmRoleChange(usuario: any) {
    const newRole = usuario.role === 'Admin' ? 'User' : 'Admin';
    this.confirmationService.confirm({
      message: `Tem certeza que deseja alterar a função do usuário ${usuario.name} para ${newRole}?`,
      header: 'Confirmação de Função',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.showLoading = true;  // Mostra o spinner
        this.changeUserRole(usuario);
      }
    });
  }

  changeUserRole(usuario: any) {
    const newRole = usuario.role === 'Admin' ? 'User' : 'Admin';
    this.userService.updateUserRole(usuario.id, newRole).subscribe(
      () => {
        usuario.role = newRole;
        this.showLoading = false;  // Esconde o spinner após a ação ser concluída
        this.messageService.add({
          severity: 'success',
          summary: 'Sucesso',
          detail: 'Função do usuário atualizada com sucesso.'
        });
      },
      error => {
        this.showLoading = false;  // Esconde o spinner em caso de erro
        this.messageService.add({
          severity: 'error',
          summary: 'Erro',
          detail: 'Não foi possível atualizar a função do usuário.'
        });
      }
    );
  }

  getStatusButtonIcon(usuario: any): string {
    return usuario.status === 'Ativo' ? 'pi pi-ban' : 'pi pi-check';
  }

  getStatusButtonClass(usuario: any): string {
    return usuario.status === 'Ativo' ? 'p-button-danger' : 'p-button-success';
  }

  getRoleButtonIcon(usuario: any): string {
    return usuario.role === 'Admin' ? 'pi pi-user' : 'pi pi-user-edit';
  }

  getRoleButtonClass(usuario: any): string {
    return usuario.role === 'Admin' ? 'p-button-warning' : 'p-button-info';
  }

  clear(table: any) {
    table.clear();
  }

  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}
