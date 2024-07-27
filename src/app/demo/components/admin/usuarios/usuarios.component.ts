import { Component, OnInit } from '@angular/core';
import { MockUserService } from './services/mock-user.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
  providers: [MessageService]
})
export class UsuariosComponent implements OnInit {
  usuarios: any[] = [];
  loading: boolean = true;

  constructor(private mockUserService: MockUserService, private messageService: MessageService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.mockUserService.getUsers().subscribe(data => {
      this.usuarios = data;
      this.loading = false;
    });
  }

  editUser(usuario: any) {
    // Lógica para editar o usuário, por exemplo, abrir um modal com o formulário de edição
    console.log('Editando usuário', usuario);
  }

  toggleUserStatus(usuario: any) {
    const newStatus = usuario.status === 'Ativo' ? 'Inativo' : 'Ativo';
    this.mockUserService.updateUserStatus(usuario.id, newStatus).subscribe(() => {
      usuario.status = newStatus;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Status do usuário atualizado com sucesso' });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar o status do usuário' });
    });
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

  changeUserRole(usuario: any) {
    const newRole = usuario.role === 'User' ? 'Admin' : 'User';
    this.mockUserService.updateUserRole(usuario.id, newRole).subscribe(() => {
      usuario.role = newRole;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Função do usuário atualizada com sucesso' });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar a função do usuário' });
    });
  }

  clear(table: any) {
    table.clear();
  }

  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}
