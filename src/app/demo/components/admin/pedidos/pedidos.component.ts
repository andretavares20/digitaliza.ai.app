import { Component, OnInit } from '@angular/core';
import { MockPedidoService } from './services/mock-pedido.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  providers: [MessageService]
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = [];
  loading: boolean = true;
  statuses: string[] = ['Pendente', 'Em andamento', 'Concluído'];
  selectedPedido: any = null;
  displayDetails: boolean = false;

  constructor(private mockPedidoService: MockPedidoService, private messageService: MessageService) { }

  ngOnInit() {
    this.loadPedidos();
  }

  loadPedidos() {
    this.mockPedidoService.getPedidos().subscribe(data => {
      this.pedidos = data;
      this.loading = false;
    });
  }

  viewDetails(pedido: any) {
    this.selectedPedido = pedido;
    this.displayDetails = true;
  }

  importResults(event: any, pedido: any) {
    const files = Array.from(event.target.files) as File[];
    this.mockPedidoService.importResult(pedido.id, files).subscribe(() => {
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Resultado importado com sucesso' });
      this.viewDetails(pedido); // Atualiza os detalhes do pedido
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível importar o resultado' });
    });
  }

  changeStatus(pedido: any, status: string) {
    this.mockPedidoService.updatePedidoStatus(pedido.id, status).subscribe(() => {
      pedido.status = status;
      this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Status do pedido atualizado com sucesso' });
    }, error => {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar o status do pedido' });
    });
  }

  clear(table: any) {
    table.clear();
  }

  onGlobalFilter(table: any, event: any) {
    table.filterGlobal(event.target.value, 'contains');
  }
}
