import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ServicoService } from './services/servico.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class ServicosComponent implements OnInit {
  servicos: any[] = [];
  servicoDialog: boolean = false;
  servico: any = {};
  submitted: boolean = false;

  constructor(
    private servicoService: ServicoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) { }

  ngOnInit() {
    this.loadServicos();
  }

  loadServicos() {
    this.servicoService.getServicos().subscribe(data => {
      this.servicos = data;
    });
  }

  confirmNewServico() {
    this.confirmationService.confirm({
      message: 'Deseja adicionar um novo serviço?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.openNew();
      }
    });
  }

  confirmEditServico(servico: any) {
    this.confirmationService.confirm({
      message: `Deseja editar o serviço ${servico.name}?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.editServico(servico);
      }
    });
  }

  confirmDeleteServico(servico: any) {
    this.confirmationService.confirm({
      message: `Deseja excluir o serviço ${servico.name}?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.deleteServico(servico);
      }
    });
  }

  confirmSaveServico() {
    this.confirmationService.confirm({
      message: this.servico.id ? `Deseja salvar as alterações no serviço ${this.servico.name}?` : 'Deseja salvar o novo serviço?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.saveServico();
      }
    });
  }

  openNew() {
    this.servico = {};
    this.submitted = false;
    this.servicoDialog = true;
  }

  editServico(servico: any) {
    this.servico = { ...servico };
    this.servicoDialog = true;
  }

  deleteServico(servico: any) {
    this.servicoService.deleteServico(servico.id).subscribe(() => {
      this.servicos = this.servicos.filter(s => s.id !== servico.id);
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Serviço deletado com sucesso' });
    });
  }

  saveServico() {
    this.submitted = true;

    if (this.servico.name.trim()) {
      if (this.servico.id) {
        this.servicoService.updateServico(this.servico).subscribe(data => {
          this.servicos[this.findIndexById(data.id)] = data;
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Serviço atualizado com sucesso' });
        });
      } else {
        this.servicoService.addServico(this.servico).subscribe(data => {
          this.servicos = [...this.servicos, data];
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Serviço adicionado com sucesso' });
        });
      }

      this.servicos = [...this.servicos];
      this.servicoDialog = false;
      this.servico = {};
    }
  }

  findIndexById(id: number): number {
    return this.servicos.findIndex(s => s.id === id);
  }

  hideDialog() {
    this.servicoDialog = false;
    this.submitted = false;
  }
}
