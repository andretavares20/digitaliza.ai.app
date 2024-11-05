import { Component, OnInit } from '@angular/core';
import { PedidoService } from '../../cliente/novo-pedido/services/pedido.service';
import { MessageService, ConfirmationService } from 'primeng/api';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss'],
  providers: [MessageService, ConfirmationService]
})
export class PedidosComponent implements OnInit {
  pedidos: any[] = [];
  loading: boolean = true;
  selectedPedido: any = null;
  displayDetails: boolean = false;
  showLoading: boolean = false;  // Variável de estado para exibir o overlay de carregamento

  constructor(
    private pedidoService: PedidoService, 
    private messageService: MessageService,
    private confirmationService: ConfirmationService  // Injetando o serviço de confirmação
  ) {}

  ngOnInit() {
    this.loadPedidos();
  }

  loadPedidos() {
    this.pedidoService.getAllOrders().subscribe(
      (data: any[]) => {
        this.pedidos = data;
        this.loading = false;
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao carregar pedidos' });
        this.loading = false;
      }
    );
  }

  viewDetails(pedido: any) {
    this.selectedPedido = pedido;
    this.displayDetails = true;
  }

  confirmAction(pedido: any) {
    this.confirmationService.confirm({
      message: `Tem certeza que deseja iniciar o pedido ${pedido.id}?`,
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.changeStatus(pedido, 'EM_ANDAMENTO');
      }
    });
  }

  changeStatus(pedido: any, status: string) {
    if (status === 'EM_ANDAMENTO' && pedido.status === 'PAGAMENTO_APROVADO') {
      this.showLoading = true;  // Exibe o loading
      this.pedidoService.updateOrderStatus(pedido.id, { status }).subscribe(
        () => {
          pedido.status = status;
          this.showLoading = false;  // Esconde o loading
          this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Pedido colocado em andamento' });
        },
        error => {
          this.showLoading = false;  // Esconde o loading em caso de erro
          this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Não foi possível atualizar o status do pedido' });
        }
      );
    } else {
      this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Ação inválida.' });
    }
  }

  confirmImportResults(event: any, pedido: any) {
    const files = Array.from(event.target.files) as File[];

    this.confirmationService.confirm({
      message: `Você está prestes a importar os seguintes arquivos para o pedido ${pedido.id}: \n${files.map(file => file.name).join(', ')}`,
      header: 'Confirmação de Importação',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.importResults(files, pedido);
      }
    });
  }

  importResults(files: File[], pedido: any) {
    this.showLoading = true;  // Exibe o loading
    this.pedidoService.uploadOrderResults(pedido.id, files).subscribe(
      () => {
        this.messageService.add({ severity: 'success', summary: 'Sucesso', detail: 'Resultados importados com sucesso' });
        pedido.status = 'CONCLUIDO';
        this.showLoading = false;  // Esconde o loading após o sucesso
        this.loadPedidos();  // Atualiza a lista de pedidos
      },
      error => {
        this.showLoading = false;  // Esconde o loading em caso de erro
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao importar os resultados' });
      }
    );
  }

  downloadCustomerFiles(pedido: any) {
    this.pedidoService.downloadCustomerFilesAsZip(pedido.id).subscribe(
      (response: Blob) => {
        const blob = new Blob([response], { type: 'application/zip' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `pedido_${pedido.id}_arquivos.zip`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao baixar os arquivos do cliente' });
      }
    );
  }

  // Método de download do resultado do pedido
  downloadResult(order: any) {
    this.pedidoService.downloadOrderResult(order.id).subscribe(
      response => {
        const blob = new Blob([response], { type: 'application/octet-stream' });
        saveAs(blob, 'resultado_' + order.id + '.pdf');
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Erro', detail: 'Erro ao baixar o resultado do pedido.' });
      }
    );
  }
}
