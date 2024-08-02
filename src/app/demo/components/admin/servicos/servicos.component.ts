import { Component, OnInit } from '@angular/core';
import { MockServicoService } from './services/mock-servico.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.scss'],
  providers: [MessageService]
})
export class ServicosComponent implements OnInit {
  servicos: any[] = [];
  servicoDialog: boolean = false;
  servico: any = {};
  submitted: boolean = false;

  constructor(private servicoService: MockServicoService, private messageService: MessageService) { }

  ngOnInit() {
    this.loadServicos();
  }

  loadServicos() {
    this.servicoService.getServicos().subscribe(data => {
      this.servicos = data;
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
          this.servicos = [...this.servicos, data]; // Atualize a lista de serviços aqui corretamente
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
